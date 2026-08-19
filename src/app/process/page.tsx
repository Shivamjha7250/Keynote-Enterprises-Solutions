import Link from "next/link";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import {
  ArrowRight,
  ClipboardList,
  Search,
  Lightbulb,
  Settings2,
  TestTube2,
  Headphones,
  CheckCircle2,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    icon: ClipboardList,
    description:
      "We begin by understanding your business, current technology setup, challenges and the goals you want to achieve.",
    points: [
      "Business Requirement Discussion",
      "Current IT Assessment",
      "Problem Identification",
      "Initial Consultation",
    ],
  },
  {
    number: "02",
    title: "Requirement Analysis",
    icon: Search,
    description:
      "Our team analyzes your technical and operational requirements to determine the most suitable technology solution.",
    points: [
      "Technical Requirements",
      "Infrastructure Assessment",
      "User & Device Requirements",
      "Security Requirements",
    ],
  },
  {
    number: "03",
    title: "Planning",
    icon: Lightbulb,
    description:
      "We prepare a practical implementation plan covering technology, infrastructure, resources and project requirements.",
    points: [
      "Solution Planning",
      "Technology Selection",
      "Implementation Strategy",
      "Project Planning",
    ],
  },
  {
    number: "04",
    title: "Implementation",
    icon: Settings2,
    description:
      "The planned solution is professionally installed, configured and integrated with your existing business infrastructure.",
    points: [
      "Installation",
      "Configuration",
      "System Integration",
      "Deployment",
    ],
  },
  {
    number: "05",
    title: "Testing",
    icon: TestTube2,
    description:
      "We test the implemented solution to ensure that systems, connectivity, security and required functionality work correctly.",
    points: [
      "System Testing",
      "Performance Testing",
      "Security Checks",
      "Issue Resolution",
    ],
  },
  {
    number: "06",
    title: "Support & Maintenance",
    icon: Headphones,
    description:
      "After deployment, we provide technical assistance and maintenance to help keep your business technology reliable.",
    points: [
      "Technical Support",
      "Troubleshooting",
      "Preventive Maintenance",
      "Ongoing Assistance",
    ],
  },
];

const commitments = [
  "Clear communication throughout the project",
  "Requirement-focused technology planning",
  "Professional implementation and configuration",
  "Testing before final deployment",
  "Reliable technical support after implementation",
];

export default function ProcessPage() {
  return (
    <>
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
          Our Process
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
        A Clear Process for
        <br />
        <span className="text-[#F7941D]">
          Reliable IT Solutions
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
        From initial consultation to implementation and ongoing
        support, we follow a structured process to deliver
        practical and dependable technology solutions.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap gap-4">

        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-lg bg-[#F7941D] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#df8214]"
        >
          Start Your Project
          <ArrowRight size={17} />
        </Link>

        <a
          href="#process-steps"
          className="inline-flex items-center gap-2 rounded-lg border-2 border-white/80 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#0B3C5D]"
        >
          Explore Our Process
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
                How We Work
              </span>
            </div>

            <h2 className="text-3xl font-extrabold text-[#0B3C5D] sm:text-4xl">
              From Requirement to{" "}
              <span className="text-[#00AEEF]">
                Long-Term Support
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              Our structured workflow helps us understand your needs,
              select the right technology, implement it correctly and
              provide continued support after deployment.
            </p>
          </div>
        </section>

        {/* ==================================================
            PROCESS STEPS
        ================================================== */}

        <section
          id="process-steps"
          className="bg-slate-50 py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8 lg:px-10">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="mb-4 flex items-center justify-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

                <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
                  Step by Step
                </span>
              </div>

              <h2 className="text-3xl font-extrabold text-[#0B3C5D] sm:text-4xl lg:text-[42px]">
                Our{" "}
                <span className="text-[#00AEEF]">
                  6-Step Process
                </span>
              </h2>
            </div>

            <div className="relative">
              {/* Desktop connecting line */}
              <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-slate-200 lg:block" />

              <div className="space-y-6 lg:space-y-10">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isEven = index % 2 === 1;

                  return (
                    <div
                      key={step.number}
                      className={`relative grid gap-6 lg:grid-cols-2 lg:gap-16 ${
                        isEven ? "lg:text-left" : ""
                      }`}
                    >
                      {/* Content */}

                      <div
                        className={`${
                          isEven
                            ? "lg:col-start-2"
                            : "lg:col-start-1"
                        }`}
                      >
                        <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00AEEF]/30 hover:shadow-xl sm:p-7">
                          <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00AEEF]/10 transition-colors duration-300 group-hover:bg-[#0B3C5D]">
                              <Icon
                                size={24}
                                className="text-[#00AEEF] transition-colors duration-300 group-hover:text-white"
                              />
                            </div>

                            <div>
                              <span className="text-xs font-bold uppercase tracking-[1.5px] text-[#F7941D]">
                                Step {step.number}
                              </span>

                              <h3 className="mt-1 text-xl font-extrabold text-[#0B3C5D]">
                                {step.title}
                              </h3>
                            </div>
                          </div>

                          <p className="mt-5 text-sm leading-7 text-slate-600">
                            {step.description}
                          </p>

                          <div className="mt-5 grid gap-2 sm:grid-cols-2">
                            {step.points.map((point) => (
                              <div
                                key={point}
                                className="flex items-center gap-2"
                              >
                                <CheckCircle2
                                  size={16}
                                  className="shrink-0 text-[#00AEEF]"
                                />

                                <span className="text-xs font-medium text-slate-700">
                                  {point}
                                </span>
                              </div>
                            ))}
                          </div>
                        </article>
                      </div>

                      {/* Center Number */}

                      <div className="absolute left-1/2 top-7 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-50 bg-[#F7941D] text-xs font-extrabold text-white shadow-md lg:flex">
                        {step.number}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            COMMITMENT
        ================================================== */}

        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid w-full max-w-[1100px] gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

                <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
                  Our Commitment
                </span>
              </div>

              <h2 className="text-3xl font-extrabold leading-tight text-[#0B3C5D] sm:text-4xl">
                Professional Support at{" "}
                <span className="text-[#00AEEF]">
                  Every Stage
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Our responsibility does not end after implementation.
                We focus on reliable deployment, clear communication
                and continued technical assistance.
              </p>
            </div>

            <div className="rounded-2xl bg-[#0B3C5D] p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white">
                What You Can Expect
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

      <Footer />
    </>
  );
}