import { 
  Hero,
  Features,
  About,
  Benefits,
  RegistrationRole,
  Cta,
  Faqs,
 } from "../components/sections";

export default function Page() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <Benefits />
      <RegistrationRole />
      <Cta />
      <Faqs />
    </main>
  );
}
