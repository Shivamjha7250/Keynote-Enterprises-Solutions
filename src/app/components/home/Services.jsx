import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Dialer Solutions",
    href: "/services/dialer",
    icon: "/service-icons/dialer.png",
    items: [
      "Predictive Dialer",
      "Auto Dialer",
      "Call Recording",
      "Campaign Management",
    ],
  },
  {
    title: "Cloud Dialer",
    href: "/services/cloud-dialer",
    icon: "/service-icons/cloud-dialer.png",
    items: [
      "Hosted Cloud Dialer",
      "Remote Calling Solutions",
      "CRM Integration",
      "Real-Time Reporting",
    ],
  },
  {
    title: "IVR Solutions",
    href: "/services/ivr",
    icon: "/service-icons/ivr.png",
    items: [
      "Multi-Level IVR",
      "Call Routing",
      "Auto Attendant",
      "Voice Broadcasting",
    ],
  },
  {
    title: "Biometric Attendance",
    href: "/services/biometric",
    icon: "/service-icons/biometric.png",
    items: [
      "Fingerprint & Face Recognition",
      "Attendance Software",
      "Access Control",
      "Payroll Integration",
    ],
  },
  {
    title: "CCTV Surveillance",
    href: "/services/cctv",
    icon: "/service-icons/cctv.png",
    items: [
      "HD CCTV Installation",
      "IP Camera",
      "Remote Monitoring",
      "AMC Support",
    ],
  },
  {
    title: "Computer Solutions",
    href: "/services/computers",
    icon: "/service-icons/computer.png",
    items: [
      "Desktop & Laptop Sales",
      "Annual Maintenance",
      "Computer Repair",
      "Hardware Upgrades",
    ],
  },
  {
    title: "Networking Solutions",
    href: "/services/networking",
    icon: "/service-icons/networking.png",
    items: [
      "LAN/WAN Setup",
      "Wi-Fi Installation",
      "Firewall Setup",
      "VPN Solutions",
    ],
  },
  {
    title: "Website Development",
    href: "/services/website-development",
    icon: "/service-icons/website-development.png",
    items: [
      "Business Websites",
      "E-Commerce Websites",
      "Corporate Websites",
      "Website Maintenance",
    ],
  },
  {
    title: "Software Development",
    href: "/services/software-development",
    icon: "/service-icons/software-development.png",
    items: [
      "Custom Software",
      "ERP Solutions",
      "CRM Solutions",
      "Business Automation",
    ],
  },
  {
    title: "Domain Registration",
    href: "/services/domain-registration",
    icon: "/service-icons/domain-registration.png",
    items: [
      ".com / .in / .org",
      "Premium Domains",
      "Domain Renewal",
      "Domain Transfer",
    ],
  },
  {
    title: "Business Email Solutions",
    href: "/services/business-email",
    icon: "/service-icons/business-email.png",
    items: [
      "Professional Email",
      "Microsoft 365",
      "Google Workspace",
      "Email Security",
    ],
  },
  {
    title: "SFTP Solutions",
    href: "/services/sftp",
    icon: "/service-icons/sftp.png",
    items: [
      "Secure File Transfer",
      "Server Configuration",
      "Data Backup",
      "User Management",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F5F9FE] py-16 sm:py-20 lg:py-24"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#00AEEF]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-20 top-40 h-72 w-72 rounded-full bg-[#F7941D]/5 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#00AEEF]/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1450px] px-5 sm:px-8 lg:px-10">

        {/* =========================
            HEADER
        ========================= */}

        <div className="mx-auto mb-10 max-w-5xl text-center sm:mb-12">

          {/* Label */}
          <div className="mb-4 flex items-center justify-center gap-3">

            <span className="h-px w-8 bg-[#0B3C5D]/60" />

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

              <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
                Our Services
              </span>
            </div>

            <span className="h-px w-8 bg-[#0B3C5D]/60" />

          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold leading-tight text-[#0B3C5D] sm:text-4xl lg:text-[48px]">

            Complete{" "}

            <span className="text-[#F7941D]">
              IT Solutions
            </span>{" "}

            for Your Business

          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">

            From communication systems and networking to software,
            security and cloud infrastructure, we provide{" "}

            <span className="font-semibold text-[#0877C9]">
              complete technology solutions
            </span>{" "}

            for modern businesses.

          </p>

        </div>

        {/* =========================
            SERVICES GRID
        ========================= */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

          {services.map((service) => (

            <Link
              key={service.title}
              href={service.href}
              className="
                group flex h-full flex-col
                rounded-2xl
                border border-slate-200
                bg-white
                px-4 py-5
                shadow-sm
                transition-all duration-300
                hover:-translate-y-2
                hover:border-[#00AEEF]/30
                hover:shadow-xl
              "
            >

              {/* =========================
                  ICON
              ========================= */}

              <div className="flex h-[105px] items-center justify-center">

                <img
                  src={service.icon}
                  alt={service.title}
                  className="
                    h-[100px]
                    w-[135px]
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />

              </div>

              {/* =========================
                  TITLE
              ========================= */}

              <h3
                className="
                  mt-2
                  min-h-[42px]
                  text-center
                  text-[15px]
                  font-bold
                  leading-5
                  text-[#0B3C5D]
                "
              >
                {service.title}
              </h3>

              {/* =========================
                  ITEMS
              ========================= */}

              <ul className="mt-4 flex-1 space-y-2">

                {service.items.map((item) => (

                  <li
                    key={item}
                    className="
                      flex
                      items-start
                      gap-2
                      text-[11px]
                      leading-5
                      text-slate-600
                    "
                  >

                    <span
                      className="
                        mt-[6px]
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        bg-[#F7941D]
                      "
                    />

                    <span>
                      {item}
                    </span>

                  </li>

                ))}

              </ul>

              {/* =========================
                  know More
              ========================= */}

              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-center
                  gap-1.5
                  text-xs
                  font-bold
                  text-[#0877C9]
                  transition-colors
                  duration-200
                  group-hover:text-[#F7941D]
                "
              >

                know More

                <ArrowRight
                  size={15}
                  className="
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                />

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}