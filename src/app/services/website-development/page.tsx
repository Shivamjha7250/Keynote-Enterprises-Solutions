import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import ServiceHero from "@/app/components/services/ServiceHero";
import ServiceFeatures from "@/app/components/services/ServiceFeatures";
import ServiceBenefits from "@/app/components/services/ServiceBenefits";
import ServiceProcess from "@/app/components/services/ServiceProcess";
import ServiceIndustries from "@/app/components/services/ServiceIndustries";
import ServiceCTA from "@/app/components/services/ServiceCTA";

import { Globe } from "lucide-react";

export default function WebsiteDevelopmentPage() {
  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar />

      {/* =========================
          WEBSITE DEVELOPMENT PAGE
      ========================= */}

      <main>

        {/* =========================
            HERO
        ========================= */}

        <ServiceHero
          title="Website Development"
          description="Professional, responsive and business-focused websites designed to build a strong digital presence, improve customer engagement and support business growth."
          icon={Globe}
        />

        {/* =========================
            FEATURES
        ========================= */}

        <ServiceFeatures
          title="Complete Website Development Solutions"
          description="We develop modern websites according to your business goals, brand identity, target audience and functional requirements."
          features={[
            "Business Websites",
            "Corporate Websites",
            "Portfolio Websites",
            "E-Commerce Websites",
            "Responsive Web Design",
            "Custom Website Development",
            "Contact & Lead Forms",
            "Website Maintenance",
            "Performance Optimization",
          ]}
        />

        {/* =========================
            BENEFITS
        ========================= */}

        <ServiceBenefits
          title="Build a Strong Digital Presence"
          description="A professional website helps your business establish credibility, reach more customers and present your products or services effectively online."
          benefits={[
            "Professional Online Presence",
            "Mobile Responsive Design",
            "Modern User Experience",
            "Business-Focused Design",
            "Better Customer Engagement",
            "Lead Generation Support",
            "Scalable Website Structure",
            "Ongoing Maintenance Support",
          ]}
        />

        {/* =========================
            PROCESS
        ========================= */}

        <ServiceProcess
          title="Our Website Development Process"
          description="We follow a structured development process to create a professional website that matches your business requirements."
          steps={[
            {
              number: "01",
              title: "Requirement Analysis",
              description:
                "We understand your business, target audience, services, goals and website requirements.",
            },
            {
              number: "02",
              title: "Planning & Structure",
              description:
                "We plan the website pages, navigation, content structure and required functionality.",
            },
            {
              number: "03",
              title: "UI/UX Design",
              description:
                "We create a clean, modern and responsive design aligned with your brand identity.",
            },
            {
              number: "04",
              title: "Development",
              description:
                "The website is developed with the required features, responsive layouts and business functionality.",
            },
            {
              number: "05",
              title: "Testing",
              description:
                "We test responsiveness, navigation, forms, performance and functionality across devices.",
            },
            {
              number: "06",
              title: "Launch & Support",
              description:
                "After final approval, the website is deployed and ongoing maintenance support can be provided.",
            },
          ]}
        />

        {/* =========================
            INDUSTRIES
        ========================= */}

        <ServiceIndustries
          title="Businesses We Build Websites For"
          description="Our website development services can be customized for businesses across different industries and professional sectors."
          industries={[
            {
              title: "Corporate Businesses",
              description:
                "Professional corporate websites that showcase services, capabilities and company information.",
            },
            {
              title: "Small & Medium Businesses",
              description:
                "Cost-effective business websites designed to establish a professional online presence.",
            },
            {
              title: "Professional Firms",
              description:
                "Modern websites for CA firms, consultants and other professional service providers.",
            },
            {
              title: "Retail & E-Commerce",
              description:
                "Product-focused websites and e-commerce solutions designed for online business growth.",
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