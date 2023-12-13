import Navbar from "../components/UI/Navbar";
import Hero from "../components/Sections/Hero";
import Services from "../components/Sections/Services";
import Features from "../components/Sections/Features";
import About from "../components/Sections/About";
import Cta from "../components/Sections/Cta";
import Faqs from "../components/Sections/Faqs";
import Footer from "../components/UI/Footer";
import ContactUs from "../components/Sections/Contact";

import { featuresData } from '../data/constants';

export default function Page() {
  return (
    <>
      <Navbar />
        <main>
          <Hero />
          <Services />
          <Features featuresData={featuresData} />
          <About />
          <Cta />
          <Faqs />
          <ContactUs />
        </main>
      <Footer />
    </>
  );
}
