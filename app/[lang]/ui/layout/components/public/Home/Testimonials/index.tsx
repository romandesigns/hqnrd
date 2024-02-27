import { testimonials } from "@/public/assets/data/testimonials";
import { Section } from "../../../../containers";
import { Heading } from "./Heading";
import TestimonialList from "./Testimonial";

export default function Testimonials() {
  return (
    <Section className="w-full bg-primary-100/30 py-10 px-2 rounded-md sm:py-20 sm:px-10 relative">
      <article className="w-full h-full sm:p-4 sm:border sm:border-primary-100/40 rounded-md">
        <div className="w-full h-full bg-primary-100/40 py-10 p-2 rounded-md sm:px-4 relative">
          <Heading />
          <div className="my-20 ">
            <TestimonialList testimonials={testimonials} />
          </div>
          {/* <div className="bg-[url('/assets/general/quotes-icon.svg')] bg-no-repeat bg-[right_-6rem_bottom_-2rem] absolute top-0 left-0 right-0 bottom-0 z-0 opacity-10" /> */}
        </div>
      </article>
      <div className="bg-[url('/assets/general/quotes-icon.svg')] bg-no-repeat bg-[right_0rem_bottom] lg:bg-[length:30%] bg-[length:70%] absolute top-0 left-0 right-0 bottom-0 opacity-[0.08] -z-[2]" />
    </Section>
  );
}
