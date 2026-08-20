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
    desc: "Skilled & Certified Professionals",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    desc: "Best Value for Your Business",
  },
  {
    icon: Zap,
    title: "Fast Technical Support",
    desc: "Quick Response 24/7",
  },
  {
    icon: Settings2,
    title: "Customized IT Services",
    desc: "Solutions Tailored to You",
  },
  {
    icon: PackageCheck,
    title: "Quality Products",
    desc: "Reliable & Long Lasting",
  },
  {
    icon: Handshake,
    title: "Trusted Service",
    desc: "Transparency & Reliability",
  },
  {
    icon: ShieldCheck,
    title: "Secure Solutions",
    desc: "Your Security, Our Priority",
  },
  {
    icon: Network,
    title: "End-to-End IT Infrastructure",
    desc: "Complete IT under One Roof",
  },
];

const process = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Consultation",
    desc: "Understanding your business needs",
  },
  {
    number: "02",
    icon: SearchCheck,
    title: "Requirement Analysis",
    desc: "Analyzing requirements in detail",
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Planning",
    desc: "Creating the best plan & strategy",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Implementation",
    desc: "Executing the plan with precision",
  },
  {
    number: "05",
    icon: TestTube2,
    title: "Testing",
    desc: "Testing for quality & performance",
  },
  {
    number: "06",
    icon: LifeBuoy,
    title: "Support & Maintenance",
    desc: "Ongoing support for smooth operations",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-[#F8FAFD] py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#00AEEF]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#F7941D]/5 blur-3xl" />

      <div
        className="pointer-events-none absolute left-0 top-0 h-48 w-48 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(#00AEEF 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            TWO MAIN COLUMNS
        ====================================================== */}

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-16">

          {/* ==================================================
              LEFT — WHY CHOOSE US
          ================================================== */}

          <div className="relative">

            {/* Heading + Image */}
            <div className="grid items-start gap-8 sm:grid-cols-[1fr_210px]">

              {/* Text */}
              <div>

                <div className="mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

                  <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
                    Why Choose Us
                  </span>
                </div>

                <h2 className="text-3xl font-extrabold leading-[1.15] text-[#0B3C5D] sm:text-4xl lg:text-[42px]">
                  Your Success is
                  <br />
                  <span className="text-[#F7941D]">
                    Our Priority
                  </span>
                </h2>

                <div className="mt-5 h-1 w-14 rounded-full bg-[#F7941D]" />

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                  We combine professional expertise, reliable technology
                  and responsive support to deliver IT solutions that help
                  businesses operate efficiently and securely.
                </p>

              </div>

              {/* Main Image */}
              <div className="relative hidden sm:block">

                <div className="relative overflow-hidden rounded-[45%_0_45%_0] border-4 border-white bg-[#0B3C5D] shadow-xl">

                  <img
                    src="/images/why-choose-us.png"
                    alt="Professional IT technology solutions"
                    className="h-[235px] w-full object-cover"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062F55]/30 to-transparent" />

                </div>

              </div>

            </div>

            {/* ==================================================
                MOBILE IMAGE
            ================================================== */}

            <div className="mt-7 sm:hidden">

              <div className="overflow-hidden rounded-3xl border-4 border-white shadow-xl">

                <img
                  src="/images/why-choose-us.png"
                  alt="Professional IT technology solutions"
                  className="h-56 w-full object-cover"
                />

              </div>

            </div>

            {/* ==================================================
                REASONS GRID
            ================================================== */}

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">

              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                const orange = index % 2 === 1;

                return (
                  <div
                    key={reason.title}
                    className="group flex min-h-[78px] items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00AEEF]/30 hover:shadow-lg"
                  >

                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                        orange
                          ? "bg-[#F7941D]"
                          : "bg-[#1769C2]"
                      }`}
                    >
                      <Icon
                        size={21}
                        className="text-white"
                        strokeWidth={2}
                      />
                    </div>

                    <div className="min-w-0">

                      <h3 className="text-sm font-bold leading-5 text-[#0B3C5D]">
                        {reason.title}
                      </h3>

                      <p className="mt-0.5 text-[11px] leading-4 text-slate-500">
                        {reason.desc}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

            {/* ==================================================
                CTA
            ================================================== */}

            <div className="mt-8">

              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#0B3C5D] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#072B52] hover:shadow-lg"
              >
                Discuss Your Requirements

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

            </div>

          </div>

          {/* ==================================================
              RIGHT — OUR PROCESS
          ================================================== */}

          <div className="relative">

            {/* Heading + Image */}
            <div className="grid items-start gap-6 sm:grid-cols-[1fr_220px]">

              {/* Text */}
              <div>

                <div className="mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

                  <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
                    Our Process
                  </span>
                </div>

                <h2 className="text-3xl font-extrabold leading-[1.15] text-[#0B3C5D] sm:text-4xl lg:text-[42px]">
                  Simple Steps,
                  <br />
                  <span className="text-[#F7941D]">
                    Powerful Results
                  </span>
                </h2>

                <div className="mt-5 h-1 w-14 rounded-full bg-[#F7941D]" />

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                  From the initial consultation to ongoing maintenance,
                  our structured process ensures every project is planned,
                  implemented and supported professionally.
                </p>

              </div>

              {/* Process Image */}
              <div className="relative hidden sm:block">

                <img
                  src="/images/our-process.png"
                  alt="IT project planning and implementation"
                  className="h-[190px] w-full object-contain"
                />

              </div>

            </div>

            {/* Mobile Process Image */}
            <div className="mt-6 sm:hidden">

              <img
                src="/images/our-process.png"
                alt="IT project planning and implementation"
                className="mx-auto h-48 w-full object-contain"
              />

            </div>

            {/* ==================================================
                PROCESS TIMELINE
            ================================================== */}

            <div className="relative mt-10">

              {/* Desktop Connecting Line */}
              <div className="absolute left-[8%] right-[8%] top-8 hidden h-px bg-[#00AEEF]/50 lg:block" />

              <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">

                {process.map((step, index) => {
                  const Icon = step.icon;

                  const orange = index % 2 === 1;

                  return (
                    <div
                      key={step.number}
                      className="group relative text-center"
                    >

                      {/* Icon Circle */}
                      <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">

                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-full ${
                            orange
                              ? "bg-[#F7941D]"
                              : "bg-[#1769C2]"
                          }`}
                        >

                          <Icon
                            size={20}
                            className="text-white"
                            strokeWidth={2}
                          />

                        </div>

                      </div>

                      {/* Number */}
                      <div
                        className={`mt-3 text-[10px] font-bold tracking-widest ${
                          orange
                            ? "text-[#F7941D]"
                            : "text-[#1769C2]"
                        }`}
                      >
                        {step.number}
                      </div>

                      {/* Title */}
                      <h3 className="mt-1 min-h-[40px] text-xs font-bold leading-5 text-[#0B3C5D] sm:text-sm">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 hidden text-[11px] leading-5 text-slate-500 lg:block">
                        {step.desc}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>

            {/* ==================================================
                RELIABLE PARTNER CTA
            ================================================== */}

            <div className="mt-10 overflow-hidden rounded-2xl bg-gradient-to-r from-[#0B3C5D] to-[#0E5A88] p-5 shadow-xl sm:p-6">

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-4">

                  <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 sm:flex">

                    <Handshake
                      size={29}
                      className="text-[#F7941D]"
                    />

                  </div>

                  <div>

                    <h3 className="text-lg font-bold text-white sm:text-xl">
                      Need a Reliable IT Partner?
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-200 sm:text-sm">
                      We are here to help you build a smarter,
                      faster and more secure IT environment.
                    </p>

                  </div>

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