import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import ServiceHero from "@/app/components/services/ServiceHero";
import ServiceFeatures from "@/app/components/services/ServiceFeatures";
import ServiceBenefits from "@/app/components/services/ServiceBenefits";
import ServiceProcess from "@/app/components/services/ServiceProcess";
import ServiceIndustries from "@/app/components/services/ServiceIndustries";
import ServiceCTA from "@/app/components/services/ServiceCTA";

import { Code2 } from "lucide-react";

export default function SoftwareDevelopmentPage() {
  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar />

      {/* =========================
          SOFTWARE DEVELOPMENT PAGE
      ========================= */}

      <main>

        {/* =========================
            HERO
        ========================= */}

        <ServiceHero
          title="Software Development"
          description="Custom software solutions designed around your business processes to automate operations, improve productivity and provide better control over your business data."
          icon={Code2}
        />

        {/* =========================
            FEATURES
        ========================= */}

        <ServiceFeatures
          title="Complete Software Development Solutions"
          description="We develop customized software according to your business workflow, operational requirements and long-term technology goals."
          features={[
            "Custom Software",
            "ERP Solutions",
            "CRM Solutions",
            "Billing Software",
            "Business Automation",
            "Web-Based Applications",
            "Database Solutions",
            "Admin Dashboards",
            "Third-Party Integrations",
          ]}
        />

        {/* =========================
            BENEFITS
        ========================= */}

        <ServiceBenefits
          title="Transform Your Business With Custom Software"
          description="Custom software helps businesses replace manual processes, centralize information and create workflows specifically designed around their operations."
          benefits={[
            "Customized Business Workflows",
            "Process Automation",
            "Improved Employee Productivity",
            "Centralized Business Data",
            "Reduced Manual Work",
            "Better Reporting & Control",
            "Scalable Software Architecture",
            "Easy Business Process Management",
          ]}
        />

        {/* =========================
            PROCESS
        ========================= */}

        <ServiceProcess
          title="Our Software Development Process"
          description="We follow a structured development lifecycle to understand your requirements and build software that fits your business operations."
          steps={[
            {
              number: "01",
              title: "Requirement Analysis",
              description:
                "We understand your business processes, users, problems and required software functionality.",
            },
            {
              number: "02",
              title: "System Planning",
              description:
                "We define the application structure, modules, database requirements and technical approach.",
            },
            {
              number: "03",
              title: "UI/UX Design",
              description:
                "We design intuitive interfaces and workflows that make the software easy for your team to use.",
            },
            {
              number: "04",
              title: "Development",
              description:
                "The required modules, business logic, database and integrations are developed according to the approved plan.",
            },
            {
              number: "05",
              title: "Testing",
              description:
                "The software is tested for functionality, performance, security and compatibility before deployment.",
            },
            {
              number: "06",
              title: "Deployment & Support",
              description:
                "The completed software is deployed and ongoing technical support and maintenance can be provided.",
            },
          ]}
        />

        {/* =========================
            INDUSTRIES
        ========================= */}

        <ServiceIndustries
          title="Businesses We Build Software For"
          description="Our custom software solutions can be designed for different business sectors and operational requirements."
          industries={[
            {
              title: "Corporate Businesses",
              description:
                "Custom business applications for internal operations, reporting and workflow management.",
            },
            {
              title: "Call Centers",
              description:
                "CRM, calling, agent management and business automation solutions.",
            },
            {
              title: "CA Firms",
              description:
                "Business software for managing clients, records, billing and office workflows.",
            },
            {
              title: "Small & Medium Businesses",
              description:
                "Cost-effective software solutions designed around specific business requirements.",
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