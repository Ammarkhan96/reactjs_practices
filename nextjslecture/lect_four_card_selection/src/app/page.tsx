import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen  antialiased bg-grid-white/[0.02]">
      <h1 className="text-center text-2xl">The Music Time</h1>
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}