import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import ServiceHero from "@/app/components/services/ServiceHero";
import ServiceFeatures from "@/app/components/services/ServiceFeatures";
import ServiceBenefits from "@/app/components/services/ServiceBenefits";
import ServiceProcess from "@/app/components/services/ServiceProcess";
import ServiceIndustries from "@/app/components/services/ServiceIndustries";
import ServiceCTA from "@/app/components/services/ServiceCTA";

import { Camera } from "lucide-react";

export default function CCTVPage() {
  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar />

      {/* =========================
          CCTV PAGE
      ========================= */}

      <main>

        {/* =========================
            HERO
        ========================= */}

        <ServiceHero
          title="CCTV Surveillance Solutions"
          description="Professional CCTV surveillance and security solutions designed to protect your office, business premises, employees and valuable assets with reliable monitoring."
          icon={Camera}
        />

        {/* =========================
            FEATURES
        ========================= */}

        <ServiceFeatures
          title="Complete CCTV Surveillance Features"
          description="We provide complete CCTV security solutions from camera installation and recording systems to remote monitoring and annual maintenance support."
          features={[
            "HD CCTV Installation",
            "IP Camera",
            "Remote Monitoring",
            "DVR / NVR Setup",
            "AMC Support",
            "Indoor & Outdoor Cameras",
            "Night Vision Cameras",
            "Mobile Remote Viewing",
            "Video Recording & Storage",
          ]}
        />

        {/* =========================
            BENEFITS
        ========================= */}

        <ServiceBenefits
          title="Protect Your Business With Reliable Surveillance"
          description="A properly designed CCTV system helps businesses monitor activities, improve security and maintain visibility across important areas of their premises."
          benefits={[
            "Improved Business Security",
            "24×7 Video Surveillance",
            "Remote Monitoring From Anywhere",
            "Crime & Unauthorized Access Prevention",
            "Clear Video Recording",
            "Better Workplace Monitoring",
            "Evidence & Incident Recording",
            "Professional Maintenance Support",
          ]}
        />

        {/* =========================
            PROCESS
        ========================= */}

        <ServiceProcess
          title="How Our CCTV Installation Works"
          description="We follow a systematic process to design and install a CCTV surveillance system according to your premises, security requirements and budget."
          steps={[
            {
              number: "01",
              title: "Site Inspection",
              description:
                "We inspect your premises and identify important areas that require surveillance coverage.",
            },
            {
              number: "02",
              title: "Security Planning",
              description:
                "Our team plans camera locations, coverage areas, recording requirements and network infrastructure.",
            },
            {
              number: "03",
              title: "Camera Selection",
              description:
                "We recommend suitable HD or IP cameras based on indoor, outdoor, lighting and security requirements.",
            },
            {
              number: "04",
              title: "Installation",
              description:
                "Cameras, cabling, DVR/NVR systems and required networking equipment are professionally installed.",
            },
            {
              number: "05",
              title: "Testing & Configuration",
              description:
                "Camera views, recording, storage, remote access and monitoring features are tested and configured.",
            },
            {
              number: "06",
              title: "Support & AMC",
              description:
                "We provide ongoing technical support and annual maintenance to keep your surveillance system reliable.",
            },
          ]}
        />

        {/* =========================
            INDUSTRIES
        ========================= */}

        <ServiceIndustries
          title="Industries That Use CCTV Solutions"
          description="Our CCTV surveillance solutions can be customized for offices, commercial premises and businesses of different sizes."
          industries={[
            {
              title: "Corporate Offices",
              description:
                "Monitor entrances, workspaces and important areas of corporate offices.",
            },
            {
              title: "Call Centers",
              description:
                "Improve workplace security and monitor office premises.",
            },
            {
              title: "CA Firms",
              description:
                "Protect offices and sensitive business environments.",
            },
            {
              title: "Small & Medium Businesses",
              description:
                "Affordable surveillance solutions for shops, offices and commercial premises.",
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