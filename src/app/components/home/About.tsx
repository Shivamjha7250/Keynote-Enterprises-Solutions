import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  UserRound,
  ShieldCheck,
  Headphones,
  Server,
  Settings2,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#00AEEF]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F7941D]/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ==================================================
              LEFT CONTENT
          ================================================== */}
          <div className="w-full">

            {/* Section Label */}
            <div className="mb-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

              <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[650px] text-3xl font-extrabold leading-[1.15] text-[#0B3C5D] sm:text-4xl lg:text-[44px]">
              Welcome to Keynote
              <br className="hidden sm:block" />
              Enterprises Solutions
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-slate-600 sm:text-base">
              Keynote Enterprises Solutions is a trusted IT solutions
              provider delivering innovative, secure, and cost-effective
              technology services to businesses across various industries.
            </p>

            <p className="mt-4 max-w-[650px] text-[15px] leading-7 text-slate-600 sm:text-base">
              Under the leadership of{" "}
              <strong className="font-bold text-[#0B3C5D]">
                Proprietor: Nilesh Khetri
              </strong>
              , we specialize in communication systems, networking,
              surveillance, software development, cloud services, and
              complete IT infrastructure.
            </p>

            <p className="mt-4 max-w-[650px] text-[15px] leading-7 text-slate-600 sm:text-base">
              Our goal is to help businesses improve productivity through
              reliable technology, secure infrastructure, and professional
              technical support.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#00AEEF]/10">
                  <Server
                    size={18}
                    className="text-[#00AEEF]"
                  />
                </div>

                <span className="text-sm font-semibold text-[#0B3C5D]">
                  Reliable IT Infrastructure
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#00AEEF]/10">
                  <Headphones
                    size={18}
                    className="text-[#00AEEF]"
                  />
                </div>

                <span className="text-sm font-semibold text-[#0B3C5D]">
                  Professional Support
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#00AEEF]/10">
                  <ShieldCheck
                    size={18}
                    className="text-[#00AEEF]"
                  />
                </div>

                <span className="text-sm font-semibold text-[#0B3C5D]">
                  Secure Technology
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#00AEEF]/10">
                  <Settings2
                    size={18}
                    className="text-[#00AEEF]"
                  />
                </div>

                <span className="text-sm font-semibold text-[#0B3C5D]">
                  Customized Solutions
                </span>
              </div>

            </div>

            {/* Button */}
            <div className="mt-9">
              <Link
                href="#services"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#0B3C5D] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#082f49] hover:shadow-xl"
              >
                Learn More About Us

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* ==================================================
              RIGHT COMPANY VISUAL
          ================================================== */}
          <div className="relative mx-auto w-full max-w-[580px]">

            {/* Main Visual */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-[#0B3C5D] shadow-2xl">

              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D] via-[#125579] to-[#00AEEF]" />

              {/* Decorative Circles */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
              <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full border border-white/10" />

              {/* Content */}
              <div className="relative flex aspect-[4/3] flex-col items-center justify-center px-6 text-center">

                {/* Logo Box */}
                <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-white shadow-2xl sm:h-32 sm:w-32">

                  <div className="text-center">
                    <div className="text-4xl font-extrabold tracking-tight text-[#0B3C5D] sm:text-5xl">
                      KE
                    </div>

                    <div className="mt-1 text-[7px] font-bold uppercase tracking-[2px] text-[#F7941D] sm:text-[8px]">
                      Keynote
                    </div>
                  </div>

                </div>

                {/* Company Name */}
                <h3 className="mt-6 text-xl font-bold text-white sm:text-2xl">
                  Keynote Enterprises
                </h3>

                <p className="mt-1 text-sm text-slate-200">
                  Complete IT & Business Technology Solutions
                </p>

                {/* Small Line */}
                <div className="mt-5 h-1 w-16 rounded-full bg-[#F7941D]" />
              </div>

              {/* Bottom Gradient */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#072B52]/50 to-transparent" />
            </div>

            {/* ==================================================
                PROPRIETOR CARD
            ================================================== */}
            <div className="absolute -bottom-6 right-4 flex items-center gap-3 rounded-2xl bg-[#0B3C5D] px-4 py-3 shadow-2xl sm:right-6 sm:px-5 sm:py-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7941D] sm:h-12 sm:w-12">
                <UserRound
                  size={23}
                  className="text-white"
                />
              </div>

              <div>
                <p className="text-[10px] font-medium uppercase tracking-[1.5px] text-slate-300">
                  Proprietor
                </p>

                <p className="mt-0.5 text-sm font-bold text-white sm:text-base">
                  Nilesh Khetri
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}