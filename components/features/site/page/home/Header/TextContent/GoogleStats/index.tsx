import { FaStar, FaStarHalfAlt, FcGoogle } from "@/components/icons";
import { Locale } from "@/i18n-config";

export function GoogleStats({
  lang,
  reviewsCount,
  ratingCount,
}: {
  lang: Locale;
  reviewsCount: number;
  ratingCount: number;
}) {
  return (
    <div className="flex w-full flex-col items-center md:items-start">
      <div className="flex items-center gap-2 md:justify-start">
        <FcGoogle />
        <span className="font-black">{reviewsCount}</span>
        <span className="flex items-center gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </span>
      </div>
      <p className="text-left text-xs">
        <span className="font-black">{ratingCount}</span> Google Reviews
      </p>
    </div>
  );
}
