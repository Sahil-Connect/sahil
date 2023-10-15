// import { Button, Header } from "ui";

import Navbar from "../components/UI/Navbar";
import Hero from "../components/Sections/Hero";
import Services from "../components/Sections/Services";
import Features from "../components/Sections/Features";
import About from "../components/Sections/About";
import Cta from "../components/Sections/Cta";
import Faqs from "../components/Sections/Faqs";
import Footer from "../components/UI/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
        <main>
          <Hero />
          <Services />
          <Features />
          <About />
          <Cta />
          <Faqs />
        </main>
      <Footer />
    </>
  );
}
