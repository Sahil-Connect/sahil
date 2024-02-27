import {
  Hero,
  Features,
  About,
  Benefits,
  RegistrationRole,
  Partners,
  Cta,
  Faqs,
} from "../components/segments";

export default function Page() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <Benefits />
      <RegistrationRole />
      {/* <Partners /> */}
      <Cta />
      <Faqs />
    </main>
  );
}
