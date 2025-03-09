import { HeadingSection } from "@/components/features/site/Headings";
import { Content, Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { CardDiscount } from "./CardDiscount";

/**
 * The `Discounts` component renders a section that displays exclusive discount offers.
 * It includes a heading section with a title and description, followed by two discount cards
 * and a contact button.
 *
 * @returns {JSX.Element} The rendered Discounts component.
 */
export function Discounts() {
  return (
    <Section>
      <Content className="gap-4 rounded-md border p-1 pt-8 md:p-4">
        <HeadingSection
          title="Exclusive Discounts"
          description="The longer you stay, the more you save!"
        />
        <Content className="grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1">
          <CardDiscount highlight="Discount Available!"
                        percentage={5}
                        bgImage="/assets/images/home/header/HQNRD-first-featured-image.webp" />
          <CardDiscount highlight="Discount Available"
                        percentage={8}
                        bgImage="/assets/images/home/header/HQNRD-first-featured-image.webp" />
        </Content>
        <div className="my-4 flex w-full justify-center py-4">
          <Button className="px-20">Contact us</Button>
        </div>
      </Content>
    </Section>
  );
}
