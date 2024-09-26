import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { GridContainer } from "../shared";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Blog", href: "/blog" },
];
const companyLinks = [
  { name: "Support Center", href: "/contact" },
  { name: "Contact Us", href: "/contact" },
  { name: "FAQs", href: "/about" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

export const Footer = () => {
  return (
    <footer className="pt-12 pb-8">
      <GridContainer className="grid gap-y-8">
        <div className="grid gap-y-8 justify-between pb-12 border-b border-b-solid border-b-gray-200 md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(4,max-content)]">
          <div>
            <Link href="/">
              <Image
                src={logo}
                alt={"Sahil logo"}
                className="w-20 max-w-full object-contain"
              />
            </Link>
            <p className="max-w-[50ch] mb-3">Empowering businesses.</p>
            <h3 className="text-lg">Follow us on:</h3>
            <ul className="flex gap-4 mt-3">
              <li>
                <a
                  href="https://www.linkedin.com/company/sahil-app"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 flex items-center justify-center bg-primary rounded-full"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    version="1.1"  
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24"
                    >
                      <path 
                        fill="#FFFFFF" 
                        d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" 
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 flex items-center justify-center bg-primary rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 896 1664"
                  >
                    <path
                      fill="#ffffff"
                      d="M895 12v264H738q-86 0-116 36t-30 108v189h293l-39 296H592v759H286V905H31V609h255V391q0-186 104-288.5T667 0q147 0 228 12z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 flex items-center justify-center bg-primary rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 1600 1280"
                  >
                    <path
                      fill="#ffffff"
                      d="M1588 152q-67 98-162 167q1 14 1 42q0 130-38 259.5T1273.5 869T1089 1079.5t-258 146t-323 54.5q-271 0-496-145q35 4 78 4q225 0 401-138q-105-2-188-64.5T189 777q33 5 61 5q43 0 85-11q-112-23-185.5-111.5T76 454v-4q68 38 146 41q-66-44-105-115T78 222q0-88 44-163q121 149 294.5 238.5T788 397q-8-38-8-74q0-134 94.5-228.5T1103 0q140 0 236 102q109-21 205-78q-37 115-142 178q93-10 186-50z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 flex items-center justify-center bg-primary rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 1536 1536"
                  >
                    <path
                      fill="#ffffff"
                      d="M1024 768q0-106-75-181t-181-75t-181 75t-75 181t75 181t181 75t181-75t75-181zm138 0q0 164-115 279t-279 115t-279-115t-115-279t115-279t279-115t279 115t115 279zm108-410q0 38-27 65t-65 27t-65-27t-27-65t27-65t65-27t65 27t27 65zM768 138q-7 0-76.5-.5t-105.5 0t-96.5 3t-103 10T315 169q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103t-3 96.5t0 105.5t.5 76.5t-.5 76.5t0 105.5t3 96.5t10 103T169 1221q20 50 58 88t88 58q29 11 71.5 18.5t103 10t96.5 3t105.5 0t76.5-.5t76.5.5t105.5 0t96.5-3t103-10t71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103t3-96.5t0-105.5t-.5-76.5t.5-76.5t0-105.5t-3-96.5t-10-103T1367 315q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10t-96.5-3t-105.5 0t-76.5.5zm768 630q0 229-5 317q-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124T5 1085q-5-88-5-317t5-317q10-208 124-322T451 5q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold mb-2 lg:text-xl">Quick Links</h3>
            <ul className="flex flex-col gap-y-3">
              {quickLinks.map(({ name, href }) => {
                return (
                  <li key={name}>
                    <Link
                      href={href}
                      className="p-1 text-base transition duration-300 hover:text-primary"
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold mb-2 lg:text-xl">Company</h3>
            <ul className="flex flex-col gap-y-3">
              {companyLinks.map(({ name, href }) => {
                return (
                  <li key={name}>
                    <Link
                      href={href}
                      className="p-1 text-base transition duration-300 hover:text-primary"
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold mb-2 lg:text-xl">
              Contact Info
            </h3>
            <ul className="flex flex-col gap-y-3">
              <li>
                <p className="p-1 text-base transition duration-300 hover:text-primary">
                Norrsken House Kigali <br/> 1 KN 78 St, Kigali-Rwanda
                </p>
              </li>
              <li>
                <a
                  href="mailto:sahil.business@gmail.com"
                  className="p-1 text-base transition duration-300 hover:text-primary"
                >
                  sahil.business@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+211912000000"
                  className="p-1 text-base transition duration-300 hover:text-primary"
                >
                  +250-790-336-525
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative flex flex-col text-center text-base pt-8">
          <p className="font-medium">
            &copy; 2024 Sahil – Company Ltd. All Rights Reserved.
          </p>
        </div>
      </GridContainer>
    </footer>
  );
};
