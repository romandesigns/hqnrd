import { Heading } from "@/app/[lang]/ui/common";
import { Section } from "../../../containers";
import { amenities } from "./amenities";

export function Amenities() {
  return (
    <Section className="my-2 p-2 snap-y flex items-center justify-center w-full py-10 px-2 rounded-md sm:py-20 sm:px-10 relative">
      <article className="w-full h-full sm:p-4 sm:border sm:border-neutral-100/10 rounded-md relative">
        <div className="w-full mx-auto max-w-7xl text-center flex justify-center items-center flex-col h-full bg-neutral-100/10 rounded-md p-2 py-10">
          <Heading
            highlightText="Your comfort is our priority"
            headingText="Providing the best amenities for your stay!"
            highlightColor="text-neutral-500 font-bold bg-neutral-100/50"
          />
          <ul className="py-10 px-2 grid grid-cols-2 w-full gap-4 sm:grid-cols-3 md:grid-cols-4 lg:px-28">
            {amenities.map((amenity, idx) => (
              <li key={idx} className="flex items-center justify-start">
                <span className="order-2 text-[.8rem]">{amenity.label}</span>
                <span className="order-1 w-5 h-5 mr-1">
                  <amenity.Icon size={18} color="#333333" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </article>
      <div className="bg-[url('/assets/general/stars.svg')] bg-no-repeat bg-[left_-4rem_bottom_-3rem] bg-[length:60%] absolute top-0 left-0 right-0 bottom-0 opacity-[0.03] -z-[1] sm:bg-[length:40%] md:bg-[length:30%] lg:bg-[length:20%] lg:bg-[left_-2rem_bottom_-3rem]" />
    </Section>
  );
}
