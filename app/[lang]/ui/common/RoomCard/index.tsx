import Image from "next/image";
import { ShareBtn } from "../SharedBtn";
import { amenityIcons } from "./Icons";
import { Button } from "rsuite";
import { RiDoorClosedLine } from "../../icons";

export const shareData = {
  title: "MDN",
  text: "Learn web development on MDN!",
  url: "https://developer.mozilla.org",
};

export const RoomCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-md my-8 mt-0 grid grid-col-1 w-full grid-rows-[12rem,205px] min-500:grid-rows-[13rem,205px] group">
      <div className="h-full w-full pb-2">
        <figure className="relative w-full h-full shadow-[0_0.7rem_0.5rem_-0.4rem_rgba(0,0,0,0.5)] rounded-md overflow-hidden">
          <Image
            className="absolute w-full h-full object-cover lg:group-hover:scale-[1.05] transition-transform duration-300"
            src={
              "/assets/home/trending/phtograph-behind-plant-on-the-table-during-sunset-at-the-hotel-quinto-nivel-rd.webp"
            }
            alt="hero image"
            width={1920}
            height={1080}
          />
        </figure>
      </div>

      <div className="px-2 pb-4 grid grid-cols-1 grid-rows-[auto,auto,auto,auto]">
        <div className="flex items-center justify-between border-b border-neutral-500 my-1">
          <p className="uppercase font-bold text-xs text-neutral-500">
            Unit # 201
          </p>
          <p className="text-xs font-semibold bg-neutral-500 text-white px-2 py-1 rounded-tl-md rounded-tr-md">
            2,350 / Night
          </p>
        </div>
        <div className="flex items-center justify-between py-1">
          <h3 className="text-neutral-500 uppercase font-bold text-xs">
            Basica
          </h3>
          <ShareBtn
            data={shareData}
            className="bg-neutral-500 border-none text-white shadow-md"
          />
        </div>
        <p className="text-xs text-neutral-500 text-left leading-4 font-medium">
          Discover comfort in our Basic Room. An inviting space for relaxation
          and tranquility. Your ideal escape awaits!
        </p>
        <div className="flex items-center justify-start my-1">
          <p className="text-xs font-bold">Amenities</p>
          <ul className="flex gap-2 ml-2 pl-2 border-l-2">
            {amenityIcons.map((amenity) => (
              <li
                className="flex items-center justify-start"
                key={amenity.label}
              >
                <amenity.Icon size={18} color="rgb(64,64,64)" />
              </li>
            ))}
          </ul>
        </div>
        <Button
          size="lg"
          appearance="default"
          active
          className="flex-1 text-xs"
        >
          See Details
        </Button>
      </div>
    </div>
  );
};
