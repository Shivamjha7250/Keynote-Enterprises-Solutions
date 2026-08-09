import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import ServiceHero from "@/app/components/services/ServiceHero";
import ServiceFeatures from "@/app/components/services/ServiceFeatures";
import ServiceBenefits from "@/app/components/services/ServiceBenefits";
import ServiceProcess from "@/app/components/services/ServiceProcess";
import ServiceIndustries from "@/app/components/services/ServiceIndustries";
import ServiceCTA from "@/app/components/services/ServiceCTA";

import { Globe2 } from "lucide-react";

export default function DomainRegistrationPage() {
  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar />

      {/* =========================
          DOMAIN REGISTRATION PAGE
      ========================= */}

      <main>

        {/* =========================
            HERO
        ========================= */}

        <ServiceHero
          title="Domain Registration"
          description="Register the right domain for your business and establish a professional online identity with reliable domain registration, management and renewal support."
          icon={Globe2}
        />

        {/* =========================
            FEATURES
        ========================= */}

        <ServiceFeatures
          title="Complete Domain Registration Solutions"
          description="We help businesses select, register and manage domains that match their brand, business name and online presence."
          features={[
            ".com Domain Registration",
            ".in Domain Registration",
            ".org Domain Registration",
            "Premium Domains",
            "Domain Renewal",
            "Domain Management",
            "DNS Management",
            "Domain Transfer Support",
            "Domain Expiry Assistance",
          ]}
        />

        {/* =========================
            BENEFITS
        ========================= */}

        <ServiceBenefits
          title="Build Your Professional Online Identity"
          description="A suitable domain name gives your business a professional identity online and makes it easier for customers to find and remember your brand."
          benefits={[
            "Professional Business Identity",
            "Brand-Focused Domain Selection",
            "Multiple Domain Extensions",
            "Easy Domain Management",
            "Domain Renewal Support",
            "DNS Configuration Support",
            "Domain Transfer Assistance",
            "Better Online Brand Recognition",
          ]}
        />

        {/* =========================
            PROCESS
        ========================= */}

        <ServiceProcess
          title="Our Domain Registration Process"
          description="We make domain registration simple by helping you select, register and configure the domain required for your business."
          steps={[
            {
              number: "01",
              title: "Domain Requirement",
              description:
                "We understand your business name, brand and preferred domain requirements.",
            },
            {
              number: "02",
              title: "Domain Search",
              description:
                "We check suitable domain names and extensions based on your business identity.",
            },
            {
              number: "03",
              title: "Domain Selection",
              description:
                "You select the available domain name that best matches your business.",
            },
            {
              number: "04",
              title: "Registration",
              description:
                "The selected domain is registered with the required ownership and contact details.",
            },
            {
              number: "05",
              title: "DNS Configuration",
              description:
                "Required DNS records can be configured for your website, email and other services.",
            },
            {
              number: "06",
              title: "Renewal & Support",
              description:
                "We provide domain renewal and technical assistance to help keep your domain active.",
            },
          ]}
        />

        {/* =========================
            INDUSTRIES
        ========================= */}

        <ServiceIndustries
          title="Who Needs Domain Registration?"
          description="Every organization building a professional online presence can benefit from a suitable business domain."
          industries={[
            {
              title: "Corporate Businesses",
              description:
                "Professional domains for company websites and online business identity.",
            },
            {
              title: "Small & Medium Businesses",
              description:
                "Affordable domain solutions for businesses establishing their online presence.",
            },
            {
              title: "Professional Firms",
              description:
                "Brand-focused domains for CA firms, consultants and professional service providers.",
            },
            {
              title: "Startups & New Businesses",
              description:
                "Domain registration support for new brands launching their digital presence.",
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