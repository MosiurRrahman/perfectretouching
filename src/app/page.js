import About from "@/components/About";
import Banner from "@/components/Banner";
import BlogSection from "@/components/BlogSection";
import ClientLogo from "@/components/ClientLogo";
import Footer from "@/components/Footer";
import FreeTrail from "@/components/FreeTrail";
import Header from "@/components/Header";
import PricingPlanSection from "@/components/PricingPlanSection";
import ServiceSection from "@/components/ServiceSection";
import TestimonialSection from "@/components/TestimonialSection";
import WorkProcessSection from "@/components/WorkProcessSection";




export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <ClientLogo />
      <About />
      <FreeTrail />
      <PricingPlanSection />
      <TestimonialSection />
      <WorkProcessSection />
      <ServiceSection />
      <BlogSection />
      <Footer />

    </>
  );
}
