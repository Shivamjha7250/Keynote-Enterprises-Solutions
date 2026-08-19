import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import {
  ArrowRight,
  Building2,
  Calculator,
  CheckCircle2,
  Headphones,
  Ruler,
  BriefcaseBusiness,
  Cloud,
  Database,
  Mail,
  Network,
  ShieldCheck,
  Monitor,
  Code2,
  Globe,
  Link,
} from "lucide-react";

const industries = [
  {
    title: "Call Centers",
    icon: Headphones,
    description:
      "Complete communication, networking and software solutions designed for call centers and customer support operations.",
    solutions: [
      "Cloud Dialers",
      "Predictive Dialers",
      "Auto Dialers",
      "CRM Integration",
      "Call Recording",
      "IVR Solutions",
      "Real-Time Reporting",
      "Network Infrastructure",
    ],
  },
  {
    title: "CA Firms",
    icon: Calculator,
    description:
      "Secure and reliable IT solutions for accounting firms that manage sensitive financial information and client data.",
    solutions: [
      "Secure Data Storage",
      "Professional Email",
      "Networking",
      "Computer Solutions",
      "Data Backup",
      "Business Software",
      "CCTV Surveillance",
      "Technical Support",
    ],
  },
  {
    title: "Architecture Firms",
    icon: Ruler,
    description:
      "High-performance technology infrastructure for architecture teams working with large design files, workstations and collaborative projects.",
    solutions: [
      "High-Speed Networking",
      "Large File Sharing",
      "Cloud Backup",
      "Workstation Setup",
      "Computer Upgrades",
      "Secure Data Storage",
      "Professional Email",
      "Technical Support",
    ],
  },
  {
    title: "Corporate Businesses",
    icon: Building2,
    description:
      "End-to-end IT infrastructure and business technology solutions that support modern corporate operations.",
    solutions: [
      "Website Development",
      "Software Development",
      "Networking",
      "Cloud Infrastructure",
      "Business Email",
      "CCTV Surveillance",
      "Security Solutions",
      "IT Support",
    ],
  },
  {
    title: "Small & Medium Businesses",
    icon: BriefcaseBusiness,
    description:
      "Affordable, scalable and practical technology solutions designed to help growing businesses build a strong IT foundation.",
    solutions: [
      "Complete IT Infrastructure",
      "Computer Solutions",
      "Networking",
      "Website Development",
      "Software Solutions",
      "Business Email",
      "CCTV",
      "Technical Support",
    ],
  },
];

const benefits = [
  {
    icon: Monitor,
    title: "Industry-Focused Solutions",
    description:
      "Technology recommendations based on the actual requirements and workflow of your industry.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Infrastructure",
    description:
      "Security-focused IT infrastructure designed to protect business systems and important information.",
  },
  {
    icon: Network,
    title: "Reliable Connectivity",
    description:
      "Professional networking and communication solutions for reliable day-to-day business operations.",
  },
  {
    icon: Code2,
    title: "Business Automation",
    description:
      "Software and automation solutions that reduce manual work and improve operational efficiency.",
  },
];

export default function IndustriesPage() {
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

      <section
  className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-10 sm:py-12 lg:py-14"
  style={{ backgroundImage: "url('/breadcrumb-bg.png')" }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-[#072B52]/65" />

  <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
    <div className="max-w-3xl">

      {/* Label */}
      <div className="mb-5 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

        <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
          Industries We Serve
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
        Technology Solutions
        <br />
        <span className="text-[#F7941D]">
          Built for Your Industry
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
        Keynote Enterprises Solutions provides reliable IT
        infrastructure, communication, networking, security
        and software solutions tailored to the specific needs
        of different industries.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap gap-4">

        <a
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-lg bg-[#F7941D] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#df8214]"
        >
          Get Free Consultation
          <ArrowRight size={17} />
        </a>

        <a
          href="#industry-solutions"
          className="inline-flex items-center gap-2 rounded-lg border-2 border-white/80 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#0B3C5D]"
        >
          Explore Industries
        </a>

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
                Our Expertise
              </span>

            </div>

            <h2 className="text-3xl font-extrabold text-[#0B3C5D] sm:text-4xl">
              IT Solutions Designed Around Your Business
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              Different industries have different technology
              requirements. Our team provides customized solutions
              based on your business processes, infrastructure,
              security requirements and future growth plans.
            </p>

          </div>

        </section>

        {/* ==================================================
            INDUSTRY SOLUTIONS
        ================================================== */}

        <section
          id="industry-solutions"
          className="bg-slate-50 py-16 sm:py-20 lg:py-24"
        >

          <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">

            <div className="mx-auto mb-12 max-w-3xl text-center">

              <div className="mb-4 flex items-center justify-center gap-2">

                <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

                <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
                  Industry Solutions
                </span>

              </div>

              <h2 className="text-3xl font-extrabold text-[#0B3C5D] sm:text-4xl lg:text-[42px]">
                Solutions for{" "}
                <span className="text-[#00AEEF]">
                  Every Business
                </span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Explore the technology solutions we provide for
                different business environments.
              </p>

            </div>

            <div className="space-y-6">

              {industries.map((industry, index) => {
                const Icon = industry.icon;

                return (
                  <article
                    key={industry.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00AEEF]/30 hover:shadow-xl sm:p-8"
                  >

                    <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-center">

                      {/* Left */}

                      <div>

                        <div className="flex items-start justify-between">

                          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#00AEEF]/10 transition-colors duration-300 group-hover:bg-[#0B3C5D]">

                            <Icon
                              size={28}
                              className="text-[#00AEEF] transition-colors duration-300 group-hover:text-white"
                            />

                          </div>

                          <span className="text-4xl font-extrabold text-slate-100 group-hover:text-[#F7941D]/20">
                            0{index + 1}
                          </span>

                        </div>

                        <h3 className="mt-5 text-2xl font-extrabold text-[#0B3C5D]">
                          {industry.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {industry.description}
                        </p>

                      </div>

                      {/* Right */}

                      <div>

                        <h4 className="text-sm font-bold uppercase tracking-[1.5px] text-[#0B3C5D]">
                          Our Solutions
                        </h4>

                        <div className="mt-4 grid gap-3 sm:grid-cols-2">

                          {industry.solutions.map((solution) => (
                            <div
                              key={solution}
                              className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-4 py-3"
                            >
                              <CheckCircle2
                                size={17}
                                className="shrink-0 text-[#00AEEF]"
                              />

                              <span className="text-sm font-medium text-slate-700">
                                {solution}
                              </span>
                            </div>
                          ))}

                        </div>

                      </div>

                    </div>

                  </article>
                );
              })}

            </div>

          </div>
        </section>

        {/* ==================================================
            WHY INDUSTRY-SPECIFIC
        ================================================== */}

        <section className="bg-white py-16 sm:py-20 lg:py-24">

          <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">

            <div className="mx-auto mb-12 max-w-3xl text-center">

              <div className="mb-4 flex items-center justify-center gap-2">

                <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

                <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
                  Why Choose Our Solutions
                </span>

              </div>

              <h2 className="text-3xl font-extrabold text-[#0B3C5D] sm:text-4xl">
                Technology That Supports{" "}
                <span className="text-[#00AEEF]">
                  Business Growth
                </span>
              </h2>

            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B3C5D]">

                      <Icon
                        size={23}
                        className="text-white"
                      />

                    </div>

                    <h3 className="mt-5 text-base font-bold text-[#0B3C5D]">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {benefit.description}
                    </p>

                  </div>
                );
              })}

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