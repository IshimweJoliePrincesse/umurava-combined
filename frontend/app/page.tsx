import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import MetricsSection from "./_components/metrics";
import SkillsChallenges from "./_components/Skills";
import ChallengePage from "./_components/challenges";
import SkillsBenefits from "./_components/skills-benefit";
import Footer from "./_components/footer";
import TestimonialsSection from "./_components/testimonials";
import GettingStarted from "./_components/GettingStarted";
import CareerSection from "./_components/CareerSection";
import SaasCarousel from "./_components/Projects";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <MetricsSection />
      <SkillsChallenges />
      <SaasCarousel />
      <ChallengePage />
      <SkillsBenefits />
      <TestimonialsSection />
      <GettingStarted />
      <CareerSection />
      <br />
      <Footer />
    </>
  );
}
