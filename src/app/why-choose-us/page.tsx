import Link from "next/link";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import {
  ArrowRight,
  BadgeCheck,
  Headphones,
  LockKeyhole,
  IndianRupee,
  Settings,
  ShieldCheck,
  Users,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  {
    title: "Professional IT Experts",
    icon: Users,
    description:
      "Our team provides practical technology solutions based on your business requirements, infrastructure and operational needs.",
    points: [
      "Experienced Technical Support",
      "Business-Focused Solutions",
      "Professional Implementation",
      "Technical Guidance",
    ],
  },
  {
    title: "Affordable Pricing",
    icon: IndianRupee,
    description:
      "We provide cost-effective technology solutions designed to deliver practical value without unnecessary infrastructure expenses.",
    points: [
      "Transparent Pricing",
      "Cost-Effective Solutions",
      "Flexible Requirements",
      "Value-Focused Services",
    ],
  },
  {
    title: "Fast Technical Support",
    icon: Headphones,
    description:
      "Technical issues can affect business productivity. Our support approach focuses on quick troubleshooting and reliable assistance.",
    points: [
      "Quick Troubleshooting",
      "Technical Assistance",
      "Remote Support",
      "Maintenance Support",
    ],
  },
  {
    title: "Secure Solutions",
    icon: ShieldCheck,
    description:
      "Security is considered across networking, surveillance, software, data and business communication solutions.",
    points: [
      "Secure Infrastructure",
      "Access Control",
      "Network Security",
      "Data Protection",
    ],
  },
  {
    title: "Customized IT Services",
    icon: Settings,
    description:
      "Every business has different requirements. We customize technology solutions according to your workflow and business objectives.",
    points: [
      "Requirement-Based Solutions",
      "Customized Configuration",
      "Scalable Infrastructure",
      "Business-Specific Technology",
    ],
  },
  {
    title: "Quality Products",
    icon: BadgeCheck,
    description:
      "We focus on providing dependable hardware, networking and technology products suitable for business environments.",
    points: [
      "Reliable Hardware",
      "Business-Grade Equipment",
      "Quality Components",
      "Professional Installation",
    ],
  },
  {
    title: "Trusted Service",
    icon: LockKeyhole,
    description:
      "We aim to build long-term business relationships through reliable service, clear communication and consistent technical support.",
    points: [
      "Professional Communication",
      "Reliable Service",
      "Long-Term Support",
      "Customer-Focused Approach",
    ],
  },
  {
    title: "End-to-End IT Infrastructure",
    icon: Wrench,
    description:
      "From computers and networking to software, communication and security, we can support multiple areas of your IT infrastructure.",
    points: [
      "IT Infrastructure",
      "Networking",
      "Communication Systems",
      "Security Solutions",
    ],
  },
];

const commitments = [
  "Understand your business requirements",
  "Recommend practical technology solutions",
  "Implement solutions professionally",
  "Test systems before deployment",
  "Provide ongoing technical support",
  "Help maintain reliable IT infrastructure",
];

