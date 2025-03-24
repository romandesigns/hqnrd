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

export interface Room {
  id: string;
  unitNumber: number;
  pricePerNight: number;
  category: string;
  slug: string;
  cardTitle: string;
  cardDescription: string;
  pageTitle: string;
  pageDescription: string;
  maxGuestAllowed: number;
  bedQuantity: number;
  roomDimension: string;
  media: {
    featuredCardImage: string;
    roomGallery: string[];
  };
}

export enum RoomCategory {
  BASICA = "basica",
  STANDAR = "standar",
  EJECUTIVA = "ejecutiva",
  FAMILIAR = "familiar",
  DOBLE = "doble",
  DOBLE_CAMA = "doble-cama",
}

export enum checkOutTime {
  time = "11:30 AM",
}
