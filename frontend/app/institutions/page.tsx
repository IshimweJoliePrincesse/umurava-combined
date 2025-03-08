import Footer from "./footer";
import Header from "./Header";
import Intro from "./Intro";
import Offerings from "./Offerings";
import PartnersMarquee from "./ClientsMarquee";
import IntegrationSection from "./Integration";
import CTASection from "./banner";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Offerings />

      <PartnersMarquee />
      <IntegrationSection />
      <CTASection />
      <Footer />
    </>
  );
}
