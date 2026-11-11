import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import PopularLinks from "./components/PopularLinks";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />
      <Hero />
      <Stats />
      <PopularLinks />
      <Features />
      <Pricing />
      <Testimonials />
      <WhyUs />
      <Footer />
    </div>
  );
}
