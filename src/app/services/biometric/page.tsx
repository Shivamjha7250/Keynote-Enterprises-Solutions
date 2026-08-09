import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import ServiceHero from "@/app/components/services/ServiceHero";
import ServiceFeatures from "@/app/components/services/ServiceFeatures";
import ServiceBenefits from "@/app/components/services/ServiceBenefits";
import ServiceProcess from "@/app/components/services/ServiceProcess";
import ServiceIndustries from "@/app/components/services/ServiceIndustries";
import ServiceCTA from "@/app/components/services/ServiceCTA";

import { Fingerprint } from "lucide-react";

export default function BiometricPage() {
  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar />

      {/* =========================
          BIOMETRIC PAGE
      ========================= */}

      <main>

        {/* =========================
            HERO
        ========================= */}

        <ServiceHero
          title="Biometric Attendance Solutions"
          description="Modern biometric attendance and access control solutions that help businesses accurately manage employee attendance, working hours and secure access."
          icon={Fingerprint}
        />

        {/* =========================
            FEATURES
        ========================= */}

        <ServiceFeatures
          title="Complete Biometric Features"
          description="Our biometric solutions combine attendance management, employee identification and access control to create a reliable workplace management system."
          features={[
            "Fingerprint Devices",
            "Face Recognition",
            "Attendance Software",
            "Access Control",
            "Payroll Integration",
            "Employee Management",
            "Shift Management",
            "Attendance Reports",
            "Working Hours Tracking",
          ]}
        />

        {/* =========================
            BENEFITS
        ========================= */}

        <ServiceBenefits
          title="Smarter Employee Attendance Management"
          description="Biometric technology helps businesses maintain accurate attendance records, reduce manual work and improve employee management."
          benefits={[
            "Accurate Employee Attendance",
            "Reduced Attendance Fraud",
            "Automated Attendance Records",
            "Easy Employee Management",
            "Faster Attendance Processing",
            "Payroll Integration",
            "Secure Access Control",
            "Detailed Attendance Reports",
          ]}
        />

        {/* =========================
            PROCESS
        ========================= */}

        <ServiceProcess
          title="How Our Biometric Solution Works"
          description="We understand your employee management requirements and configure the biometric system according to your workplace and attendance workflow."
          steps={[
            {
              number: "01",
              title: "Requirement Analysis",
              description:
                "We understand your employee count, locations, shifts and attendance requirements.",
            },
            {
              number: "02",
              title: "Device Selection",
              description:
                "We recommend suitable fingerprint or face recognition devices according to your requirements.",
            },
            {
              number: "03",
              title: "System Installation",
              description:
                "Biometric devices are installed and connected with the attendance management system.",
            },
            {
              number: "04",
              title: "Employee Enrollment",
              description:
                "Employee biometric information and required access permissions are configured.",
            },
            {
              number: "05",
              title: "Testing & Deployment",
              description:
                "Attendance, access control, reports and system connectivity are tested before deployment.",
            },
            {
              number: "06",
              title: "Support & Maintenance",
              description:
                "We provide technical support, troubleshooting and ongoing maintenance for the system.",
            },
          ]}
        />

        {/* =========================
            INDUSTRIES
        ========================= */}

        <ServiceIndustries
          title="Industries That Use Biometric Solutions"
          description="Biometric attendance systems can be customized for organizations that need accurate employee attendance and controlled workplace access."
          industries={[
            {
              title: "Corporate Offices",
              description:
                "Manage employee attendance, working hours and access efficiently.",
            },
            {
              title: "Call Centers",
              description:
                "Track large teams, shifts and employee attendance accurately.",
            },
            {
              title: "CA Firms",
              description:
                "Maintain organized attendance records for office employees.",
            },
            {
              title: "Small & Medium Businesses",
              description:
                "Automate attendance management without manual registers.",
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