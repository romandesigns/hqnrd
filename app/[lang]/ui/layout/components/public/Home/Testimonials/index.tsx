import React from "react";
import { Section } from "../../../../containers";
import { FcGoogle } from "@/app/[lang]/ui/icons";
import TestimonialList from "./Testimonial";
import { testimonials } from "@/public/assets/data/testimonials";

export default function Testimonials() {
  return (
    <Section className="w-full bg-primary-100/30 py-10 px-2 rounded-md sm:px-10">
      <article className="w-full h-full bg-primary-100/40 py-10 p-2 rounded-md sm:px-4">
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
      </article>
    </Section>
  );
}
