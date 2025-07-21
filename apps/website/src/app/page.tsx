import {
  Hero,
  TrustedBy,
  Problem,
  Features,
  About,
  Benefits,
  Cta,
  Faqs,
  ParterWithUs,
  SahilBox,
} from "../components/segments";

export default function Page() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <Problem />
      <Features />
      <SahilBox />
      <About />
      <Benefits />
      <ParterWithUs />
      <Cta />
      <Faqs />
    </main>
  );
}
