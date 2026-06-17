import React from "react";
import Image from "next/image";

interface WhyMePhotoProps {
  photoSrc: string;
}

export function WhyMePhoto({ photoSrc }: WhyMePhotoProps) {
  return (
    <div className="reveal reveal-delay-1 lg:w-[400px] flex justify-center relative mt-8 lg:mt-0">
      {/* Decorative rotated background block */}
      <div className="absolute inset-0 bg-blue/5 rounded-3xl transform rotate-3 scale-95 pointer-events-none" />
      <div className="absolute inset-0 bg-bg-2 border border-border rounded-3xl transform -rotate-3 scale-95 pointer-events-none" />

      {/* Photo container */}
      <div className="relative w-full max-w-[300px] sm:max-w-[340px] aspect-[4/5] rounded-3xl overflow-hidden shadow-sm border border-border z-10 group">
        <Image
          src={photoSrc}
          alt="أحمد النحاس"
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="(max-w-768px) 100vw, 400px"
        />
        <div className="absolute inset-0 bg-blue/5 group-hover:bg-blue/0 transition-colors duration-300" />
      </div>
    </div>
  );
}
