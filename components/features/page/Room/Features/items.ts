import {
  BsCameraReels,
  FaPeopleRoof,
  LiaBedSolid,
  MdBalcony,
  MdOutlineBathtub,
  TbBrandIntercom,
  TbRulerMeasure,
  TbTrafficCone
} from "@/components/icons";
import { IconType } from "react-icons";

interface FeatureItem {
  id: number;
  color: string;
  Icon: IconType;
  text: string;
}

export const featuresList: FeatureItem[] = [
  {
    id: 1,
    color: "bg-pink-100",
    Icon: MdOutlineBathtub,
    text: "Private"
  },
  {
    id: 2,
    color: "bg-green-100",
    Icon: MdBalcony,
    text: "Balcony"
  },
  {
    id: 3,
    color: "bg-cyan-100",
    Icon: TbRulerMeasure,
    text: "258 Sqf"
  },
  {
    id: 4,
    color: "bg-sky-100",
    Icon: TbTrafficCone,
    text: "Parking"
  },
  {
    id: 5,
    color: "bg-violet-100",
    Icon: FaPeopleRoof,
    text: "Rooftop"
  },
  {
    id: 6,
    color: "bg-lime-100",
    Icon: LiaBedSolid,
    text: "1.5 Beds"
  },
  {
    id: 7,
    color: "bg-emerald-100",
    Icon: BsCameraReels,
    text: "Surveillance"
  },
  {
    id: 8,
    color: "bg-amber-100",
    Icon: TbBrandIntercom,
    text: "Intercom"
  }
];
