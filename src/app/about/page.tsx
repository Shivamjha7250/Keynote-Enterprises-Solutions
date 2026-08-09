import Link from "next/link";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import {
  ArrowRight,
  CheckCircle2,
  Eye,
  Target,
  Users,
  ShieldCheck,
  Lightbulb,
  Headphones,
  Network,
  Cloud,
  Code2,
  Camera,
  UserRound,
} from "lucide-react";

const expertise = [
  {
    title: "Communication Solutions",
    description:
      "Dialer, Cloud Dialer and IVR solutions designed to improve business communication and calling operations.",
    icon: Headphones,
  },
  {
    title: "IT Infrastructure",
    description:
      "Reliable computer systems, networking infrastructure and complete IT support for business environments.",
    icon: Network,
  },
  {
    title: "Cloud Solutions",
    description:
      "Secure and scalable cloud-based technology solutions for modern and distributed businesses.",
    icon: Cloud,
  },
  {
    title: "Software & Websites",
    description:
      "Business websites and customized software solutions designed around specific business requirements.",
    icon: Code2,
  },
  {
    title: "Security & Surveillance",
    description:
      "CCTV surveillance and security solutions for improved monitoring and protection.",
    icon: Camera,
  },
  {
    title: "Professional IT Support",
    description:
      "Responsive technical assistance and ongoing support to keep business technology reliable.",
    icon: Headphones,
  },
];

const strengths = [
  "Reliable IT Infrastructure",
  "Professional Technical Support",
  "Secure Technology Solutions",
  "Customized Business Solutions",
  "Cost-Effective Technology",
  "Long-Term Client Support",
];

