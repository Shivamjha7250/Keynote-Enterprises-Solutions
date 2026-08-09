import {
  BadgeCheck,
  Headphones,
  IndianRupee,
  Zap,
  ShieldCheck,
  Settings2,
  PackageCheck,
  Handshake,
  Network,
  ArrowRight,
  MessageCircle,
  SearchCheck,
  ClipboardList,
  Wrench,
  TestTube2,
  LifeBuoy,
} from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Professional IT Experts",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
  },
  {
    icon: Zap,
    title: "Fast Technical Support",
  },
  {
    icon: Settings2,
    title: "Customized IT Services",
  },
  {
    icon: PackageCheck,
    title: "Quality Products",
  },
  {
    icon: Handshake,
    title: "Trusted Service",
  },
  {
    icon: ShieldCheck,
    title: "Secure Solutions",
  },
  {
    icon: Network,
    title: "End-to-End IT Infrastructure",
  },
];

const process = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Consultation",
  },
  {
    number: "02",
    icon: SearchCheck,
    title: "Requirement Analysis",
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Planning",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Implementation",
  },
  {
    number: "05",
    icon: TestTube2,
    title: "Testing",
  },
  {
    number: "06",
    icon: LifeBuoy,
    title: "Support & Maintenance",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">

        <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-20">

          {/* =========================
              WHY CHOOSE US
          ========================= */}

          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

              <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-[#0B3C5D] sm:text-4xl">
              Your Success is
              <br />
              <span className="text-[#00AEEF]">
                Our Priority
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              We combine professional expertise, reliable technology
              and responsive support to deliver IT solutions that
              help businesses operate efficiently and securely.
            </p>

            {/* Reasons Grid */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">

              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div
                    key={reason.title}
                    className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#00AEEF]/30 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#00AEEF]/10">
                      <Icon
                        size={18}
                        className="text-[#00AEEF]"
                      />
                    </div>

                    <span className="text-xs font-semibold text-[#0B3C5D] sm:text-sm">
                      {reason.title}
                    </span>
                  </div>
                );
              })}

            </div>

            <div className="mt-8">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#0B3C5D] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#082f49]"
              >
                Discuss Your Requirements

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* =========================
              OUR PROCESS
          ========================= */}

          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

              <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
                Our Process
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-[#0B3C5D] sm:text-4xl">
              Simple Steps,
              <br />
              <span className="text-[#00AEEF]">
                Powerful Results
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              From the initial consultation to ongoing maintenance,
              our structured process ensures every project is planned,
              implemented and supported professionally.
            </p>

            {/* Process */}
            <div className="relative mt-10">

              {/* Connecting Line - Desktop */}
              <div className="absolute left-[39px] right-[39px] top-[39px] hidden h-px bg-slate-200 lg:block" />

              <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">

                {process.map((step) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.number}
                      className="group relative text-center"
                    >
                      {/* Icon */}
                      <div className="relative z-10 mx-auto flex h-[78px] w-[78px] items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all duration-300 group-hover:border-[#00AEEF] group-hover:shadow-lg">

                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00AEEF]/10">
                          <Icon
                            size={21}
                            className="text-[#0B3C5D]"
                          />
                        </div>

                      </div>

                      {/* Number */}
                      <div className="mt-3 text-[10px] font-bold tracking-widest text-[#F7941D]">
                        {step.number}
                      </div>

                      {/* Title */}
                      <h3 className="mt-1 text-xs font-bold leading-5 text-[#0B3C5D] sm:text-sm">
                        {step.title}
                      </h3>
                    </div>
                  );
                })}

              </div>
            </div>

            {/* Process Card */}
            <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#0B3C5D] to-[#0E5A88] p-6 shadow-xl sm:p-7">

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <h3 className="text-lg font-bold text-white sm:text-xl">
                    Need a Reliable IT Partner?
                  </h3>

                  <p className="mt-1 text-sm text-slate-200">
                    Let&apos;s discuss your business requirements.
                  </p>
                </div>

                <a
                  href="/contact"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#F7941D] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#df8214]"
                >
                  Contact Us
                  <ArrowRight size={17} />
                </a>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}