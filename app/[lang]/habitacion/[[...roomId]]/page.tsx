import { Locale } from "@/i18n-config";
import { categoriesSlug } from "@/utils/constants/global";
import { removePluralSuffix } from "@/utils/formatter/pluralSuffixCleaner";
import { redirect } from "next/navigation";

type CategoryObject = {
  [key: string]: {
    value: string;
    label: string;
    units?: number[];
  };
};

export default async function Page({ params }: { params: Promise<{ roomId: string, lang: Locale }> }) {
  // Destructuring segment parameters
  const { lang, roomId } = await params;

  // Transforming slug array to create an object containing the rooms and associated identifiers
  const transformSlugCategories = (): CategoryObject => {
    return categoriesSlug.filter(slug => slug.value !== "ver-todas").reduce<CategoryObject>((acc, category) => {
      acc[removePluralSuffix(category.value)] = { ...category };
      return acc;
    }, {});
  };

  const checkCategoryAndUnitFromQuery = () => {
    // Redirecting user to rooms page if any of the following evaluates to true
    if (roomId === undefined || !Array.isArray(roomId) || roomId.length !== 2) redirect(`/${lang}/habitaciones`);
    const [category, unit] = roomId;
    const unitNumber = parseInt(unit, 10);
    const categories = transformSlugCategories();
    // Check if category exists
    if (!categories[category]) return false;
    // Check if unit exists within the category
    return categories[category].units?.includes(unitNumber) || false;
  };


  console.log(checkCategoryAndUnitFromQuery());
  return <p>Page ID: 44</p>;
}
