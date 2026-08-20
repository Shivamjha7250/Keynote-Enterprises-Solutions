import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Headphones,
  Users,
  Network,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F7FAFD] py-16 sm:py-20 lg:py-24"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 -top-20 h-72 w-72 rounded-full bg-[#00AEEF]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#F7941D]/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div>

            {/* Label */}
            <div className="mb-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

              <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-extrabold leading-[1.12] text-[#0B3C5D] sm:text-4xl lg:text-[46px]">
              About Keynote
              <br />
              <span className="text-[#F2760A]">
                Enterprises Solutions
              </span>
            </h2>

            {/* Small Highlight */}
            <h3 className="mt-6 text-base font-bold text-[#0B3C5D] sm:text-lg">
              Empowering Businesses with{" "}
              <span className="text-[#F2760A]">
                Reliable IT Solutions
              </span>
            </h3>

            {/* Description */}
            <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-slate-600 sm:text-base">
              Keynote Enterprises Solutions is a trusted IT solutions
              provider delivering innovative, secure, and cost-effective
              technology services to businesses across various industries.
            </p>

            <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-slate-600 sm:text-base">
              Under the leadership of{" "}
              <strong className="font-bold text-[#0B3C5D]">
                Proprietor Nilesh Khetri
              </strong>
              , we specialize in communication systems, networking,
              surveillance, software development, cloud services, and
              complete IT infrastructure.
            </p>

            <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-slate-600 sm:text-base">
              Our goal is to help businesses improve productivity,
              enhance security, and achieve long-term growth through
              reliable technology and professional support.
            </p>

            {/* Highlights */}
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B3C5D]">
                  <Network
                    size={20}
                    className="text-white"
                  />
                </div>

                <span className="text-sm font-bold text-[#0B3C5D]">
                  Reliable IT Infrastructure
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F7941D]">
                  <ShieldCheck
                    size={20}
                    className="text-white"
                  />
                </div>

                <span className="text-sm font-bold text-[#0B3C5D]">
                  Secure Technology
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B3C5D]">
                  <Users
                    size={20}
                    className="text-white"
                  />
                </div>

                <span className="text-sm font-bold text-[#0B3C5D]">
                  Experienced Team
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F7941D]">
                  <Headphones
                    size={20}
                    className="text-white"
                  />
                </div>

                <span className="text-sm font-bold text-[#0B3C5D]">
                  Professional Support
                </span>
              </div>

            </div>

            {/* Button */}
            <div className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#0B3C5D] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#082f49]"
              >
                Learn More About Us

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* =====================================================
              RIGHT VISUAL
          ===================================================== */}
          <div className="relative">

            {/* Main Office Image */}
            <div className="relative overflow-hidden rounded-[28px] border border-white bg-white shadow-2xl">

              <img
                src="/about-main.png"
                alt="Keynote Enterprises Solutions"
                className="h-auto w-full object-cover"
              />

              {/* Image Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#072B52]/70 to-transparent" />

              {/* Company Name */}
              <div className="absolute bottom-5 left-6 right-6">
                <h3 className="text-xl font-extrabold text-white sm:text-2xl">
                  Keynote Enterprises
                </h3>

                <p className="mt-1 text-sm font-medium text-slate-200">
                  Complete IT & Business Technology Solutions
                </p>
              </div>
            </div>

            {/* =================================================
                THREE SMALL CARDS
            ================================================= */}
            <div className="relative z-10 -mt-12 grid grid-cols-3 gap-3 px-3 sm:-mt-16 sm:gap-4 sm:px-5">

              {/* Card 1 */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">

                <img
                  src="/about-security.png"
                  alt="Secure IT Infrastructure"
                  className="h-24 w-full object-cover sm:h-36"
                />

                <div className="px-3 py-3 text-center sm:px-4 sm:py-4">
                  <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-[#0B3C5D]">
                    <ShieldCheck
                      size={18}
                      className="text-white"
                    />
                  </div>

                  <h4 className="mt-2 text-xs font-bold text-[#0B3C5D] sm:text-sm">
                    Secure & Reliable
                  </h4>

                  <p className="mt-1 hidden text-xs leading-5 text-slate-500 sm:block">
                    Secure and high-performance IT infrastructure.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">

                <img
                  src="/about-team.png"
                  alt="Keynote Expert Team"
                  className="h-24 w-full object-cover sm:h-36"
                />

                <div className="px-3 py-3 text-center sm:px-4 sm:py-4">
                  <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-[#F7941D]">
                    <Users
                      size={18}
                      className="text-white"
                    />
                  </div>

                  <h4 className="mt-2 text-xs font-bold text-[#0B3C5D] sm:text-sm">
                    Expert Team
                  </h4>

                  <p className="mt-1 hidden text-xs leading-5 text-slate-500 sm:block">
                    Experienced professionals dedicated to your business.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">

                <img
                  src="/about-network.png"
                  alt="End-to-End IT Solutions"
                  className="h-24 w-full object-cover sm:h-36"
                />

                <div className="px-3 py-3 text-center sm:px-4 sm:py-4">
                  <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-[#0B3C5D]">
                    <Network
                      size={18}
                      className="text-white"
                    />
                  </div>

                  <h4 className="mt-2 text-xs font-bold text-[#0B3C5D] sm:text-sm">
                    End-to-End Solutions
                  </h4>

                  <p className="mt-1 hidden text-xs leading-5 text-slate-500 sm:block">
                    From planning to implementation and support.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}