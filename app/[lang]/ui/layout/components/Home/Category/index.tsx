import { Heading } from "@/app/[lang]/ui/common";
import { BiGroup } from "@/app/[lang]/ui/icons";
import { Section } from "../../../containers";

export function Category() {
  return (
    <Section className="my-2 p-2 snap-y flex items-center justify-center w-full py-10 px-2 rounded-md sm:py-20 sm:px-10">
      <article className="w-full h-full sm:p-4 sm:border sm:border-neutral-100/10 rounded-md">
        <div className="w-full mx-auto max-w-7xl text-center flex flex-items justify-center items-center flex-col h-full bg-neutral-100/10 rounded-md p-2 py-10">
          <Heading
            highlightText="Available Categories"
            headingText="Select your Room Type and reserve now!"
            highlightColor="text-neutral-500 font-bold bg-neutral-100/50"
          />
          <ul className="md:py-10 h-[36rem] sm:h-[40rem] grid md:grid-cols-6 md:grid-rows-3 grid-cols-2 w-full gap-2 md:px-60">
            <li className="overflow-hidden md:delay-75 rounded-md border font-bold p-3 bg-white flex items-center justify-center md:col-start-5 md:col-end-7 md:row-start-3 md:row-end-4">
              <div className="w-full relative h-full md:hover:shadow-lg hover:cursor-pointer focus:shadow-sm md:transition md:duration-150 ease-out md:hover:ease-in flex items-center justify-center shadow-sm rounded-md border border-neutral-100/15 flex-col">
                <span>Basic</span>
                <p className="absolute bottom-1 right-1 md:bottom-2 md:right-2 bg-neutral-100/10 md:bg-neutral-100/30 rounded-full py-1 p-2 flex items-center justify-center">
                  <span>
                    <BiGroup size={15} />
                  </span>
                  <span className="text-xs font-semibold text-[.6rem] md:text-[.7rem] ml-1">
                    4 Max
                  </span>
                </p>
              </div>
            </li>
            <li className="overflow-hidden md:delay-75 rounded-md border font-bold p-3 bg-white flex items-center justify-center col-start-2 col-end-3 row-start-1 row-end-4 md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-2">
              <div className="w-full relative h-full md:hover:shadow-lg hover:cursor-pointer focus:shadow-sm md:transition md:duration-150 ease-out md:hover:ease-in flex items-center justify-center shadow-sm rounded-md border border-neutral-100/15 flex-col">
                <span>Double Room</span>
                <p className="absolute bottom-1 right-1 md:bottom-2 md:right-2 bg-neutral-100/10 md:bg-neutral-100/30 rounded-full py-1 p-2 flex items-center justify-center">
                  <span>
                    <BiGroup size={15} />
                  </span>
                  <span className="text-xs font-semibold text-[.6rem] md:text-[.7rem] ml-1">
                    4 Max
                  </span>
                </p>
              </div>
            </li>
            <li className="overflow-hidden md:delay-75 rounded-md border font-bold p-3 bg-white flex items-center justify-center col-start-2 col-end-3 row-start-5 row-end-6 md:col-start-3 md:col-end-5 md:row-start-3 md:row-end-4">
              <div className="w-full relative h-full md:hover:shadow-lg hover:cursor-pointer focus:shadow-sm md:transition md:duration-150 ease-out md:hover:ease-in flex items-center justify-center shadow-sm rounded-md border border-neutral-100/15 flex-col">
                <span>Standard</span>
                <p className="absolute bottom-1 right-1 md:bottom-2 md:right-2 bg-neutral-100/10 md:bg-neutral-100/30 rounded-full py-1 p-2 flex items-center justify-center">
                  <span>
                    <BiGroup size={15} />
                  </span>
                  <span className="text-xs font-semibold text-[.6rem] md:text-[.7rem] ml-1">
                    4 Max
                  </span>
                </p>
              </div>
            </li>
            <li className="overflow-hidden md:delay-75 rounded-md border font-bold p-3 bg-white flex items-center justify-center col-start-1 col-end-2 row-start-2 row-end-4 md:col-start-4 md:col-end-7 md:row-start-1 md:row-end-2">
              <div className="w-full relative h-full md:hover:shadow-lg hover:cursor-pointer focus:shadow-sm md:transition md:duration-150 ease-out md:hover:ease-in flex items-center justify-center shadow-sm rounded-md border border-neutral-100/15 flex-col">
                <span>Double Bed</span>
                <p className="absolute bottom-1 right-1 md:bottom-2 md:right-2 bg-neutral-100/10 md:bg-neutral-100/30 rounded-full py-1 p-2 flex items-center justify-center">
                  <span>
                    <BiGroup size={15} />
                  </span>
                  <span className="text-xs font-semibold text-[.6rem] md:text-[.7rem] ml-1">
                    4 Max
                  </span>
                </p>
              </div>
            </li>
            <li className="overflow-hidden md:delay-75 rounded-md border font-bold p-3 bg-white flex items-center justify-center col-span-2 row-start-4 row-end-5 md:col-start-1 md:col-end-7 md:row-start-2 md:row-end-3">
              <div className="w-full relative h-full md:hover:shadow-lg hover:cursor-pointer focus:shadow-sm md:transition md:duration-150 ease-out md:hover:ease-in flex items-center justify-center shadow-sm rounded-md border border-neutral-100/15 flex-col">
                <span>Family</span>
                <p className="absolute bottom-1 right-1 md:bottom-2 md:right-2 bg-neutral-100/10 md:bg-neutral-100/30 rounded-full py-1 p-2 flex items-center justify-center">
                  <span>
                    <BiGroup size={15} />
                  </span>
                  <span className="text-xs font-semibold text-[.6rem] md:text-[.7rem] ml-1">
                    4 Max
                  </span>
                </p>
              </div>
            </li>
            <li className="overflow-hidden md:delay-75 rounded-md border font-bold p-3 bg-white flex items-center justify-center col-start-1 col-end-2 row-start-5 row-end-6 md:col-start-1 md:col-end-3 md:row-start-3 md:row-end-4">
              <div className="w-full relative h-full md:hover:shadow-lg hover:cursor-pointer focus:shadow-sm md:transition md:duration-150 ease-out md:hover:ease-in flex items-center justify-center shadow-sm rounded-md border border-neutral-100/15 flex-col">
                <span>Executive</span>
                <p className="absolute bottom-1 right-1 md:bottom-2 md:right-2 bg-neutral-100/10 md:bg-neutral-100/30 rounded-full py-1 p-2 flex items-center justify-center">
                  <span>
                    <BiGroup size={15} />
                  </span>
                  <span className="text-xs font-semibold text-[.6rem] md:text-[.7rem] ml-1">
                    4 Max
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </article>
    </Section>
  );
}
