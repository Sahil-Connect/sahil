import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { GridContainer } from "../shared";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Partner with Us", href: "/partners" },
  // { name: "Blog", href: "/blog" },
];
const companyLinks = [
  { name: "Contact Us", href: "/contact" },
  { name: "FAQs", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

export const Footer = () => {
  return (
    <footer className="mt-28 bg-gray-50">
      <div className="footerTop py-4 border-t border-b">
        <GridContainer className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h3 className="text-2xl font-inter font-semibold lg:text-3xl">
            Let’s build something great together.
          </h3>
          <div>
            <Link 
              href="/contact"
              className="btn btn-primary font-medium text-white rounded-full" 
            >
              Contact Us
            </Link>
          </div>
        </GridContainer>
      </div>
      <div className="footerContent mt-8 mb-20">
        <GridContainer className="grid gap-y-8">
          <div className="grid gap-y-8 justify-between md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(4,max-content)]">
            <div>
              <Link href="/">
                <Image
                  src={logo}
                  alt={"Sahil logo"}
                  className="w-20 max-w-full object-contain"
                />
              </Link>
              <p className="max-w-[50ch] mb-3">Empowering businesses.</p>
              <h3 className="mt-8 text-base font-medium">Follow us on:</h3>
              <ul className="flex gap-4 mt-3">
                <li>
                  <a
                    href="https://www.linkedin.com/company/sahil-app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24"
                      className="text-primary"
                    >
                      <path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/sahilhq/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg"  
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24"
                      className="text-primary"
                    >
                      <path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/sahil.connect/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24"
                      className="text-primary"
                    >
                      <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold mb-5 lg:text-lg">Pages</h3>
              <ul className="flex flex-col gap-y-3">
                {quickLinks.map(({ name, href }) => {
                  return (
                    <li key={name}>
                      <Link
                        href={href}
                        className="ps-0 p-1 text-base text-gray-600 transition duration-300 hover:text-primary"
                      >
                        {name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold mb-5 lg:text-lg">Resources</h3>
              <ul className="flex flex-col gap-y-3">
                {companyLinks.map(({ name, href }) => {
                  return (
                    <li key={name}>
                      <Link
                        href={href}
                        className="ps-0 p-1 text-base text-gray-600 transition duration-300 hover:text-primary"
                      >
                        {name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold mb-5 lg:text-lg">Contact</h3>
              <ul className="flex flex-col gap-y-3">
                <li>
                  <p className="ps-0 p-1 text-base text-gray-600 transition duration-300 hover:text-primary">
                    Norrsken House Kigali <br/> 1 KN 78 St, Kigali-Rwanda
                  </p>
                </li>
                <li>
                  <a
                    href="mailto:sahil.business@gmail.com"
                    className="ps-0 p-1 text-base text-gray-600 transition duration-300 hover:text-primary"
                  >
                    sahil.business@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+250790336525"
                    className="ps-0 p-1 text-base text-gray-600 transition duration-300 hover:text-primary"
                  >
                    +250-790-336-525
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </GridContainer>
      </div>
      <div className="footerBottom py-6 border-t">
        <div className="flex flex-col text-center text-base">
          <p className="font-medium text-sm">
            &copy; 2024 Sahil – Company Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
