import React from "react";

export function Description() {
  return (
    <div className="w-full">
      <h3 className="font-bold text-xl mb-2">Description</h3>
      <div className="my-3 [&>p]:mb-4 [&>p]:text-sm [&>p]:leading-relaxed">
        <p>
          The Basic Room is a cozy space for relaxation and tranquility. The
          room is equipped with a comfortable bed, a private bathroom, and a
          balcony.The room is equipped with a comfortable bed, a private
          bathroom, and a balcony.
        </p>
        <p>
          The room is ideal for couples or solo travelers looking for a peaceful
          escape.
        </p>
      </div>
    </div>
  );
}
