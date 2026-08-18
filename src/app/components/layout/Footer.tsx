import Link from "next/link";
import Image from "next/image";
import {
  ArrowUp,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const services = [
  {
    label: "Dialer",
    href: "/services/dialer",
  },
  {
    label: "Cloud Dialer",
    href: "/services/cloud-dialer",
  },
  {
    label: "IVR",
    href: "/services/ivr",
  },
  {
    label: "Biometric",
    href: "/services/biometric",
  },
  {
    label: "CCTV",
    href: "/services/cctv",
  },
  {
    label: "Computers",
    href: "/services/computers",
  },
  {
    label: "Networking",
    href: "/services/networking",
  },
  {
    label: "Website",
    href: "/services/website-development",
  },
  {
    label: "Software",
    href: "/services/software-development",
  },
  {
    label: "Domain",
    href: "/services/domain-registration",
  },
  {
    label: "Email",
    href: "/services/business-email",
  },
  {
    label: "SFTP",
    href: "/services/sftp",
  },
];

const industries = [
  {
    label: "Call Centers",
    href: "/industries",
  },
  {
    label: "CA Firms",
    href: "/industries",
  },
  {
    label: "Architecture Firms",
    href: "/industries",
  },
  {
    label: "Corporate Offices",
    href: "/industries",
  },
  {
    label: "Small & Medium Businesses",
    href: "/industries",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#072B52] text-white">

      {/* ==================================================
          FOOTER CONTENT
      ================================================== */}

      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">

        <div className="grid gap-8 py-10 sm:py-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-10">

          {/* ==================================================
              COMPANY
          ================================================== */}

          <div>

            <Link
              href="/#home"
              className="inline-block"
            >
              <div className="relative h-16 w-[230px] sm:h-[72px] sm:w-[260px]">

                <Image
                  src="/logo.png"
                  alt="Keynote Enterprises Solutions"
                  fill
                  priority
                  sizes="260px"
                  className="object-contain object-left"
                />

              </div>
            </Link>

            <p className="mt-4 max-w-sm text-xs leading-6 text-slate-300 sm:text-sm">
              Complete IT infrastructure and business technology
              solutions for modern businesses.
            </p>

            <p className="mt-3 border-l-2 border-[#F7941D] pl-3 text-xs text-slate-300">
              Proprietor:{" "}
              <span className="font-semibold text-white">
                Nilesh Khetri
              </span>
            </p>

          </div>

          {/* ==================================================
              SERVICES
          ================================================== */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-wide text-white">
              Services
            </h3>

            <div className="mt-2 h-0.5 w-8 bg-[#F7941D]" />

            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">

              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-xs text-slate-300 transition-colors duration-200 hover:text-[#F7941D]"
                >
                  {service.label}
                </Link>
              ))}

            </div>

          </div>

          {/* ==================================================
              INDUSTRIES
          ================================================== */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-wide text-white">
              Industries
            </h3>

            <div className="mt-2 h-0.5 w-8 bg-[#F7941D]" />

            <ul className="mt-4 space-y-2.5">

              {industries.map((industry) => (
                <li key={industry.label}>

                  <Link
                    href={industry.href}
                    className="text-xs text-slate-300 transition-colors duration-200 hover:text-[#F7941D]"
                  >
                    {industry.label}
                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* ==================================================
              CONTACT
          ================================================== */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-wide text-white">
              Contact Us
            </h3>

            <div className="mt-2 h-0.5 w-8 bg-[#F7941D]" />

            <div className="mt-4 space-y-3.5">

              {/* Phone */}

              <a
                href="tel:+91 9167411991"
                className="flex items-center gap-3 transition-colors duration-200 hover:text-[#F7941D]"
              >

                <Phone
                  size={16}
                  className="shrink-0 text-[#00AEEF]"
                />

                <span className="text-xs text-slate-300 hover:text-[#F7941D]">
                  +91  9167411991
                </span>

              </a>

              {/* Email */}

              <a
                href="mailto:admin@keynotenterprises.in"
                className="flex items-center gap-3 transition-colors duration-200 hover:text-[#F7941D]"
              >

                <Mail
                  size={16}
                  className="shrink-0 text-[#00AEEF]"
                />

                <span className="break-all text-xs text-slate-300 hover:text-[#F7941D]">
                  admin@keynotenterprises.in
                </span>

              </a>

              {/* Location */}

              <div className="flex items-start gap-3">

                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-[#00AEEF]"
                />

                <span className="text-xs leading-5 text-slate-300">
                Mumbai, india
                </span>

              </div>

              {/* Business Hours */}

              <div className="flex items-start gap-3">

                <Clock3
                  size={16}
                  className="mt-0.5 shrink-0 text-[#F7941D]"
                />

                <span className="text-xs leading-5 text-slate-300">
                  Mon – Sat,
                  <br />
                  9:30 AM – 7:00 PM
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* ==================================================
            BOTTOM BAR
        ================================================== */}

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-4 sm:flex-row">

          <p className="text-center text-[11px] text-slate-400 sm:text-left sm:text-xs">
            © 2026 Keynote Enterprises Solutions. All Rights Reserved.
          </p>

          <Link
            href="/#home"
            aria-label="Back to top"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-[#F7941D]"
          >
            <ArrowUp size={15} />
          </Link>

        </div>

      </div>

    </footer>
  );
}