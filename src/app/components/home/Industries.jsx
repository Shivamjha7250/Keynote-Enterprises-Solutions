import {
  Headphones,
  Calculator,
  Building2,
  BriefcaseBusiness,
  UsersRound,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const industries = [
  {
    title: "Call Centers",
    icon: Headphones,
    image: "/industry-images/call-centers.png",
    items: [
      "Cloud Dialer",
      "Predictive Dialers",
      "CRM Integration",
      "Call Recording",
      "IVR Solutions",
    ],
  },
  {
    title: "CA Firms",
    icon: Calculator,
    image: "/industry-images/ca-firms.png",
    items: [
      "Secure Data Storage",
      "Email Solutions",
      "Networking",
      "Software Support",
      "Data Backup",
    ],
  },
  {
    title: "Architecture Firms",
    icon: Building2,
    image: "/industry-images/architecture-firms.png",
    items: [
      "High-Speed Networking",
      "Large File Sharing",
      "Cloud Backup",
      "Workstation Setup",
      "Secure Data Exchange",
    ],
  },
  {
    title: "Corporate Businesses",
    icon: BriefcaseBusiness,
    image: "/industry-images/corporate-businesses.png",
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
    image: "/industry-images/small-medium-businesses.png",
    items: [
      "Complete IT Solutions",
      "Cost-Effective Services",
      "Technical Support",
      "Network & Security",
      "Business Automation",
    ],
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-[#F7FAFE] py-16 sm:py-20 lg:py-24"
    >
      {/* =========================
          BACKGROUND DECORATION
      ========================= */}

      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#00AEEF]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#F7941D]/5 blur-3xl" />

      {/* Subtle decorative dots */}
      <div className="pointer-events-none absolute left-8 top-8 hidden opacity-30 sm:block">
        <div
          className="h-28 w-28"
          style={{
            backgroundImage:
              "radial-gradient(#00AEEF 2px, transparent 2px)",
            backgroundSize: "14px 14px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute right-8 top-16 hidden opacity-30 sm:block">
        <div
          className="h-28 w-28"
          style={{
            backgroundImage:
              "radial-gradient(#00AEEF 2px, transparent 2px)",
            backgroundSize: "14px 14px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1450px] px-5 sm:px-8 lg:px-10">

        {/* =========================
            SECTION HEADER
        ========================= */}

        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-14">

          {/* Label */}
          <div className="mb-4 flex items-center justify-center gap-2">

            <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

            <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
              Industries We Serve
            </span>

          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold leading-tight text-[#0B3C5D] sm:text-4xl lg:text-[48px]">

            Technology Solutions for{" "}

            <span className="text-[#F7941D]">
              Every Industry
            </span>

          </h2>

          {/* Orange underline */}
          <div className="mx-auto mt-5 h-[3px] w-24 rounded-full bg-[#F7941D]" />

          {/* Description */}
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">

            We deliver reliable IT infrastructure, communication,
            networking, security and software solutions tailored to
            the specific needs of different industries.

          </p>

        </div>

        {/* =========================
            INDUSTRY CARDS
        ========================= */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="
                  group relative flex h-full flex-col
                  overflow-hidden rounded-2xl
                  border border-slate-200
                  bg-white
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:border-[#00AEEF]/30
                  hover:shadow-2xl
                "
              >

                {/* =========================
                    IMAGE
                ========================= */}

                <div className="relative h-[175px] overflow-hidden">

                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/30 via-transparent to-transparent" />

                </div>

                {/* =========================
                    FLOATING ICON
                ========================= */}

                <div
                  className="
                    absolute left-1/2 top-[132px]
                    flex h-20 w-20
                    -translate-x-1/2
                    items-center justify-center
                    rounded-full
                    border-4 border-white
                    bg-white
                    shadow-lg
                  "
                >

                  <div className="flex flex-col items-center">

                    <Icon
                      size={29}
                      strokeWidth={2}
                      className="text-[#0B3C5D]"
                    />

                    <span className="mt-1 h-[2px] w-5 rounded-full bg-[#F7941D]" />

                  </div>

                </div>

                {/* =========================
                    CARD CONTENT
                ========================= */}

                <div className="flex flex-1 flex-col px-5 pb-5 pt-14">

                  {/* Title */}
                  <h3
                    className="
                      min-h-[48px]
                      text-center
                      text-[18px]
                      font-extrabold
                      leading-6
                      text-[#0B3C5D]
                    "
                  >
                    {industry.title}
                  </h3>

                  {/* Items */}
                  <ul className="mt-5 flex-1 space-y-3">

                    {industry.items.map((item) => (

                      <li
                        key={item}
                        className="
                          flex
                          items-start
                          gap-2.5
                          text-[12px]
                          leading-5
                          text-slate-600
                        "
                      >

                        <CheckCircle2
                          size={15}
                          strokeWidth={2}
                          className="
                            mt-0.5
                            shrink-0
                            text-[#F7941D]
                          "
                        />

                        <span>
                          {item}
                        </span>

                      </li>

                    ))}

                  </ul>

                  {/* know More */}
                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-bold
                      text-[#0B3C5D]
                      transition-colors
                      duration-200
                      group-hover:text-[#F7941D]
                    "
                  >

                    know More

                    <ArrowRight
                      size={17}
                      className="
                        transition-transform
                        duration-200
                        group-hover:translate-x-1
                      "
                    />

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}