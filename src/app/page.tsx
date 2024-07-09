import { FeatureSection } from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpComingWebinar from "@/components/UpComingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] "
    >
      <HeroSection />
      <FeatureSection />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpComingWebinar />
      <Instructors />
      <Footer />
    </main>
  );
}
