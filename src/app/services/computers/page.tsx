import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import ServiceHero from "@/app/components/services/ServiceHero";
import ServiceFeatures from "@/app/components/services/ServiceFeatures";
import ServiceBenefits from "@/app/components/services/ServiceBenefits";
import ServiceProcess from "@/app/components/services/ServiceProcess";
import ServiceIndustries from "@/app/components/services/ServiceIndustries";
import ServiceCTA from "@/app/components/services/ServiceCTA";

import { Monitor } from "lucide-react";

export default function ComputersPage() {
  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar />

      {/* =========================
          COMPUTER SOLUTIONS PAGE
      ========================= */}

      <main>

        {/* =========================
            HERO
        ========================= */}

        <ServiceHero
          title="Computer Solutions"
          description="Complete computer solutions for businesses, including desktop and laptop sales, computer repair, hardware upgrades and professional annual maintenance support."
          icon={Monitor}
        />

        {/* =========================
            FEATURES
        ========================= */}

        <ServiceFeatures
          title="Complete Computer Solutions"
          description="We provide reliable computer hardware, repair and maintenance services to keep your business systems productive and running smoothly."
          features={[
            "Desktop Sales",
            "Laptop Sales",
            "Annual Maintenance",
            "Computer Repair",
            "Hardware Upgrades",
            "RAM Upgrades",
            "SSD Upgrades",
            "Operating System Support",
            "Hardware Diagnostics",
          ]}
        />

        {/* =========================
            BENEFITS
        ========================= */}

        <ServiceBenefits
          title="Reliable IT Hardware for Your Business"
          description="The right computer hardware and professional technical support can reduce downtime, improve employee productivity and extend the life of your IT equipment."
          benefits={[
            "Reliable Desktop & Laptop Systems",
            "Fast Technical Support",
            "Reduced Business Downtime",
            "Professional Hardware Diagnostics",
            "Performance Improvements",
            "Hardware Upgrade Support",
            "Regular Preventive Maintenance",
            "Longer Equipment Lifespan",
          ]}
        />

        {/* =========================
            PROCESS
        ========================= */}

        <ServiceProcess
          title="How Our Computer Service Works"
          description="We follow a systematic process to understand your hardware requirements and provide the appropriate computer solution."
          steps={[
            {
              number: "01",
              title: "Requirement Analysis",
              description:
                "We understand your business requirements, number of users, applications and hardware needs.",
            },
            {
              number: "02",
              title: "System Recommendation",
              description:
                "Our team recommends suitable desktop, laptop or hardware configurations according to your requirements.",
            },
            {
              number: "03",
              title: "Hardware Supply",
              description:
                "Required computers and hardware components are arranged and supplied according to the selected configuration.",
            },
            {
              number: "04",
              title: "Installation & Setup",
              description:
                "Operating systems, drivers, required software and hardware components are configured and tested.",
            },
            {
              number: "05",
              title: "Testing",
              description:
                "The system is checked for performance, hardware health and compatibility before deployment.",
            },
            {
              number: "06",
              title: "Support & Maintenance",
              description:
                "We provide repair, troubleshooting, upgrades and annual maintenance support whenever required.",
            },
          ]}
        />

        {/* =========================
            INDUSTRIES
        ========================= */}

        <ServiceIndustries
          title="Industries We Support"
          description="Our computer solutions are suitable for organizations that depend on reliable desktop and laptop systems for daily operations."
          industries={[
            {
              title: "Corporate Offices",
              description:
                "Reliable desktop and laptop solutions for employees and office operations.",
            },
            {
              title: "Call Centers",
              description:
                "Computer systems designed for calling, CRM and customer support operations.",
            },
            {
              title: "CA Firms",
              description:
                "Reliable workstations for accounting, documentation and business applications.",
            },
            {
              title: "Architecture Firms",
              description:
                "Workstation support and hardware upgrades for demanding professional applications.",
            },
          ]}
        />

        {/* =========================
            CTA
        ========================= */}

       

      </main>

      {/* =========================
          FOOTER
      ========================= */}

      <Footer />
    </>
  );
}