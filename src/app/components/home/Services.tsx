import Link from "next/link";
import {
  Headphones,
  Cloud,
  PhoneCall,
  Fingerprint,
  Camera,
  Monitor,
  Network,
  Globe,
  Code2,
  Globe2,
  Mail,
  Server,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Dialer Solutions",
    href: "/services/dialer",
    icon: Headphones,
    items: [
      "Predictive Dialer",
      "Auto Dialer",
      "Manual Dialer",
      "Call Recording",
      "Campaign Management",
    ],
  },
  {
    title: "Cloud Dialer",
    href: "/services/cloud-dialer",
    icon: Cloud,
    items: [
      "Hosted Cloud Dialer",
      "Remote Calling Solutions",
      "CRM Integration",
      "Real-Time Reporting",
      "Secure Cloud Infrastructure",
    ],
  },
  {
    title: "IVR Solutions",
    href: "/services/ivr",
    icon: PhoneCall,
    items: [
      "Interactive Voice Response",
      "Multi-Level IVR",
      "Call Routing",
      "Auto Attendant",
      "Voice Broadcasting",
    ],
  },
  {
    title: "Biometric Attendance",
    href: "/services/biometric",
    icon: Fingerprint,
    items: [
      "Fingerprint Devices",
      "Face Recognition",
      "Attendance Software",
      "Access Control",
      "Payroll Integration",
    ],
  },
  {
    title: "CCTV Surveillance",
    href: "/services/cctv",
    icon: Camera,
    items: [
      "HD CCTV Installation",
      "IP Camera",
      "Remote Monitoring",
      "DVR/NVR Setup",
      "AMC Support",
    ],
  },
  {
    title: "Computer Solutions",
    href: "/services/computers",
    icon: Monitor,
    items: [
      "Desktop Sales",
      "Laptop Sales",
      "Annual Maintenance",
      "Computer Repair",
      "Hardware Upgrades",
    ],
  },
  {
    title: "Networking Solutions",
    href: "/services/networking",
    icon: Network,
    items: [
      "LAN/WAN Setup",
      "Wi-Fi Installation",
      "Router & Switch Configuration",
      "Firewall Setup",
      "VPN Solutions",
    ],
  },
  {
    title: "Website Development",
    href: "/services/website-development",
    icon: Globe,
    items: [
      "Business Websites",
      "Corporate Websites",
      "Portfolio Websites",
      "E-Commerce Websites",
      "Website Maintenance",
    ],
  },
  {
    title: "Software Development",
    href: "/services/software-development",
    icon: Code2,
    items: [
      "Custom Software",
      "ERP Solutions",
      "CRM Solutions",
      "Billing Software",
      "Business Automation",
    ],
  },
  {
    title: "Domain Registration",
    href: "/services/domain-registration",
    icon: Globe2,
    items: [
      ".com",
      ".in",
      ".org",
      "Premium Domains",
      "Domain Renewal",
    ],
  },
  {
    title: "Business Email Solutions",
    href: "/services/business-email",
    icon: Mail,
    items: [
      "Professional Email",
      "Microsoft 365",
      "Google Workspace",
      "Email Migration",
      "Email Security",
    ],
  },
  {
    title: "SFTP Solutions",
    href: "/services/sftp",
    icon: Server,
    items: [
      "Secure File Transfer",
      "Server Configuration",
      "Data Backup",
      "User Management",
      "Secure Data Exchange",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      {/* =========================
          BACKGROUND DECORATION
      ========================= */}

      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#00AEEF]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#F7941D]/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">

        {/* =========================
            SECTION HEADER
        ========================= */}

        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">

          <div className="mb-4 flex items-center justify-center gap-2">

            <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

            <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
              Our Services
            </span>

          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-[#0B3C5D] sm:text-4xl lg:text-[42px]">
            Complete{" "}
            <span className="text-[#00AEEF]">
              IT Solutions
            </span>{" "}
            for Your Business
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            From communication systems and networking to software,
            security and cloud infrastructure, we provide complete
            technology solutions for modern businesses.
          </p>

        </div>

        {/* =========================
            SERVICES GRID
        ========================= */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group block h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#00AEEF]/30 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/40"
              >
                {/* =========================
                    ICON + TITLE
                ========================= */}

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00AEEF]/10 transition-colors duration-300 group-hover:bg-[#0B3C5D]">

                    <Icon
                      size={24}
                      className="text-[#00AEEF] transition-colors duration-300 group-hover:text-white"
                    />

                  </div>

                  <h3 className="pt-1 text-base font-bold leading-6 text-[#0B3C5D]">
                    {service.title}
                  </h3>

                </div>

                {/* =========================
                    SERVICE ITEMS
                ========================= */}

                <ul className="mt-5 space-y-2.5">

                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs leading-5 text-slate-600"
                    >

                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#F7941D]" />

                      <span>{item}</span>

                    </li>
                  ))}

                </ul>

                {/* =========================
                    VIEW DETAILS
                ========================= */}

                <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-[#0B3C5D] transition-colors duration-200 group-hover:text-[#F7941D]">

                  View Details

                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />

                </div>

              </Link>
            );
          })}

        </div>

        {/* =========================
            DISCUSS REQUIREMENTS
        ========================= */}

        <div className="mt-10 flex justify-center">

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-[#F7941D] px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#df8214] hover:shadow-lg"
          >
            Discuss Your Requirements

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </Link>

        </div>

      </div>
    </section>
  );
}