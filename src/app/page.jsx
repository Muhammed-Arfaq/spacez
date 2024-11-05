import Footer from "@/components/Footer";
import Banner from "@/components/Home/Banner";
import CaseStudies from "@/components/Home/CaseStudies";
import Comparison from "@/components/Home/Comparison";
import Investment from "@/components/Home/Investment";
import Management from "@/components/Home/Management";
import Pricing from "@/components/Home/Pricing";
import Testimonials from "@/components/Home/Testimonials";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      {/* Navbar with fixed positioning */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        <Navbar />
      </div>

      <main className="pt-16">
        <Banner />
        <CaseStudies />
        <Comparison />
        <Investment />
        <Management />
        <Pricing />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
