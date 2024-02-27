import { 
  GridContainer,
  SectionTitle
} from "../shared";
import Image from "next/image";
import Link from "next/link";
import RoundIcon from "../../../public/round.svg";
import Mockup from "../../../public/empty.svg";
import MockupMain from "../../../public/agent.png";

export const Partners = () => {
  return (
    <section className="relative w-full py-64 pt-16 bg-hero bg-zinc-50 bg-no-repeat bg-top overflow-hidden">
      <GridContainer className="flex flex-col content-center items-center">
      <SectionTitle subtitle="Partnerships" title="Meet Our Partners" />
        <div className="relative flex items-center w-full max-w-3xl mx-auto">
          <Image
              src="https://storage.googleapis.com/sahil-public-assets/sahil-website/momo-icon.png"
              width="600" height="600"
              alt={"mockup-left"}
              loading="eager"
              className="w-38 relative top-10 lg:w-48"
          />
          <Image
              src="https://storage.googleapis.com/sahil-public-assets/sahil-website/norrsken-logo.webp"
              width="600" height="600"
              alt={"mockup-left"}
              loading="eager"
              className="w-38 mx-9 relative top-10 lg:w-48"
          />
        </div>
      </GridContainer>
    </section>
  );
};
