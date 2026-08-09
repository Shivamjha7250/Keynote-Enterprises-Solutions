import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import ServiceHero from "@/app/components/services/ServiceHero";
import ServiceFeatures from "@/app/components/services/ServiceFeatures";
import ServiceBenefits from "@/app/components/services/ServiceBenefits";
import ServiceProcess from "@/app/components/services/ServiceProcess";
import ServiceIndustries from "@/app/components/services/ServiceIndustries";
import ServiceCTA from "@/app/components/services/ServiceCTA";

import { Server } from "lucide-react";

export default function SFTPPage() {
  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar />

      {/* =========================
          SFTP PAGE
      ========================= */}

      <main>

        {/* =========================
            HERO
        ========================= */}

        <ServiceHero
          title="SFTP Solutions"
          description="Secure File Transfer Protocol solutions for businesses that need reliable, controlled and secure exchange of files between users, systems and servers."
          icon={Server}
        />

        {/* =========================
            FEATURES
        ========================= */}

        <ServiceFeatures
          title="Complete SFTP Solutions"
          description="We configure secure file transfer environments that help businesses exchange important files while maintaining controlled access and organized data management."
          features={[
            "Secure File Transfer",
            "SFTP Server Configuration",
            "Data Backup",
            "User Management",
            "Secure Data Exchange",
            "User Access Control",
            "Directory Management",
            "Server Monitoring",
            "File Transfer Management",
          ]}
        />

        {/* =========================
            BENEFITS
        ========================= */}

        <ServiceBenefits
          title="Secure & Controlled File Exchange"
          description="A properly configured SFTP environment provides businesses with a secure way to exchange files while controlling users, directories and access permissions."
          benefits={[
            "Secure File Transfer",
            "Controlled User Access",
            "Centralized File Exchange",
            "Protected Business Data",
            "Organized File Management",
            "Reliable Data Backup",
            "Remote File Access",
            "Reduced File Sharing Risks",
          ]}
        />

        {/* =========================
            PROCESS
        ========================= */}

        <ServiceProcess
          title="Our SFTP Setup Process"
          description="We follow a structured process to configure a secure file transfer environment according to your business requirements."
          steps={[
            {
              number: "01",
              title: "Requirement Analysis",
              description:
                "We understand your file transfer requirements, users, server environment and data management needs.",
            },
            {
              number: "02",
              title: "Server Planning",
              description:
                "We plan the SFTP server structure, storage requirements, users and access permissions.",
            },
            {
              number: "03",
              title: "Server Configuration",
              description:
                "The SFTP server, directories, authentication and required configuration are set up.",
            },
            {
              number: "04",
              title: "User Management",
              description:
                "User accounts, permissions and directory access are configured according to business requirements.",
            },
            {
              number: "05",
              title: "Testing & Security",
              description:
                "File transfers, authentication, access permissions and server connectivity are tested.",
            },
            {
              number: "06",
              title: "Support & Maintenance",
              description:
                "We provide technical assistance, troubleshooting and ongoing support for your SFTP environment.",
            },
          ]}
        />

        {/* =========================
            INDUSTRIES
        ========================= */}

        <ServiceIndustries
          title="Industries That Use SFTP Solutions"
          description="SFTP solutions are suitable for businesses that regularly exchange sensitive, large or important files between teams, systems or locations."
          industries={[
            {
              title: "Corporate Businesses",
              description:
                "Secure exchange of business documents and files between teams and locations.",
            },
            {
              title: "CA Firms",
              description:
                "Secure transfer of financial documents and client-related business files.",
            },
            {
              title: "Architecture Firms",
              description:
                "Reliable transfer of large project files and design documents.",
            },
            {
              title: "Call Centers",
              description:
                "Controlled exchange of reports, operational files and business data.",
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