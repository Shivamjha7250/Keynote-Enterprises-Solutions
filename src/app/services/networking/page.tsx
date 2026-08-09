import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import ServiceHero from "@/app/components/services/ServiceHero";
import ServiceFeatures from "@/app/components/services/ServiceFeatures";
import ServiceBenefits from "@/app/components/services/ServiceBenefits";
import ServiceProcess from "@/app/components/services/ServiceProcess";
import ServiceIndustries from "@/app/components/services/ServiceIndustries";
import ServiceCTA from "@/app/components/services/ServiceCTA";

import { Network } from "lucide-react";

export default function NetworkingPage() {
  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar />

      {/* =========================
          NETWORKING PAGE
      ========================= */}

      <main>

        {/* =========================
            HERO
        ========================= */}

        <ServiceHero
          title="Networking Solutions"
          description="Reliable and secure networking solutions designed to connect your business systems, improve network performance and provide secure access to your digital infrastructure."
          icon={Network}
        />

        {/* =========================
            FEATURES
        ========================= */}

        <ServiceFeatures
          title="Complete Networking Solutions"
          description="We design, install and configure business networks according to your office size, users, devices, security requirements and connectivity needs."
          features={[
            "LAN / WAN Setup",
            "Wi-Fi Installation",
            "Router Configuration",
            "Switch Configuration",
            "Firewall Setup",
            "VPN Solutions",
            "Network Cabling",
            "Network Security",
            "Network Troubleshooting",
          ]}
        />

        {/* =========================
            BENEFITS
        ========================= */}

        <ServiceBenefits
          title="Build a Reliable Business Network"
          description="A professionally designed network provides reliable connectivity, better performance and secure communication between your employees, devices and business systems."
          benefits={[
            "Reliable Network Connectivity",
            "Better Internet & Network Performance",
            "Secure Business Communication",
            "Professional Network Infrastructure",
            "Improved Wi-Fi Coverage",
            "Secure Remote Access Through VPN",
            "Network Security & Firewall Protection",
            "Reduced Network Downtime",
          ]}
        />

        {/* =========================
            PROCESS
        ========================= */}

        <ServiceProcess
          title="How Our Networking Service Works"
          description="We follow a structured networking process from site assessment and planning to installation, configuration and ongoing technical support."
          steps={[
            {
              number: "01",
              title: "Site Assessment",
              description:
                "We inspect your office layout, users, devices, existing infrastructure and connectivity requirements.",
            },
            {
              number: "02",
              title: "Network Planning",
              description:
                "Our team designs the appropriate LAN, WAN, Wi-Fi and network security architecture.",
            },
            {
              number: "03",
              title: "Equipment Selection",
              description:
                "We recommend suitable routers, switches, access points, firewalls and networking components.",
            },
            {
              number: "04",
              title: "Installation",
              description:
                "Network cabling, routers, switches, Wi-Fi devices and other required infrastructure are installed.",
            },
            {
              number: "05",
              title: "Configuration & Testing",
              description:
                "Network devices, firewall rules, VPN access and connectivity are configured and thoroughly tested.",
            },
            {
              number: "06",
              title: "Support & Maintenance",
              description:
                "We provide troubleshooting, monitoring and ongoing technical support to keep your network reliable.",
            },
          ]}
        />

        {/* =========================
            INDUSTRIES
        ========================= */}

        <ServiceIndustries
          title="Industries We Serve"
          description="Our networking solutions can be customized for offices and organizations that require reliable and secure business connectivity."
          industries={[
            {
              title: "Corporate Offices",
              description:
                "Secure and reliable networking infrastructure for employees and business systems.",
            },
            {
              title: "Call Centers",
              description:
                "High-performance networks for calling systems, CRM and large teams.",
            },
            {
              title: "CA Firms",
              description:
                "Secure connectivity for accounting systems, shared resources and business applications.",
            },
            {
              title: "Architecture Firms",
              description:
                "High-speed networking and file sharing for large project files and workstations.",
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