export default function AboutPage() {
  return (
    <>
      {/* ==================================================
          NAVBAR
      ================================================== */}

      <Navbar />

      <main>

        {/* ==================================================
            HERO
        ================================================== */}

        <section className="relative overflow-hidden bg-gradient-to-r from-[#072B52] via-[#0B3C5D] to-[#0E5A88] py-20 sm:py-24 lg:py-28">

          <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#00AEEF]/20 blur-3xl" />

          <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#F7941D]/10 blur-3xl" />

          <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">

            <div className="mx-auto max-w-4xl text-center">

              <div className="mb-5 flex items-center justify-center gap-2">

                <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

                <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
                  About Us
                </span>

              </div>

              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Technology That Helps
                <br />
                <span className="text-[#F7941D]">
                  Businesses Grow
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
                Keynote Enterprises Solutions is a trusted IT solutions
                provider delivering innovative, secure and cost-effective
                technology services for modern businesses.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">

                <a
                  href="#who-we-are"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#F7941D] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#df8214]"
                >
                  Discover Keynote
                  <ArrowRight size={17} />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-white/80 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#0B3C5D]"
                >
                  Contact Us
                </Link>

              </div>

            </div>

          </div>
        </section>

        {/* ==================================================
            WHO WE ARE
        ================================================== */}

        <section
          id="who-we-are"
          className="bg-white py-16 sm:py-20 lg:py-24"
        >

          <div className="mx-auto grid w-full max-w-[1100px] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">

            {/* LEFT */}

            <div>

              <div className="mb-4 flex items-center gap-2">

                <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

                <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
                  Who We Are
                </span>

              </div>

              <h2 className="text-3xl font-extrabold leading-tight text-[#0B3C5D] sm:text-4xl">
                Your Technology
                <br />
                <span className="text-[#00AEEF]">
                  Solutions Partner
                </span>
              </h2>

              <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base">
                Keynote Enterprises Solutions is a trusted IT solutions
                provider delivering innovative, secure and cost-effective
                technology services to businesses across various industries.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Under the leadership of{" "}
                <strong className="font-bold text-[#0B3C5D]">
                  Proprietor: Nilesh Khetri
                </strong>
                , we specialize in communication systems, networking,
                surveillance, software development, cloud services and
                complete IT infrastructure.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Our focus is to understand each business requirement and
                provide practical technology solutions that improve
                productivity, reliability and operational efficiency.
              </p>

            </div>

            {/* RIGHT */}

            <div className="relative">

              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0B3C5D] via-[#125579] to-[#00AEEF] p-8 shadow-xl sm:p-10">

                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10" />

                <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-[#F7941D]/10" />

                <div className="relative">

                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-xl">
                    <span className="text-4xl font-extrabold text-[#0B3C5D]">
                      KE
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-extrabold text-white">
                    Keynote Enterprises
                  </h3>

                  <p className="mt-2 text-sm text-slate-200">
                    Complete IT Solutions
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-3">

                    <div className="rounded-xl bg-white/10 p-4">
                      <p className="text-xs text-slate-300">
                        Focus
                      </p>

                      <p className="mt-1 text-sm font-bold text-white">
                        Business Technology
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/10 p-4">
                      <p className="text-xs text-slate-300">
                        Approach
                      </p>

                      <p className="mt-1 text-sm font-bold text-white">
                        Client Focused
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ==================================================
            OUR EXPERTISE
        ================================================== */}

        <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">

          <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8">

            <div className="mx-auto mb-12 max-w-3xl text-center">

              <div className="mb-4 flex items-center justify-center gap-2">

                <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

                <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
                  Our Expertise
                </span>

              </div>

              <h2 className="text-3xl font-extrabold text-[#0B3C5D] sm:text-4xl">
                Complete{" "}
                <span className="text-[#00AEEF]">
                  Technology Capabilities
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                From communication and networking to software,
                cloud and surveillance, we provide technology
                capabilities for different business requirements.
              </p>

            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {expertise.map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00AEEF]/30 hover:shadow-xl"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00AEEF]/10 transition-colors duration-300 group-hover:bg-[#0B3C5D]">

                      <Icon
                        size={23}
                        className="text-[#00AEEF] transition-colors duration-300 group-hover:text-white"
                      />

                    </div>

                    <h3 className="mt-5 text-base font-bold text-[#0B3C5D]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>

                  </div>
                );

              })}

            </div>

          </div>
        </section>

        {/* ==================================================
            MISSION & VISION
        ================================================== */}

        <section className="bg-white py-16 sm:py-20 lg:py-24">

          <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8">

            <div className="grid gap-6 lg:grid-cols-2">

              {/* MISSION */}

              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F7941D]/10">

                  <Target
                    size={27}
                    className="text-[#F7941D]"
                  />

                </div>

                <h2 className="mt-6 text-2xl font-extrabold text-[#0B3C5D]">
                  Our Mission
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Our mission is to deliver reliable, secure and
                  practical technology solutions that help businesses
                  improve productivity and operate more efficiently.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  We aim to understand our clients&apos; requirements,
                  recommend suitable technologies and provide
                  professional support throughout the solution lifecycle.
                </p>

              </div>

              {/* VISION */}

              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#00AEEF]/10">

                  <Eye
                    size={27}
                    className="text-[#00AEEF]"
                  />

                </div>

                <h2 className="mt-6 text-2xl font-extrabold text-[#0B3C5D]">
                  Our Vision
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Our vision is to become a dependable technology
                  partner for businesses by continuously improving
                  our services, adopting useful technologies and
                  delivering consistent customer value.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  We strive to build long-term relationships through
                  professional service, technical reliability and
                  business-focused solutions.
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* ==================================================
            WHY KEYNOTE
        ================================================== */}

        <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">

          <div className="mx-auto grid w-full max-w-[1100px] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">

            {/* LEFT */}

            <div>

              <div className="mb-4 flex items-center gap-2">

                <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

                <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
                  Why Keynote
                </span>

              </div>

              <h2 className="text-3xl font-extrabold leading-tight text-[#0B3C5D] sm:text-4xl">
                Technology Built Around
                <br />
                <span className="text-[#00AEEF]">
                  Your Business
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                We believe technology should solve business problems,
                not create additional complexity. Our approach focuses
                on understanding requirements and delivering practical,
                scalable and supportable solutions.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                {strengths.map((strength) => (
                  <div
                    key={strength}
                    className="flex items-center gap-2.5"
                  >

                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#00AEEF]"
                    />

                    <span className="text-sm font-semibold text-[#0B3C5D]">
                      {strength}
                    </span>

                  </div>
                ))}

              </div>

            </div>

            {/* RIGHT */}

            <div className="rounded-2xl bg-[#0B3C5D] p-7 shadow-xl sm:p-9">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F7941D]">

                <ShieldCheck
                  size={28}
                  className="text-white"
                />

              </div>

              <h3 className="mt-6 text-2xl font-extrabold text-white">
                Reliable Technology Partner
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Whether you need a communication system, networking
                infrastructure, surveillance solution, website,
                software or ongoing IT support, our goal is to provide
                dependable technology backed by professional service.
              </p>

              <div className="mt-7 border-t border-white/10 pt-6">

                <div className="flex items-start gap-3">

                  <Lightbulb
                    size={20}
                    className="mt-0.5 shrink-0 text-[#F7941D]"
                  />

                  <p className="text-sm leading-6 text-slate-300">
                    Practical solutions. Professional support.
                    Business-focused technology.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ==================================================
            PROPRIETOR
        ================================================== */}


        {/* ==================================================
            CTA
        ================================================== */}

        <section className="bg-[#0B3C5D] py-14 sm:py-16">

          <div className="mx-auto w-full max-w-[1000px] px-5 text-center sm:px-8">

            <Users
              size={38}
              className="mx-auto text-[#00AEEF]"
            />

            <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Improve Your IT Infrastructure?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Talk to Keynote Enterprises Solutions about your
              business technology requirements.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#F7941D] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#df8214]"
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </Link>

              <a
                href="tel:+919076039116"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/80 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#0B3C5D]"
              >
                <Headphones size={17} />
                +91 9076039116
              </a>

            </div>

          </div>
        </section>

      </main>

      {/* ==================================================
          FOOTER
      ================================================== */}

      <Footer />
    </>
  );
}