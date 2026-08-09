import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import ServiceHero from "@/app/components/services/ServiceHero";
import ServiceFeatures from "@/app/components/services/ServiceFeatures";
import ServiceBenefits from "@/app/components/services/ServiceBenefits";
import ServiceProcess from "@/app/components/services/ServiceProcess";
import ServiceIndustries from "@/app/components/services/ServiceIndustries";
import ServiceCTA from "@/app/components/services/ServiceCTA";

import { Headphones } from "lucide-react";

export default function DialerPage() {
  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar />

      {/* =========================
          DIALER DETAIL PAGE
      ========================= */}

      <main>

        {/* Hero */}

        <ServiceHero
          title="Dialer Solutions"
          description="Powerful and reliable dialer solutions designed to improve calling productivity, campaign management and customer communication for modern businesses."
          icon={Headphones}
        />

        {/* Features */}

        <ServiceFeatures
          title="Complete Dialer Features"
          description="Our dialer solutions provide the essential tools required to manage professional outbound calling operations."
          features={[
            "Predictive Dialer",
            "Auto Dialer",
            "Manual Dialer",
            "Call Recording",
            "Campaign Management",
            "Agent Management",
            "Call Monitoring",
            "Call Reports",
            "Real-Time Monitoring",
          ]}
        />

        {/* Benefits */}

        <ServiceBenefits
          title="Improve Calling Productivity"
          description="A professional dialer system helps businesses reduce manual calling work, improve agent productivity and manage large calling campaigns efficiently."
          benefits={[
            "Higher Agent Productivity",
            "Reduced Manual Dialing",
            "Faster Customer Connections",
            "Better Campaign Management",
            "Real-Time Call Monitoring",
            "Detailed Call Reports",
            "Improved Customer Communication",
            "Centralized Call Management",
          ]}
        />

        {/* Process */}

        <ServiceProcess
          title="How Our Dialer Solution Works"
          description="We follow a structured process to understand your calling requirements and configure the right dialer solution."
          steps={[
            {
              number: "01",
              title: "Requirement Analysis",
              description:
                "We understand your calling volume, agents, campaigns and business requirements.",
            },
            {
              number: "02",
              title: "Solution Planning",
              description:
                "Our team plans the appropriate dialer setup according to your workflow.",
            },
            {
              number: "03",
              title: "System Configuration",
              description:
                "The dialer system, users, campaigns and calling settings are configured.",
            },
            {
              number: "04",
              title: "Testing",
              description:
                "We test calling, recording, campaigns and reporting before deployment.",
            },
            {
              number: "05",
              title: "Deployment",
              description:
                "The configured dialer solution is deployed for your business operations.",
            },
            {
              number: "06",
              title: "Support",
              description:
                "We provide technical support and maintenance after deployment.",
            },
          ]}
        />

        {/* Industries */}

        <ServiceIndustries
          title="Industries That Use Dialer Solutions"
          description="Our dialer solutions can be customized for businesses that handle regular outbound calling operations."
          industries={[
            {
              title: "Call Centers",
              description:
                "Manage large-scale outbound calling and agent operations.",
            },
            {
              title: "Sales Teams",
              description:
                "Improve lead calling and sales communication.",
            },
            {
              title: "Customer Support",
              description:
                "Manage customer communication more efficiently.",
            },
            {
              title: "Collection Teams",
              description:
                "Organize customer follow-up and collection campaigns.",
            },
          ]}
        />

        {/* CTA */}

       

      </main>

      {/* =========================
          FOOTER
      ========================= */}

      <Footer />
    </>
  );
}