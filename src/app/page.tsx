import HeroSection from "@/components/HeroSection";
import MenuHighlights from "@/components/MenuHighlights";
import FullMenu from "@/components/FullMenu";
import AboutSection from "@/components/AboutSection";
import LocationAndReviews from "@/components/LocationAndReviews";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-locais-900 overflow-x-hidden text-locais-100">
      <Navbar />
      <div id="home"><HeroSection /></div>
      <div id="menu">
        <MenuHighlights />
        <FullMenu />
      </div>
      <div id="about"><AboutSection /></div>
      <div id="location"><LocationAndReviews /></div>
      <Footer />
    </main>
  );
}
