import {
  Headphones,
  Calculator,
  Building2,
  BriefcaseBusiness,
  UsersRound,
  ArrowRight,
  Cloud,
  Network,
  ShieldCheck,
  HardDrive,
  Monitor,
  Database,
} from "lucide-react";

const industries = [
  {
    title: "Call Centers",
    icon: Headphones,
    items: [
      "Cloud Dialers",
      "Predictive Dialers",
      "CRM Integration",
      "Call Recording",
    ],
  },
  {
    title: "CA Firms",
    icon: Calculator,
    items: [
      "Secure Data Storage",
      "Email Solutions",
      "Networking",
      "Software Support",
    ],
  },
  {
    title: "Architecture Firms",
    icon: Building2,
    items: [
      "High-Speed Networking",
      "Large File Sharing",
      "Cloud Backup",
      "Workstation Setup",
    ],
  },
  {
    title: "Corporate Businesses",
    icon: BriefcaseBusiness,
    items: [
      "Website Development",
      "Networking",
      "Cloud Infrastructure",
      "IT Support",
      "Security Solutions",
    ],
  },
  {
    title: "Small & Medium Businesses",
    icon: UsersRound,
    items: [
      "Complete IT Solutions",
      "Cost-Effective Services",
      "Technical Support",
      "Business Automation",
    ],
  },
];

const icons = [
  [Cloud, Network, Database, Headphones],
  [Database, HardDrive, Network, Monitor],
  [Network, HardDrive, Cloud, Monitor],
  [Monitor, Network, Cloud, ShieldCheck],
  [BriefcaseBusiness, ShieldCheck, Headphones, Monitor],
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-[#062F55] py-20 sm:py-24 lg:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-150px] top-20 h-96 w-96 rounded-full bg-[#00AEEF]/10 blur-[100px]" />

      <div className="pointer-events-none absolute right-[-150px] bottom-0 h-96 w-96 rounded-full bg-[#00AEEF]/10 blur-[100px]" />

      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">

          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

            <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
              Industries We Serve
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[42px]">
            Technology Solutions
            <br className="hidden sm:block" />
            <span className="text-[#00AEEF]">
              for Every Industry
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            We provide reliable IT infrastructure, communication,
            networking, security and software solutions tailored to
            the specific needs of different industries.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#00AEEF]/40 hover:bg-white/[0.14] hover:shadow-2xl"
              >
                {/* Card Top */}
                <div className="relative h-36 overflow-hidden bg-gradient-to-br from-[#0B3C5D] to-[#0E638F]">

                  {/* Decorative Circle */}
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-white/10" />

                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-lg">
                    <Icon
                      size={25}
                      className="text-[#0B3C5D]"
                    />
                  </div>

                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="text-base font-bold text-white">
                      {industry.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">

                  <ul className="space-y-3">
                    {industry.items.map((item, itemIndex) => {
                      const ItemIcon =
                        icons[index][itemIndex] || ShieldCheck;

                      return (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 text-xs text-slate-300"
                        >
                          <ItemIcon
                            size={14}
                            className="shrink-0 text-[#00AEEF]"
                          />

                          <span>{item}</span>
                        </li>
                      );
                    })}
                  </ul>

                </div>

                {/* Bottom Accent */}
                <div className="h-1 w-0 bg-[#F7941D] transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}

        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">

          <a
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-[#F7941D] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#df8214]"
          >
            Talk to Our IT Experts

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

        </div>

      </div>
    </section>
  );
}