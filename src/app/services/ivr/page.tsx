import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import ServiceHero from "@/app/components/services/ServiceHero";
import ServiceFeatures from "@/app/components/services/ServiceFeatures";
import ServiceBenefits from "@/app/components/services/ServiceBenefits";
import ServiceProcess from "@/app/components/services/ServiceProcess";
import ServiceIndustries from "@/app/components/services/ServiceIndustries";
import ServiceCTA from "@/app/components/services/ServiceCTA";

import { PhoneCall } from "lucide-react";

export default function IVRPage() {
  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar />

      {/* =========================
          IVR PAGE
      ========================= */}

      <main>

        {/* =========================
            HERO
        ========================= */}

        <ServiceHero
          title="IVR Solutions"
          description="Professional Interactive Voice Response solutions that automate customer interactions, intelligently route calls and provide a better communication experience for your business."
          icon={PhoneCall}
        />

        {/* =========================
            FEATURES
        ========================= */}

        <ServiceFeatures
          title="Complete IVR Features"
          description="Our IVR solutions help businesses automate incoming calls, route customers to the right department and manage communication efficiently."
          features={[
            "Interactive Voice Response",
            "Multi-Level IVR",
            "Call Routing",
            "Auto Attendant",
            "Voice Broadcasting",
            "Department-wise Call Routing",
            "Business Hours Routing",
            "Call Queue Management",
            "Welcome Greetings",
          ]}
        />

        {/* =========================
            BENEFITS
        ========================= */}

        <ServiceBenefits
          title="Improve Customer Communication"
          description="An intelligently configured IVR system can reduce manual call handling, improve customer experience and help businesses manage large volumes of incoming calls."
          benefits={[
            "Automated Customer Interaction",
            "Faster Call Routing",
            "Reduced Call Handling Workload",
            "Professional Welcome Experience",
            "Department-wise Call Management",
            "24×7 Automated Response",
            "Better Customer Experience",
            "Efficient Call Management",
          ]}
        />

        {/* =========================
            PROCESS
        ========================= */}

        <ServiceProcess
          title="How Our IVR Solution Works"
          description="We design and configure the IVR flow according to your business departments, customer journey and calling requirements."
          steps={[
            {
              number: "01",
              title: "Requirement Analysis",
              description:
                "We understand your departments, call volumes, business hours and customer communication requirements.",
            },
            {
              number: "02",
              title: "IVR Flow Planning",
              description:
                "We design the call flow, menu structure and routing logic according to your business process.",
            },
            {
              number: "03",
              title: "Voice Configuration",
              description:
                "Greetings, menu options, announcements and voice prompts are configured for your IVR system.",
            },
            {
              number: "04",
              title: "Call Routing Setup",
              description:
                "Calls are routed to the appropriate department, agent, extension or queue based on the selected options.",
            },
            {
              number: "05",
              title: "Testing & Deployment",
              description:
                "The complete IVR flow is tested to ensure proper routing and customer interaction before deployment.",
            },
            {
              number: "06",
              title: "Support & Maintenance",
              description:
                "We provide ongoing technical support and help update IVR menus, routing and business configurations.",
            },
          ]}
        />

        {/* =========================
            INDUSTRIES
        ========================= */}

        <ServiceIndustries
          title="Industries That Use IVR Solutions"
          description="IVR solutions can be customized for businesses that receive regular customer calls and require organized call handling."
          industries={[
            {
              title: "Call Centers",
              description:
                "Automate customer interactions and route calls to available agents.",
            },
            {
              title: "Corporate Offices",
              description:
                "Direct callers to the appropriate department or employee.",
            },
            {
              title: "Customer Support",
              description:
                "Provide automated information and efficient support call routing.",
            },
            {
              title: "Small & Medium Businesses",
              description:
                "Create a professional automated calling experience without complex infrastructure.",
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