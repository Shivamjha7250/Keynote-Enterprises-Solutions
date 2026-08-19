"use client";

import { useEffect, useState } from "react";

const desktopBanners = [
  "/banners/banner1.png",
  "/banners/banner2.png",
  "/banners/banner3.png",
];

const mobileBanners = [
  "/banners/banner1-mobile.png",
  "/banners/banner2-mobile.png",
  "/banners/banner3-mobile.png",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === desktopBanners.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white"
    >
      <div className="relative w-full">

        {/* ==============================
            DESKTOP IMAGE - 1920 x 700
        =============================== */}

        {/* Invisible image reserves correct desktop height */}
        <img
          src={desktopBanners[0]}
          alt=""
          aria-hidden="true"
          className="hidden h-auto w-full lg:block"
        />

        {/* ==============================
            MOBILE IMAGE - 1080 x 1350
        =============================== */}

        {/* Invisible image reserves correct mobile height */}
        <img
          src={mobileBanners[0]}
          alt=""
          aria-hidden="true"
          className="block h-auto w-full lg:hidden"
        />

        {/* ==============================
            SLIDES
        =============================== */}

        {desktopBanners.map((banner, index) => (
          <picture
            key={banner}
            className={`absolute inset-0 block transition-opacity duration-700 ${
              currentSlide === index
                ? "z-10 opacity-100"
                : "z-0 opacity-0"
            }`}
          >
            {/* Mobile */}
            <source
              media="(max-width: 1023px)"
              srcSet={mobileBanners[index]}
            />

            {/* Desktop */}
            <img
              src={banner}
              alt={`Keynote Enterprises Solutions Banner ${index + 1}`}
              className="block h-auto w-full"
              draggable={false}
            />
          </picture>
        ))}

        {/* ==============================
            DOTS
        =============================== */}

        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {desktopBanners.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to banner ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-8 bg-[#F7941D]"
                  : "w-2.5 bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}