"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    label: "Dialer Solutions",
    href: "/services/dialer",
  },
  {
    label: "Cloud Dialer",
    href: "/services/cloud-dialer",
  },
  {
    label: "IVR Solutions",
    href: "/services/ivr",
  },
  {
    label: "Biometric Attendance",
    href: "/services/biometric",
  },
  {
    label: "CCTV Surveillance",
    href: "/services/cctv",
  },
  {
    label: "Computer Solutions",
    href: "/services/computers",
  },
  {
    label: "Networking Solutions",
    href: "/services/networking",
  },
  {
    label: "Website Development",
    href: "/services/website-development",
  },
  {
    label: "Software Development",
    href: "/services/software-development",
  },
  {
    label: "Domain Registration",
    href: "/services/domain-registration",
  },
  {
    label: "Business Email",
    href: "/services/business-email",
  },
  {
    label: "SFTP Solutions",
    href: "/services/sftp",
  },
];

const navItems = [
  {
    label: "Home",
    href: "/#home",
  },
  {
    label: "About Us",
    href: "/#about",
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Why Choose Us",
    href: "/why-choose-us",
  },
  {
    label: "Process",
    href: "/process",
  },
  {
    label: "Testimonials",
    href: "/testimonials",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  const closeMenu = () => {
    setMobileMenu(false);
    setMobileServices(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md">

      {/* ==================================================
          NAVBAR CONTAINER
      ================================================== */}

      <div className="mx-auto flex h-[78px] w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">

        {/* ==================================================
            LOGO
        ================================================== */}

        <Link
          href="/#home"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
        >
          <div className="relative h-[58px] w-[58px] shrink-0 sm:h-[62px] sm:w-[62px]">
            <Image
              src="/logo.png"
              alt="Keynote Enterprises Solutions"
              fill
              priority
              sizes="62px"
              className="object-contain"
            />
          </div>

          <div className="ml-2 hidden leading-none sm:block">
            <div className="text-[21px] font-extrabold tracking-[1px] !text-[#0B3C5D] md:text-[23px]">
              KEYNOTE
            </div>

            <div className="mt-1 text-[8px] font-bold uppercase tracking-[2.5px] !text-[#F7941D] md:text-[9px]">
              ENTERPRISES SOLUTION
            </div>
          </div>
        </Link>

        {/* ==================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-5 xl:gap-7">

            {/* Home */}

            <li>
              <Link
                href="/#home"
                className="group relative flex items-center whitespace-nowrap py-3 text-[13px] font-semibold !text-[#0B3C5D] transition-colors duration-200 hover:!text-[#F7941D] xl:text-[14px]"
              >
                Home

                <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#F7941D] transition-all duration-200 group-hover:w-full" />
              </Link>
            </li>

            {/* About */}

            <li>
              <Link
                href="/about"
                className="group relative flex items-center whitespace-nowrap py-3 text-[13px] font-semibold !text-[#0B3C5D] transition-colors duration-200 hover:!text-[#F7941D] xl:text-[14px]"
              >
                About Us

                <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#F7941D] transition-all duration-200 group-hover:w-full" />
              </Link>
            </li>

            {/* ==================================================
                SERVICES DROPDOWN
            ================================================== */}

            <li className="group relative">

              <Link
                href="/#services"
                className="flex items-center gap-1 whitespace-nowrap py-3 text-[13px] font-semibold !text-[#0B3C5D] transition-colors duration-200 hover:!text-[#F7941D] xl:text-[14px]"
              >
                Services

                <ChevronDown
                  size={14}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </Link>

              {/* Dropdown */}

              <div className="invisible absolute left-1/2 top-full w-[280px] -translate-x-1/2 translate-y-2 rounded-xl border border-slate-100 bg-white p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

                <div className="mb-1 border-b border-slate-100 px-3 py-2.5">
                  <p className="text-xs font-bold uppercase tracking-[1.5px] text-[#F7941D]">
                    Our Services
                  </p>
                </div>

                <div className="max-h-[480px] overflow-y-auto">

                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="flex items-center rounded-lg px-3 py-2.5 text-[13px] font-medium !text-[#0B3C5D] transition-colors duration-150 hover:bg-slate-50 hover:!text-[#F7941D]"
                    >
                      <span className="mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00AEEF]" />

                      {service.label}
                    </Link>
                  ))}

                </div>
              </div>

            </li>

            {/* Other Navigation */}

            {navItems.slice(2).map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="group relative flex items-center whitespace-nowrap py-3 text-[13px] font-semibold !text-[#0B3C5D] transition-colors duration-200 hover:!text-[#F7941D] xl:text-[14px]"
                >
                  {item.label}

                  <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#F7941D] transition-all duration-200 group-hover:w-full" />
                </Link>
              </li>
            ))}

          </ul>
        </nav>

        {/* ==================================================
            DESKTOP CTA
            Desktop → Contact Page
        ================================================== */}

        <Link
          href="/contact"
          className="hidden shrink-0 rounded-lg bg-[#F7941D] px-5 py-2.5 text-[13px] font-bold !text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#df8214] lg:block xl:px-6"
        >
          Get Free Consultation
        </Link>

        {/* ==================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileMenu}
          onClick={() => setMobileMenu((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 !text-[#0B3C5D] transition hover:bg-slate-50 lg:hidden"
        >
          {mobileMenu ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>

      {/* ==================================================
          MOBILE MENU
      ================================================== */}

      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          mobileMenu
            ? "max-h-[900px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <nav className="mx-auto w-full max-w-[1440px] px-5 pb-5 pt-2 sm:px-8">

          {/* Home */}

          <Link
            href="/home"
            onClick={closeMenu}
            className="flex items-center border-b border-slate-100 py-4 text-[15px] font-semibold !text-[#0B3C5D]"
          >
            Home
          </Link>

          {/* About */}

          <Link
            href="/about"
            onClick={closeMenu}
            className="flex items-center border-b border-slate-100 py-4 text-[15px] font-semibold !text-[#0B3C5D]"
          >
            About Us
          </Link>

          {/* ==================================================
              MOBILE SERVICES
          ================================================== */}

          <div className="border-b border-slate-100">

            <button
              type="button"
              onClick={() =>
                setMobileServices((value) => !value)
              }
              className="flex w-full items-center justify-between py-4 text-[15px] font-semibold !text-[#0B3C5D]"
            >
              <span>Services</span>

              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  mobileServices ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileServices
                  ? "max-h-[600px] pb-3 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >

              <Link
                href="/#services"
                onClick={closeMenu}
                className="mb-1 flex items-center rounded-lg bg-slate-50 px-4 py-3 text-sm font-semibold !text-[#0B3C5D]"
              >
                View All Services
              </Link>

              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={closeMenu}
                  className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium !text-slate-600 transition hover:bg-slate-50 hover:!text-[#F7941D]"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#00AEEF]" />

                  {service.label}
                </Link>
              ))}

            </div>
          </div>

          {/* Other Navigation */}

          {navItems.slice(2).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="flex items-center border-b border-slate-100 py-4 text-[15px] font-semibold !text-[#0B3C5D]"
            >
              {item.label}
            </Link>
          ))}

          {/* ==================================================
              MOBILE CTA
              Mobile → Direct Call
          ================================================== */}

          <a
            href="tel:+919076039116"
            onClick={closeMenu}
            className="mt-5 flex w-full items-center justify-center rounded-lg bg-[#F7941D] px-5 py-3.5 text-sm font-bold !text-white transition-all duration-200 hover:bg-[#df8214]"
          >
            Get Free Consultation
          </a>

        </nav>
      </div>

    </header>
  );
}