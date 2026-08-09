import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import ServiceHero from "@/app/components/services/ServiceHero";
import ServiceFeatures from "@/app/components/services/ServiceFeatures";
import ServiceBenefits from "@/app/components/services/ServiceBenefits";
import ServiceProcess from "@/app/components/services/ServiceProcess";
import ServiceIndustries from "@/app/components/services/ServiceIndustries";
import ServiceCTA from "@/app/components/services/ServiceCTA";

import { Mail } from "lucide-react";

export default function BusinessEmailPage() {
  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar />

      {/* =========================
          BUSINESS EMAIL PAGE
      ========================= */}

      <main>

        {/* =========================
            HERO
        ========================= */}

        <ServiceHero
          title="Business Email Solutions"
          description="Professional and secure business email solutions that help organizations communicate with customers, employees and business partners using their own professional domain."
          icon={Mail}
        />

        {/* =========================
            FEATURES
        ========================= */}

        <ServiceFeatures
          title="Complete Business Email Solutions"
          description="We provide professional email setup, migration, security and business productivity solutions according to your organization's communication requirements."
          features={[
            "Professional Email",
            "Microsoft 365",
            "Google Workspace",
            "Email Migration",
            "Email Security",
            "Custom Domain Email",
            "Mailbox Setup",
            "Email Configuration",
            "Email Support",
          ]}
        />

        {/* =========================
            BENEFITS
        ========================= */}

        <ServiceBenefits
          title="Professional Communication for Your Business"
          description="A professional business email system improves brand credibility, organizes communication and gives your team reliable access to business email."
          benefits={[
            "Professional Business Identity",
            "Custom Domain Email",
            "Centralized Email Management",
            "Secure Business Communication",
            "Email Access Across Devices",
            "Business Productivity Tools",
            "Reliable Email Migration",
            "Technical Email Support",
          ]}
        />

        {/* =========================
            PROCESS
        ========================= */}

        <ServiceProcess
          title="Our Business Email Setup Process"
          description="We follow a structured process to configure your professional business email while minimizing disruption to your existing communication."
          steps={[
            {
              number: "01",
              title: "Requirement Analysis",
              description:
                "We understand your number of users, domain, existing email platform and business communication requirements.",
            },
            {
              number: "02",
              title: "Email Platform Selection",
              description:
                "We help you select a suitable professional email platform based on your business requirements.",
            },
            {
              number: "03",
              title: "Domain Configuration",
              description:
                "Required DNS and domain records are configured for your business email service.",
            },
            {
              number: "04",
              title: "Mailbox Setup",
              description:
                "User mailboxes, accounts and required email settings are created and configured.",
            },
            {
              number: "05",
              title: "Migration & Testing",
              description:
                "Existing emails can be migrated where required and the complete email system is tested.",
            },
            {
              number: "06",
              title: "Security & Support",
              description:
                "Security settings are configured and ongoing technical support is provided when required.",
            },
          ]}
        />

        {/* =========================
            INDUSTRIES
        ========================= */}

        <ServiceIndustries
          title="Businesses We Support"
          description="Professional business email solutions can be customized for organizations of different sizes and industries."
          industries={[
            {
              title: "Corporate Offices",
              description:
                "Professional email infrastructure for employees and business communication.",
            },
            {
              title: "Call Centers",
              description:
                "Organized business email for agents, management and customer communication.",
            },
            {
              title: "CA Firms",
              description:
                "Professional domain email for client communication and office operations.",
            },
            {
              title: "Small & Medium Businesses",
              description:
                "Cost-effective professional email solutions for growing businesses.",
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