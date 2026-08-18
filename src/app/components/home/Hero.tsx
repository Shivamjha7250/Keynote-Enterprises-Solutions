"use client";

import { useEffect, useState } from "react";

const banners = [
  "/banners/banner1.png",
  "/banners/banner2.png",
  "/banners/banner3.png",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev === banners.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === banners.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        return banners.length - 1;
      }

      return prev - 1;
    });
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white"
    >
      {/* Banner container */}
      <div className="relative w-full">

        {/* Image keeps its original ratio.
            This prevents cropping. */}
        <img
          src={banners[0]}
          alt=""
          aria-hidden="true"
          className="block h-auto w-full opacity-0"
        />

        {/* Actual banners */}
        {banners.map((banner, index) => (
          <img
            key={banner}
            src={banner}
            alt={`Keynote Enterprises Solutions Banner ${index + 1}`}
            className={`absolute left-0 top-0 h-auto w-full transition-opacity duration-700 ${
              currentSlide === index
                ? "z-10 opacity-100"
                : "z-0 opacity-0"
            }`}
            draggable={false}
          />
        ))}

        {/* Previous button */}
        

        {/* Next button */}
       

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to banner ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-8 bg-[#F7941D]"
                  : "w-2.5 bg-black/40"
              }`}
            />
          ))}
        </div>

        {/* Counter */}
       
      </div>
    </section>
  );
}