export default function WhyChooseUsPage() {
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

            <div className="max-w-3xl">

              <div className="mb-5 flex items-center gap-2">

                <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

                <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
                  Why Choose Us
                </span>

              </div>

              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Technology You Can
                <br />
                <span className="text-[#F7941D]">
                  Rely On
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                Keynote Enterprises Solutions delivers reliable,
                secure and cost-effective IT and business technology
                solutions with professional technical support.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#F7941D] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#df8214]"
                >
                  Get Free Consultation
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="#reasons"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-white/80 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#0B3C5D]"
                >
                  Why Choose Us
                </Link>

              </div>

            </div>

          </div>
        </section>

        {/* ==================================================
            INTRO
        ================================================== */}

        <section className="bg-white py-16 sm:py-20">

          <div className="mx-auto w-full max-w-[1000px] px-5 text-center sm:px-8">

            <div className="mb-4 flex items-center justify-center gap-2">

              <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

              <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
                Our Commitment
              </span>

            </div>

            <h2 className="text-3xl font-extrabold text-[#0B3C5D] sm:text-4xl">
              A Technology Partner for Your{" "}
              <span className="text-[#00AEEF]">
                Business
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              We believe technology should make business operations
              simpler, more secure and more productive. Our approach
              focuses on understanding your requirements first and
              then providing the right solution for your organization.
            </p>

          </div>

        </section>

        {/* ==================================================
            REASONS
        ================================================== */}

        <section
          id="reasons"
          className="bg-slate-50 py-16 sm:py-20 lg:py-24"
        >

          <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">

            <div className="mx-auto mb-12 max-w-3xl text-center">

              <div className="mb-4 flex items-center justify-center gap-2">

                <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

                <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
                  Our Strengths
                </span>

              </div>

              <h2 className="text-3xl font-extrabold text-[#0B3C5D] sm:text-4xl lg:text-[42px]">
                Why Businesses{" "}
                <span className="text-[#00AEEF]">
                  Choose Us
                </span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                From technical expertise to ongoing support, we focus
                on delivering dependable technology solutions that
                support your business goals.
              </p>

            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <article
                    key={reason.title}
                    className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#00AEEF]/30 hover:shadow-xl"
                  >

                    <div className="flex items-start justify-between">

                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#00AEEF]/10 transition-colors duration-300 group-hover:bg-[#0B3C5D]">

                        <Icon
                          size={27}
                          className="text-[#00AEEF] transition-colors duration-300 group-hover:text-white"
                        />

                      </div>

                      <span className="text-3xl font-extrabold text-slate-100 transition-colors duration-300 group-hover:text-[#F7941D]/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>

                    <h3 className="mt-5 text-xl font-extrabold text-[#0B3C5D]">
                      {reason.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {reason.description}
                    </p>

                    <div className="mt-5 space-y-2.5">

                      {reason.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-2"
                        >

                          <CheckCircle2
                            size={17}
                            className="shrink-0 text-[#00AEEF]"
                          />

                          <span className="text-xs font-medium text-slate-700">
                            {point}
                          </span>

                        </div>
                      ))}

                    </div>

                  </article>
                );
              })}

            </div>

          </div>
        </section>

        {/* ==================================================
            OUR APPROACH
        ================================================== */}

        <section className="bg-white py-16 sm:py-20 lg:py-24">

          <div className="mx-auto grid w-full max-w-[1100px] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">

            {/* Left */}

            <div>

              <div className="mb-4 flex items-center gap-2">

                <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

                <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
                  Our Approach
                </span>

              </div>

              <h2 className="text-3xl font-extrabold leading-tight text-[#0B3C5D] sm:text-4xl">
                From Requirement to{" "}
                <span className="text-[#00AEEF]">
                  Reliable Solution
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                We don't believe in one-size-fits-all technology.
                Our team first understands your requirements and
                then plans, implements and supports the appropriate
                solution.
              </p>

              <div className="mt-7">

                <Link
                  href="/#process"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0B3C5D] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#082f49]"
                >
                  View Our Process
                  <ArrowRight size={17} />
                </Link>

              </div>

            </div>

            {/* Right */}

            <div className="rounded-2xl bg-[#0B3C5D] p-6 sm:p-8">

              <h3 className="text-xl font-bold text-white">
                Our Commitment to You
              </h3>

              <div className="mt-6 space-y-4">

                {commitments.map((commitment) => (
                  <div
                    key={commitment}
                    className="flex items-start gap-3"
                  >

                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F7941D]">

                      <CheckCircle2
                        size={15}
                        className="text-white"
                      />

                    </div>

                    <span className="text-sm leading-6 text-slate-200">
                      {commitment}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>

        {/* ==================================================
            CTA
        ================================================== */}

       

      </main>

      {/* ==================================================
          FOOTER
      ================================================== */}

      <Footer />
    </>
  );
}