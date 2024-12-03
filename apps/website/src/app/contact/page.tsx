import { 
  GridContainer, 
  PageTitle, 
} from "@/components/shared";
import { Cta, Faqs } from "@/components/segments";
import { HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";

export const metadata = {
  title: "Contact Us - Sahil App",
  description: "We’re here to help and would love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      <PageTitle
        subtitle="Contact Us"
        title="Get in Touch"
        description="Have questions? We'd love to hear from you. Get in touch with us."
      />
      <GridContainer>
        <section className="pt-16 pb-8">
          <div className="w-full">
            <div>
              <h3 className="text-xl font-semibold mb-8 lg:text-2xl">
                <span className="yellow-line">Reach Us</span>
              </h3>
              <p className="mb-2 text-gray-500 lg:mb-12">
                If you have any questions or need assistance, feel free to reach out to us through our contact details below.
              </p>
              <div className="mt-12 grid lg:grid-cols-3 gap-3">
                <div className="group relative px-5 py-10 w-full flex flex-col gap-2 justify-between items-center border rounded-lg text-center overflow-hidden transition duration-300 ease-in hover:bg-green-50 hover:border-green-300">
                  <div className="flex items-center justify-center rounded-full">
                    <span className="text-3xl group-hover:text-green-700">
                      <HiEnvelope />
                    </span>
                  </div>
                  <div className="z-50">
                    <h3 className="text-lg font-bold group-hover:text-green-700">Drop us a line</h3>
                    <a href="mailto:sahil.business@gmail.com" className="text-gray-500 group-hover:text-green-400">sahil.business@gmail.com</a>
                  </div>
                  <div className="hidden absolute w-20 h-20 bottom-0 right-0 bg-green-200 rounded-tl-full rounded-tr-none z-0 delay-100 ease-in-out group-hover:block"></div>
                  <div className="hidden absolute w-16 h-16 bottom-0 right-0 bg-green-300 rounded-tl-full rounded-tr-none z-0 delay-200 ease-in-out group-hover:block"></div>
                </div>

                <div className="group relative px-5 py-10 w-full flex flex-col gap-2 justify-between items-center border rounded-lg text-center overflow-hidden transition duration-300 ease-in hover:bg-blue-50 hover:border-blue-300">
                  <div className="flex items-center justify-center rounded-full">
                    <span className="text-3xl group-hover:text-blue-700">
                      <HiMapPin />
                    </span>
                  </div>
                  <div className="z-50">
                    <h3 className="text-lg font-bold group-hover:text-blue-700">Our Head Office</h3>
                    <p className="text-gray-500 group-hover:text-blue-400">Norrsken House Kigali <br/> 1 KN 78 St, Kigali - Rwanda</p>
                  </div>
                  <div className="hidden absolute w-20 h-20 bottom-0 right-0 bg-blue-200 rounded-tl-full rounded-tr-none z-0 delay-100 ease-in-out group-hover:block"></div>
                  <div className="hidden absolute w-16 h-16 bottom-0 right-0 bg-blue-300 rounded-tl-full rounded-tr-none z-0 delay-200 ease-in-out group-hover:block"></div>
                </div>

                <div className="group relative px-5 py-10 w-full flex flex-col gap-2 justify-between items-center border rounded-lg text-center overflow-hidden transition duration-300 ease-in hover:bg-purple-50 hover:border-purple-300">
                  <div className="flex items-center justify-center rounded-full">
                    <span className="text-3xl group-hover:text-purple-700">
                      <HiPhone />
                    </span>
                  </div>
                  <div className="z-50">
                    <h3 className="text-lg font-bold group-hover:text-purple-700">Book a Call</h3>
                    <a href="tel:+250790336525" className="text-gray-500 group-hover:text-purple-400">+250-790-336-525</a>
                  </div>
                  <div className="hidden absolute w-20 h-20 bottom-0 right-0 bg-purple-200 rounded-tl-full rounded-tr-none z-0 delay-100 ease-in-out group-hover:block"></div>
                  <div className="hidden absolute w-16 h-16 bottom-0 right-0 bg-purple-300 rounded-tl-full rounded-tr-none z-0 delay-200 ease-in-out group-hover:block"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </GridContainer>
      <Faqs />
      <Cta />
    </>
  );
}
