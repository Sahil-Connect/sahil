import {
  Hero,
  Features,
  About,
  Benefits,
  Cta,
  Faqs,
  ParterWithUs,
} from "../components/segments";

export default function Page() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <Benefits />
      <ParterWithUs />
      <Cta />
      <Faqs />
    </main>
  );
}
