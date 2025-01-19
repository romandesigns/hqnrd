export interface CaredReviewProps {
  id: number;
  avatar: string;
  avatarAlt: string;
  author: string;
  comment: string;
  rating: number;
  servicesRating: {
    rooms: number;
    location: number;
    service: number;
  };
}
