import { IconType } from "react-icons";
import {
  AiOutlineYoutube,
  BiCloset,
  CgSmartHomeRefrigerator,
  FaPeopleRoof,
  GiCctvCamera,
  GiWaterBottle,
  GrToast,
  MdBalcony,
  MdCoffeeMaker,
  MdOutlineBathtub,
  MdOutlineBlender,
  MdOutlineLocalLaundryService,
  MdOutlineWaterDrop,
  MdVpnKey,
  MdWifi,
  PiCouch,
  PiFanBold,
  PiTelevisionSimple,
  RiNetflixFill,
  TbAirConditioning,
  TbBrandIntercom,
  TbMicrowave,
  TbToolsKitchen,
  TbWheelchair
} from "@/components/icons";

interface Amenity {
  Icon: IconType;
  label: string;
}

export const amenities: Amenity[] = [
  {
    Icon: TbAirConditioning,
    label: "Air Conditioner"
  },
  {
    Icon: TbMicrowave,
    label: "Microwave"
  },
  {
    Icon: TbBrandIntercom,
    label: "Intercom"
  },
  {
    Icon: TbToolsKitchen,
    label: "Kitchen"
  },
  {
    Icon: TbWheelchair,
    label: "Disability Friendly"
  },
  {
    Icon: CgSmartHomeRefrigerator,
    label: "Refrigerator"
  },
  {
    Icon: AiOutlineYoutube,
    label: "YouTube"
  },
  {
    Icon: BiCloset,
    label: "Closet"
  },
  {
    Icon: GiCctvCamera,
    label: "Sourveillance 24/7"
  },
  {
    Icon: RiNetflixFill,
    label: "NetFlix"
  },
  {
    Icon: GrToast,
    label: "Toaster"
  },
  {
    Icon: MdCoffeeMaker,
    label: "Coffee Maker"
  },
  {
    Icon: MdWifi,
    label: "Wifi"
  },
  {
    Icon: MdOutlineBathtub,
    label: "Bathrooms"
  },
  {
    Icon: MdOutlineWaterDrop,
    label: "Water Hot/Cold"
  },
  {
    Icon: MdBalcony,
    label: "Balcony"
  },
  {
    Icon: MdVpnKey,
    label: "Electric Keys"
  },
  {
    Icon: MdOutlineLocalLaundryService,
    label: "Laundry"
  },
  {
    Icon: MdOutlineBlender,
    label: "Blender"
  },
  {
    Icon: PiTelevisionSimple,
    label: "Smart TV"
  },
  {
    Icon: PiFanBold,
    label: "Ceiling Fan"
  },
  {
    Icon: PiCouch,
    label: "Coach"
  },
  {
    Icon: FaPeopleRoof,
    label: "Rooftop Access"
  },
  {
    Icon: GiWaterBottle,
    label: "Beverage Included"
  }
];
