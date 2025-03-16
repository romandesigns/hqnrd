import { IconType } from "react-icons";

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

export interface CategoryInterface {
  label: string;
  units: number[];
  btnCTA: string;
  slug: string;
  Icon: IconType;
  maxGuestsPerUnit: number;
  totalUnits: number;
  bgImage: string;
}
