import React from "react";
import { FcGoogle } from "@/app/[lang]/ui/icons";

export function Heading() {
  return (
    <div className="my-10">
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
  );
}
