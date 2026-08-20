import Link from "next/link";
import { Quote, Star, ArrowRight } from "lucide-react";

const testimonials = [
  {
    text: "Excellent networking and cloud dialer services. Their support team is always responsive and helpful.",
    name: "Call Center Manager",
    role: "Call Center",
  },
  {
    text: "Professional website development with timely delivery. Highly recommended for businesses.",
    name: "Business Owner",
    role: "Business Client",
  },
  {
    text: "Reliable CCTV and biometric installation. Very satisfied with their work and support.",
    name: "Corporate Client",
    role: "Corporate Business",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#f8fafc] py-20 sm:py-24 lg:py-28"
    >
      {/* =========================
          BACKGROUND DECORATION
      ========================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#00AEEF]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F7941D]/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">

        {/* =========================
            SECTION HEADER
        ========================= */}

        <div className="mx-auto max-w-3xl text-center">

          {/* Label */}
          <div className="mb-5 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#F7941D]" />

            <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F7941D]">
              Testimonials
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold leading-tight text-[#0B3C5D] sm:text-4xl lg:text-[44px]">
            What Our{" "}
            <span className="text-[#00AEEF]">
              Clients Say
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Trusted by businesses for reliable IT infrastructure,
            communication systems, software and professional technical
            support.
          </p>

          {/* Small Accent */}
          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <span className="h-1 w-20 rounded-full bg-[#00AEEF]" />
            <span className="h-2 w-2 rounded-full bg-[#00AEEF]" />
          </div>

        </div>

        {/* =========================
            TESTIMONIAL CARDS
        ========================= */}

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#00AEEF]/30 hover:shadow-xl sm:p-7"
            >

              {/* Quote Icon */}
              <div className="absolute right-5 top-4 text-[#00AEEF]/15">
                <Quote
                  size={58}
                  fill="currentColor"
                />
              </div>

              {/* Stars */}
              <div className="relative flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    fill="#F7941D"
                    className="text-[#F7941D]"
                  />
                ))}
              </div>

              {/* Testimonial */}
              <p className="relative mt-6 text-sm leading-7 text-slate-600 sm:text-[15px]">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Divider */}
              <div className="my-6 h-px bg-slate-100" />

              {/* Client */}
              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#00AEEF] to-[#0B3C5D] shadow-sm">
                  <span className="text-sm font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#0B3C5D]">
                    {testimonial.name}
                  </h3>

                  <p className="mt-0.5 text-xs text-slate-500">
                    {testimonial.role}
                  </p>
                </div>

              </div>

              {/* Bottom Accent */}
              <div
                className={`absolute bottom-0 left-0 h-1 w-full ${
                  index === 1
                    ? "bg-[#F7941D]"
                    : "bg-[#00AEEF]"
                }`}
              />

            </div>
          ))}

        </div>

        {/* =========================
            VIEW MORE
        ========================= */}

        <div className="mt-9 flex justify-center">

          <Link
            href="/testimonials"
            className="group inline-flex items-center gap-2 rounded-lg border border-[#0B3C5D] bg-white px-6 py-3 text-sm font-bold text-[#0B3C5D] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B3C5D] hover:text-white hover:shadow-lg"
          >
            View More

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>

      </div>
    </section>
  );
}