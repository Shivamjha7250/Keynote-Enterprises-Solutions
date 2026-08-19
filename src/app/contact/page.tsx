"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  CheckCircle2,
} from "lucide-react";

const contactPoints = [
  "IT Infrastructure & Networking",
  "Cloud & Communication Solutions",
  "Website & Software Development",
  "CCTV & Security Solutions",
];

const businessHours = [
  {
    day: "Monday – Friday",
    time: "9:30 AM – 7:00 PM",
  },
  {
    day: "Saturday",
    time: "9:30 AM – 7:00 PM",
  },
  {
    day: "Sunday",
    time: "Closed",
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/nileshkhaetri@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...data,

            _subject:
              "New Website Enquiry - Keynote Enterprises Solutions",

            _template: "table",

            _captcha: "false",
          }),
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        form.reset();

        setSuccessMessage(
          "Thank you! Your enquiry has been sent successfully. Our team will get back to you shortly."
        );
      } else {
        setErrorMessage(
          "Unable to send your enquiry. Please try again or contact us directly."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);

      setErrorMessage(
        "Something went wrong. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ==================================================
          NAVBAR
      ================================================== */}

      <Navbar />

      <main>

        {/* ==================================================
            HERO
        ================================================== */}

       <section
  className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-10 sm:py-12 lg:py-14"
  style={{ backgroundImage: "url('/breadcrumb-bg.png')" }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-[#072B52]/65" />

  <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-3xl text-center">

      {/* Label */}
      <div className="mb-5 flex items-center justify-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

        <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
          Contact Us
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
        Let&apos;s Build the Right
        <br />
        <span className="text-[#F7941D]">
          Technology Solution
        </span>
      </h1>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
        Have an IT, networking, communication, software or
        security requirement? Talk to our team about your
        business needs.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">

        <a
          href="#contact-form"
          className="inline-flex items-center gap-2 rounded-lg bg-[#F7941D] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#df8214]"
        >
          Send Enquiry
          <ArrowRight size={17} />
        </a>

        <a
          href="#contact-information"
          className="inline-flex items-center gap-2 rounded-lg border-2 border-white/80 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#0B3C5D]"
        >
          Contact Information
        </a>

      </div>

    </div>
  </div>
</section>

        {/* ==================================================
            CONTACT INFORMATION
        ================================================== */}

        <section
          id="contact-information"
          className="bg-white py-16 sm:py-20 lg:py-24"
        >

          <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8">

            <div className="mx-auto mb-12 max-w-3xl text-center">

              <div className="mb-4 flex items-center justify-center gap-2">

                <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

                <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
                  Get In Touch
                </span>

              </div>

              <h2 className="text-3xl font-extrabold text-[#0B3C5D] sm:text-4xl">
                We&apos;re Here to{" "}
                <span className="text-[#00AEEF]">
                  Help
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Connect with Keynote Enterprises Solutions to discuss
                your technology requirements and find the right
                solution for your business.
              </p>

            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {/* PHONE */}

              <a
                href="tel:+91 9167411991"
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00AEEF]/30 hover:shadow-lg"
              >

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#00AEEF]/10 transition-colors group-hover:bg-[#0B3C5D]">

                  <Phone
                    size={23}
                    className="text-[#00AEEF] transition-colors group-hover:text-white"
                  />

                </div>

                <h3 className="mt-5 text-sm font-bold text-[#0B3C5D]">
                  Phone
                </h3>

                <p className="mt-2 text-sm font-semibold text-slate-700">
                  +91  9167411991
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Business Enquiries
                </p>

              </a>

              {/* EMAIL */}

              <a
                href="mailto:admin@keynotenterprises.in"
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00AEEF]/30 hover:shadow-lg"
              >

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#00AEEF]/10 transition-colors group-hover:bg-[#0B3C5D]">

                  <Mail
                    size={23}
                    className="text-[#00AEEF] transition-colors group-hover:text-white"
                  />

                </div>

                <h3 className="mt-5 text-sm font-bold text-[#0B3C5D]">
                  Email
                </h3>

                <p className="mt-2 break-all text-xs font-semibold text-slate-700">
                  admin@keynotenterprises.in
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Email Enquiries
                </p>

              </a>

              {/* LOCATION */}

              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#00AEEF]/10">

                  <MapPin
                    size={23}
                    className="text-[#00AEEF]"
                  />

                </div>

                <h3 className="mt-5 text-sm font-bold text-[#0B3C5D]">
                  Location
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                    Mumbai, india
                </p>

              </div>

              {/* BUSINESS HOURS */}

              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#F7941D]/10">

                  <Clock3
                    size={23}
                    className="text-[#F7941D]"
                  />

                </div>

                <h3 className="mt-5 text-sm font-bold text-[#0B3C5D]">
                  Business Hours
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Mon – Sat
                  <br />
                  9:30 AM – 7:00 PM
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* ==================================================
            CONTACT FORM
        ================================================== */}

        <section
          id="contact-form"
          className="bg-slate-50 py-16 sm:py-20 lg:py-24"
        >

          <div className="mx-auto grid w-full max-w-[1100px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">

            {/* LEFT CONTENT */}

            <div>

              <div className="mb-4 flex items-center gap-2">

                <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

                <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
                  Send An Enquiry
                </span>

              </div>

              <h2 className="text-3xl font-extrabold leading-tight text-[#0B3C5D] sm:text-4xl">
                Tell Us About Your{" "}
                <span className="text-[#00AEEF]">
                  Requirement
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Share some details about your project or business
                requirement. Our team can review your requirements and
                discuss the appropriate technology solution.
              </p>

              <div className="mt-7 space-y-3">

                {contactPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#00AEEF]"
                    />

                    <span className="text-sm font-semibold text-[#0B3C5D]">
                      {point}
                    </span>

                  </div>
                ))}

              </div>

              {/* QUICK CONTACT */}

              <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5">

                <p className="text-xs font-bold uppercase tracking-wide text-[#F7941D]">
                  Quick Contact
                </p>

                <div className="mt-4 space-y-3">

                  <a
                    href="tel:+91 9167411991"
                    className="flex items-center gap-3 text-sm font-semibold text-[#0B3C5D] transition hover:text-[#F7941D]"
                  >

                    <Phone
                      size={17}
                      className="text-[#00AEEF]"
                    />

                    +91  9167411991

                  </a>

                  <a
                    href="mailto:admin@keynotenterprises.in"
                    className="flex items-center gap-3 text-sm font-semibold text-[#0B3C5D] transition hover:text-[#F7941D]"
                  >

                    <Mail
                      size={17}
                      className="text-[#00AEEF]"
                    />

                    admin@keynotenterprises.in

                  </a>

                </div>

              </div>

            </div>

            {/* ==================================================
                RIGHT FORM
            ================================================== */}

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >

              {/* FORM DATA */}

              <input
                type="hidden"
                name="_subject"
                value="New Website Enquiry - Keynote Enterprises Solutions"
              />

              <input
                type="hidden"
                name="_template"
                value="table"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <div className="grid gap-5 sm:grid-cols-2">

                {/* NAME */}

                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-bold text-[#0B3C5D]"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/10"
                  />

                </div>

                {/* PHONE */}

                <div>

                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-bold text-[#0B3C5D]"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="Enter phone number"
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/10"
                  />

                </div>

                {/* EMAIL */}

                <div className="sm:col-span-2">

                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-bold text-[#0B3C5D]"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/10"
                  />

                </div>

                {/* SERVICE */}

                <div className="sm:col-span-2">

                  <label
                    htmlFor="service"
                    className="mb-2 block text-xs font-bold text-[#0B3C5D]"
                  >
                    Service Required
                  </label>

                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    required
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/10"
                  >

                    <option value="" disabled>
                      Select a service
                    </option>

                    <option>Dialer Solutions</option>
                    <option>Cloud Dialer</option>
                    <option>IVR Solutions</option>
                    <option>Biometric Attendance</option>
                    <option>CCTV Surveillance</option>
                    <option>Computer Solutions</option>
                    <option>Networking Solutions</option>
                    <option>Website Development</option>
                    <option>Software Development</option>
                    <option>Domain Registration</option>
                    <option>Business Email Solutions</option>
                    <option>SFTP Solutions</option>
                    <option>Other IT Requirement</option>

                  </select>

                </div>

                {/* MESSAGE */}

                <div className="sm:col-span-2">

                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-bold text-[#0B3C5D]"
                  >
                    Your Requirement
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your requirement..."
                    className="w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/10"
                  />

                </div>

              </div>

              {/* ==================================================
                  SUCCESS MESSAGE
              ================================================== */}

              {successMessage && (
                <div className="mt-5 flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4">

                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-green-600"
                  />

                  <p className="text-sm font-medium leading-6 text-green-700">
                    {successMessage}
                  </p>

                </div>
              )}

              {/* ==================================================
                  ERROR MESSAGE
              ================================================== */}

              {errorMessage && (
                <div className="mt-5 rounded-lg border border-red-200 bg-red-50 p-4">

                  <p className="text-sm font-medium leading-6 text-red-700">
                    {errorMessage}
                  </p>

                </div>
              )}

              {/* ==================================================
                  SUBMIT BUTTON
              ================================================== */}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#F7941D] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#df8214] disabled:cursor-not-allowed disabled:opacity-70"
              >

                {isSubmitting ? (
                  <>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Enquiry
                    <Send size={17} />
                  </>
                )}

              </button>

            </form>

          </div>
        </section>

        {/* ==================================================
            BUSINESS HOURS
        ================================================== */}

        <section className="bg-white py-16 sm:py-20">

          <div className="mx-auto grid w-full max-w-[1000px] gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">

            <div>

              <div className="mb-4 flex items-center gap-2">

                <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

                <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
                  Working Hours
                </span>

              </div>

              <h2 className="text-3xl font-extrabold text-[#0B3C5D] sm:text-4xl">
                When You Can{" "}
                <span className="text-[#00AEEF]">
                  Reach Us
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Our business support team is available during the
                working hours below for enquiries and technology
                requirements.
              </p>

            </div>

            <div className="rounded-2xl bg-[#0B3C5D] p-6 sm:p-8">

              <div className="space-y-4">

                {businessHours.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between gap-5 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                  >

                    <span className="text-sm font-semibold text-white">
                      {item.day}
                    </span>

                    <span className="text-sm text-slate-300">
                      {item.time}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>
        </section>

        {/* ==================================================
            FINAL CTA
        ================================================== */}

        <section className="bg-[#0B3C5D] py-14 sm:py-16">

          <div className="mx-auto w-full max-w-[1000px] px-5 text-center sm:px-8">

            <MessageSquare
              size={38}
              className="mx-auto text-[#00AEEF]"
            />

            <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
              Have a Technology Requirement?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Contact Keynote Enterprises Solutions and discuss
              your IT infrastructure, communication, networking,
              software or security requirements.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">

              <Link
                href="/contact#contact-form"
                className="inline-flex items-center gap-2 rounded-lg bg-[#F7941D] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#df8214]"
              >
                Send Your Enquiry
                <ArrowRight size={18} />
              </Link>

              <a
                href="tel:+91 9167411991"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/80 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#0B3C5D]"
              >
                <Phone size={17} />
                +91  9167411991
              </a>

            </div>

          </div>
        </section>

      </main>

      {/* ==================================================
          FOOTER
      ================================================== */}

      <Footer />
    </>
  );
}