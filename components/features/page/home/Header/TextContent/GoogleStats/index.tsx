import { StarsRating } from "@/components/features";
import { FcGoogle } from "@/components/icons";
import NumberTicker from "@/components/ui/number-ticker";

/**
 * Component to display Google statistics including the number of reviews and ratings.
 *
 * @param {Object} props - The properties object.
 * @param {number} props.reviewsCount - The number of Google reviews.
 * @param {number} props.ratingsCount - The number of Google ratings.
 * @returns {JSX.Element} The rendered GoogleStats component.
 */

export function GoogleStats({
  reviewsCount,
  ratingsCount,
}: {
  reviewsCount: number;
  ratingsCount: number;
}) {
  return (
    <div className="flex w-full flex-col items-center md:items-start">
      <div className="flex items-center gap-2 md:justify-start">
        <FcGoogle />
        <span className="font-black">
          <NumberTicker decimalPlaces={2} value={ratingsCount} />{" "}
        </span>
        <StarsRating rating={ratingsCount} />
      </div>
      <p className="text-left text-xs">
        <span className="font-black">
          <NumberTicker value={reviewsCount} />
        </span>{" "}
        Google Reviews
      </p>
    </div>
  );
}
