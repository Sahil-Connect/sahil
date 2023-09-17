// import { Button, Header } from "ui";

import Navbar from "../components/UI/Navbar";
import Hero from "../components/Sections/Hero";
import Services from "../components/Sections/Services";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
    </>
  );
}
