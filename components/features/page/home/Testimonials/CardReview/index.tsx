import { StarsRating } from "@/components/features";
import { CaredReviewProps } from "@/types";
import Image from "next/image";

/**
 * Component to display a review card with user avatar, author name, comment, and ratings.
 *
 * @param {CaredReviewProps} props - The properties for the CaredReview component.
 * @param {Object} props.review - The review object containing details to be displayed.
 * @param {string} props.review.avatar - The URL of the reviewer's avatar image.
 * @param {string} props.review.avatarAlt - The alt text for the reviewer's avatar image.
 * @param {string} props.review.author - The name of the review's author.
 * @param {string} props.review.comment - The comment text of the review.
 * @param {Object} props.review.servicesRating - The ratings for different services.
 * @param {number} props.review.servicesRating.location - The rating for the location.
 * @param {number} props.review.servicesRating.rooms - The rating for the rooms.
 * @param {number} props.review.servicesRating.service - The rating for the service.
 * @returns {JSX.Element} The JSX element representing the review card.
 */

export function CaredReview({ review }: { review: CaredReviewProps }) {
  return (
    <div className="glass w-auto rounded-lg">
      <div className="flex items-end">
        <div className="h-12 rounded-tl-md bg-muted p-1" />
        <div className="relative overflow-hidden bg-transparent p-2 after:absolute after:content-['']">
          <div className="rounded-b-md p-2 shadow-[0_66px_0_10px_hsl(var(--muted))]">
            <Image
              src={review.avatar}
              alt={review.avatarAlt}
              height={80}
              width={80}
              className="rounded-md"
            />
          </div>
        </div>
        <div className="flex h-12 flex-1 items-center justify-start rounded-tr-md bg-muted p-2 font-bold">
          {review.author}
        </div>
      </div>
      <div className="rounded-b-md bg-muted">
        <div className="p-4 pt-0">
          <p className="text-xs leading-6 text-gray-500 text-muted-foreground">
            {review.comment}
          </p>
        </div>
        <div className="rounded-b-md border-t bg-muted-foreground/5 p-4">
          <div className="flex items-center gap-2">
            <p className="font-bold">
              <span className="mr-2 text-sm text-muted-foreground">
                PROVIDED
              </span>
              <span>4.5</span>
            </p>
            <div className="flex items-center">
              <StarsRating rating={4.5} />
            </div>
          </div>
          <div className="flex gap-4 text-xs">
            <p>
              <span className="mr-1 text-muted-foreground">Rooms:</span>{" "}
              <span className="font-bold">
                {review.servicesRating.location}
              </span>
            </p>
            <p>
              <span className="mr-1 text-muted-foreground">Location:</span>{" "}
              <span className="font-bold">{review.servicesRating.rooms}</span>
            </p>
            <p>
              <span className="mr-1 text-muted-foreground">Service:</span>{" "}
              <span className="font-bold">{review.servicesRating.service}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
