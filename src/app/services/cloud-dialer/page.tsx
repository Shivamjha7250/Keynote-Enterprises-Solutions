import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import ServiceHero from "@/app/components/services/ServiceHero";
import ServiceFeatures from "@/app/components/services/ServiceFeatures";
import ServiceBenefits from "@/app/components/services/ServiceBenefits";
import ServiceProcess from "@/app/components/services/ServiceProcess";
import ServiceIndustries from "@/app/components/services/ServiceIndustries";
import ServiceCTA from "@/app/components/services/ServiceCTA";

import {
  Cloud,
} from "lucide-react";

export default function CloudDialerPage() {
  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar />

      {/* =========================
          CLOUD DIALER PAGE
      ========================= */}

      <main>

        {/* =========================
            HERO
        ========================= */}

        <ServiceHero
          title="Cloud Dialer Solutions"
          description="Secure and scalable cloud-based calling solutions that help businesses manage remote calling, agents, campaigns and customer communication from anywhere."
          icon={Cloud}
        />

        {/* =========================
            FEATURES
        ========================= */}

        <ServiceFeatures
          title="Complete Cloud Dialer Features"
          description="Our cloud dialer solutions provide businesses with a centralized and flexible calling platform without depending on traditional on-premise infrastructure."
          features={[
            "Hosted Cloud Dialer",
            "Remote Calling Solutions",
            "CRM Integration",
            "Real-Time Reporting",
            "Secure Cloud Infrastructure",
            "Remote Agent Management",
            "Campaign Management",
            "Call Recording",
            "Call Monitoring",
          ]}
        />

        {/* =========================
            BENEFITS
        ========================= */}

        <ServiceBenefits
          title="Why Choose a Cloud Dialer?"
          description="Cloud-based calling gives businesses the flexibility to manage calling operations from different locations while maintaining centralized control and visibility."
          benefits={[
            "Work From Anywhere",
            "Remote Agent Support",
            "Reduced Infrastructure Requirements",
            "Easy Business Scalability",
            "Centralized Call Management",
            "Real-Time Reporting",
            "CRM Integration",
            "Secure Cloud Infrastructure",
          ]}
        />

        {/* =========================
            PROCESS
        ========================= */}

        <ServiceProcess
          title="How Our Cloud Dialer Works"
          description="We configure the cloud dialer according to your business workflow, calling requirements and team structure."
          steps={[
            {
              number: "01",
              title: "Requirement Analysis",
              description:
                "We understand your agents, calling volume, campaigns, CRM requirements and business workflow.",
            },
            {
              number: "02",
              title: "Cloud Planning",
              description:
                "Our team plans the appropriate cloud dialer architecture according to your requirements.",
            },
            {
              number: "03",
              title: "System Configuration",
              description:
                "Users, campaigns, calling rules, permissions and reporting are configured.",
            },
            {
              number: "04",
              title: "CRM Integration",
              description:
                "The cloud dialer can be integrated with your existing CRM and business workflow.",
            },
            {
              number: "05",
              title: "Testing & Deployment",
              description:
                "Calling, recording, reporting and user access are tested before going live.",
            },
            {
              number: "06",
              title: "Support & Maintenance",
              description:
                "Our technical team provides ongoing support and assistance after deployment.",
            },
          ]}
        />

        {/* =========================
            INDUSTRIES
        ========================= */}

        <ServiceIndustries
          title="Industries That Use Cloud Dialers"
          description="Cloud dialer technology is suitable for businesses that require flexible and centralized calling operations."
          industries={[
            {
              title: "Call Centers",
              description:
                "Manage remote and centralized calling teams efficiently.",
            },
            {
              title: "Sales Teams",
              description:
                "Connect sales representatives with customers from anywhere.",
            },
            {
              title: "Customer Support",
              description:
                "Provide centralized calling and customer communication.",
            },
            {
              title: "Remote Teams",
              description:
                "Allow distributed agents to work using a centralized cloud platform.",
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