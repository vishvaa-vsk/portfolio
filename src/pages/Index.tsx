import { useEffect, lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import Hero from "@/components/Hero";

// Lazy loading sections that are below the fold (below the fold)
const About = lazy(() => import("@/components/About"));
const Experience = lazy(() => import("@/components/Experience"));
const Projects = lazy(() => import("@/components/Projects"));
const BeyondEngineering = lazy(() => import("@/components/BeyondEngineering"));
const Recognition = lazy(() => import("@/components/Recognition"));
const TechStack = lazy(() => import("@/components/TechStack"));
const Footer = lazy(() => import("@/components/Footer"));
const StarBackground = lazy(() => import("@/components/StarBackground"));

const Index = () => {
  useEffect(() => {
    // Ensure scroll resets to top on page reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative bg-white dark:bg-[#050505] text-foreground transition-colors duration-500">
      <Suspense fallback={<div className="fixed inset-0 bg-[#050505] pointer-events-none" />}>
        <StarBackground />
      </Suspense>
      {/* Noise Texture - pointer-events-none for performance */}
      <div
        className="fixed inset-0 z-[1] opacity-5 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("/noise.svg")' }}
      />

      <Navbar />
      <BottomNav />

      <main className="relative z-10">
        {/* Hero is critical (LCP), so we keep its load synchronous */}
        <Hero />

        {/* Suspense groups secondary section loads */}
        <Suspense fallback={null}>
          <About />
          <Experience />
          <TechStack />
          <Projects />
          <BeyondEngineering />
          <Recognition />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
