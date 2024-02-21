import { Section } from "../../../../containers/Section";
import { CardDiscount, Heading } from "../../../Home";

export default function Discounts() {
  return (
    <Section className="w-full bg-tertiary-100/20 py-10 px-2 rounded-md sm:py-20 sm:px-10 relative">
      <article className="w-full h-full md:p-2 rounded-md grid grid-cols-[1fr] grid-rows-[auto_1fr_1fr] md:grid-cols-2 md:grid-rows-1 gap-y-4 z-[2]">
        <Heading />
        <CardDiscount
          imgSrc="/assets/general/five-percent.svg"
          eligibleDays="Applicable When Booking 5 days"
          borderColor="border-primary-500"
          bgColor="bg-primary-500/90"
        />
        <CardDiscount
          imgSrc="/assets/general/eight-percent.svg"
          eligibleDays="Applicable When Booking 8 days"
          borderColor="border-neutral-500"
          bgColor="bg-neutral-500/90"
        />
      </article>
      <div className="bg-[url('/assets/general/travel-bag.svg')] bg-no-repeat bg-[left_bottom_-2rem] bg-[length:20%] absolute top-0 left-0 right-0 bottom-0 opacity-10" />
    </Section>
  );
}
