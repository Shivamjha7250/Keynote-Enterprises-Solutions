import Link from "next/link";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import {
  ArrowRight,
  Quote,
  Star,
  MessageSquareQuote,
  CheckCircle2,
} from "lucide-react";

const testimonials = [
  // =========================
  // HOME PAGE TESTIMONIAL 1
  // =========================
  {
    quote:
      "Excellent networking and cloud dialer services. The technical support was professional and the implementation was smooth.",
    service: "Networking & Cloud Dialer",
    category: "Call Center",
  },

  // =========================
  // HOME PAGE TESTIMONIAL 2
  // =========================
  {
    quote:
      "Professional website development with timely delivery. The team understood our requirements and delivered a clean business website.",
    service: "Website Development",
    category: "Business",
  },

  // =========================
  // HOME PAGE TESTIMONIAL 3
  // =========================
  {
    quote:
      "Reliable CCTV and biometric installation. The setup was properly configured and the team provided good technical guidance.",
    service: "CCTV & Biometric",
    category: "Corporate Office",
  },

  // =========================
  // ADDITIONAL TESTIMONIAL 4
  // =========================
  {
    quote:
      "Our office networking setup became much more organized and reliable after the implementation. Technical support has also been helpful.",
    service: "Networking Solutions",
    category: "Professional Firm",
  },

  // =========================
  // ADDITIONAL TESTIMONIAL 5
  // =========================
  {
    quote:
      "The business email setup was handled professionally. Our team can now manage company communication using professional domain email.",
    service: "Business Email",
    category: "Small Business",
  },

  // =========================
  // ADDITIONAL TESTIMONIAL 6
  // =========================
  {
    quote:
      "We needed a customized software solution for our business workflow and received a practical solution based on our requirements.",
    service: "Software Development",
    category: "Business",
  },
];

const highlights = [
  "Professional Technical Support",
  "Reliable IT Solutions",
  "Business-Focused Approach",
  "Customized Technology Services",
];

export default function TestimonialsPage() {
  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar />

      <main>

        {/* =========================
            HERO
        ========================= */}

        <section className="relative overflow-hidden bg-gradient-to-r from-[#072B52] via-[#0B3C5D] to-[#0E5A88] py-20 sm:py-24 lg:py-28">

          <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#00AEEF]/20 blur-3xl" />

          <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#F7941D]/10 blur-3xl" />

          <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">

            <div className="mx-auto max-w-3xl text-center">

              <div className="mb-5 flex items-center justify-center gap-2">

                <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

                <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
                  Client Testimonials
                </span>

              </div>

              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                What Our{" "}
                <span className="text-[#F7941D]">
                  Clients Say
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                Our goal is to provide reliable technology solutions
                and professional support that help businesses operate
                more efficiently.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">

                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#F7941D] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#df8214]"
                >
                  Discuss Your Requirements
                  <ArrowRight size={17} />
                </Link>

                <a
                  href="#reviews"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-white/80 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#0B3C5D]"
                >
                  Read Reviews
                </a>

              </div>

            </div>

          </div>
        </section>

        {/* =========================
            INTRO
        ========================= */}

        <section className="bg-white py-16 sm:py-20">

          <div className="mx-auto w-full max-w-[1000px] px-5 text-center sm:px-8">

            <div className="mb-4 flex items-center justify-center gap-2">

              <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

              <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
                Customer Experience
              </span>

            </div>

            <h2 className="text-3xl font-extrabold text-[#0B3C5D] sm:text-4xl">
              Built Around{" "}
              <span className="text-[#00AEEF]">
                Customer Requirements
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              From infrastructure and networking to software,
              communication and security, we focus on delivering
              solutions that are practical, reliable and aligned with
              each customer's business requirements.
            </p>

          </div>

        </section>

        {/* =========================
            TESTIMONIALS
        ========================= */}

        <section
          id="reviews"
          className="bg-slate-50 py-16 sm:py-20 lg:py-24"
        >

          <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">

            <div className="mx-auto mb-12 max-w-3xl text-center">

              <div className="mb-4 flex items-center justify-center gap-2">

                <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

                <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
                  Client Feedback
                </span>

              </div>

              <h2 className="text-3xl font-extrabold text-[#0B3C5D] sm:text-4xl lg:text-[42px]">
                Trusted for{" "}
                <span className="text-[#00AEEF]">
                  Technology Solutions
                </span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                A few examples of the type of feedback businesses
                can provide about our services and support.
              </p>

            </div>

            {/* =========================
                6 TESTIMONIAL CARDS
            ========================= */}

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {testimonials.map((testimonial, index) => (
                <article
                  key={`${testimonial.service}-${index}`}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#00AEEF]/30 hover:shadow-xl sm:p-7"
                >

                  {/* Quote Icon */}

                  <div className="flex items-start justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00AEEF]/10 transition-colors duration-300 group-hover:bg-[#0B3C5D]">

                      <Quote
                        size={23}
                        className="text-[#00AEEF] transition-colors duration-300 group-hover:text-white"
                      />

                    </div>

                    {/* Stars */}

                    <div className="flex gap-1">

                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={15}
                          fill="currentColor"
                          className="text-[#F7941D]"
                        />
                      ))}

                    </div>

                  </div>

                  {/* Quote */}

                  <p className="mt-6 flex-1 text-sm leading-7 text-slate-600">
                    "{testimonial.quote}"
                  </p>

                  {/* Service */}

                  <div className="mt-6 border-t border-slate-100 pt-5">

                    <p className="text-sm font-bold text-[#0B3C5D]">
                      {testimonial.service}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {testimonial.category}
                    </p>

                  </div>

                </article>
              ))}

            </div>

          </div>
        </section>

        {/* =========================
            WHY CLIENTS CHOOSE US
        ========================= */}

        <section className="bg-white py-16 sm:py-20 lg:py-24">

          <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8">

            <div className="mx-auto mb-10 max-w-3xl text-center">

              <div className="mb-4 flex items-center justify-center gap-2">

                <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

                <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
                  Our Commitment
                </span>

              </div>

              <h2 className="text-3xl font-extrabold text-[#0B3C5D] sm:text-4xl">
                What You Can{" "}
                <span className="text-[#00AEEF]">
                  Expect From Us
                </span>
              </h2>

            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                >

                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-[#00AEEF]"
                  />

                  <span className="text-sm font-semibold text-[#0B3C5D]">
                    {highlight}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* =========================
            CTA
        ========================= */}

      

      </main>

      <Footer />
    </>
  );
}