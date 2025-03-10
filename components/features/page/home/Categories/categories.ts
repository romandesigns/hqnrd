import {
  BsFillHouseDoorFill,
  FaBed,
  FaClone,
  FaCrown,
  FaUsers,
  MdBed,
} from "@/components/icons";
import { slugCategories } from "@/utils/constants/global";
import { IconType } from "react-icons";

export interface CategoryItem {
  id: string;
  title: string;
  description: string;
  btnCTA: string;
  slug: string;
  Icon: IconType;
  maxGuestsPerUnit: number;
  totalUnits: number;
  bgImage: string;
}

export const transformSlug = (slug: string) => {
  return `?categoria=${slugCategories.map((categoriaSlug) => slug.toLowerCase() === categoriaSlug.value)[0]}`;
};

export const categories: CategoryItem[] = [
  {
    id: "1",
    title: "Basicas",
    description: "Perfect for solo travelers seeking simplicity and comfort.",
    btnCTA: "View Rooms",
    slug: transformSlug("Basicas"),
    Icon: MdBed,
    maxGuestsPerUnit: 4,
    totalUnits: 2,
    bgImage: "/assets/images/home/header/HQNRD-first-featured-image.webp",
  },
  {
    id: "2",
    title: "Standards",
    description: "Perfect for solo travelers seeking simplicity and comfort.",
    btnCTA: "View Rooms",
    slug: transformSlug("Standards"),
    Icon: BsFillHouseDoorFill,
    maxGuestsPerUnit: 4,
    totalUnits: 2,
    bgImage: "/assets/images/home/header/HQNRD-first-featured-image.webp",
  },
  {
    id: "3",
    title: "Executivas",
    description: "Perfect for solo travelers seeking simplicity and comfort.",
    btnCTA: "View Rooms",
    slug: transformSlug("Executivas"),
    Icon: FaCrown,
    maxGuestsPerUnit: 4,
    totalUnits: 2,
    bgImage: "/assets/images/home/header/HQNRD-first-featured-image.webp",
  },
  {
    id: "4",
    title: "Double Room",
    description: "Perfect for solo travelers seeking simplicity and comfort.",
    btnCTA: "View Rooms",
    slug: transformSlug("Dobles"),
    Icon: FaClone,
    maxGuestsPerUnit: 4,
    totalUnits: 2,
    bgImage: "/assets/images/home/header/HQNRD-first-featured-image.webp",
  },
  {
    id: "5",
    title: "Double Bed",
    description: "Perfect for solo travelers seeking simplicity and comfort.",
    btnCTA: "View Rooms",
    slug: transformSlug("Doble Camas"),
    Icon: FaBed,
    maxGuestsPerUnit: 4,
    totalUnits: 2,
    bgImage: "/assets/images/home/header/HQNRD-first-featured-image.webp",
  },
  {
    id: "6",
    title: "Familiar",
    description: "Perfect for solo travelers seeking simplicity and comfort.",
    btnCTA: "View Rooms",
    slug: transformSlug("Familiares"),
    Icon: FaUsers,
    maxGuestsPerUnit: 4,
    totalUnits: 2,
    bgImage: "/assets/images/home/header/HQNRD-first-featured-image.webp",
  },
];
