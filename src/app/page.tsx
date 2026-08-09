import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Services from "./components/home/Services";
import Industries from "./components/home/Industries";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Testimonials from "./components/home/Testimonials";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <WhyChooseUs />
        <Testimonials />
      </main>

      <Footer />
    </>
  );
}