import { FcGoogle } from "@/app/[lang]/ui/icons";
import { testimonials } from "@/public/assets/data/testimonials";
import { Section } from "../../../../containers";
import TestimonialList from "./Testimonial";

export default function Testimonials() {
  return (
    <Section className="w-full bg-primary-100/30 py-10 px-2 rounded-md sm:py-20 sm:px-10">
      <article className="w-full h-full sm:bg-white/50 sm:p-2 rounded-md">
        <div className="w-full h-full bg-primary-100/40 py-10 p-2 rounded-md sm:px-4 relative shadow-sm shadow-black/15">
          <div>
            <p className="inline-flex items-center text-xs justify-center text-secondary-800 font-bold bg-white/50 p-1 rounded-full px-2">
              89
              <span className="flex items-center text-xs justify-center mx-2">
                <FcGoogle />
                Google Testimonials
              </span>
            </p>
            <h3 className="font-black my-2 text-neutral-500 underline text-xl">
              See What Our Guests Think About Us!
            </h3>
          </div>

          <ul className="my-20">
            <TestimonialList testimonials={testimonials} />
          </ul>
          <div className="bg-[url('/assets/general/quotes-icon.svg')] bg-no-repeat bg-[right_-6rem_bottom_-2rem] absolute top-0 left-0 right-0 bottom-0 z-0 opacity-10" />
        </div>
      </article>
    </Section>
  );
}
