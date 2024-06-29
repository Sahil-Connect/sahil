import { CustomContainer } from "./CustomContainer";
import Link from "next/link";
import Image from "next/image";

interface StatusPageProps {
  statusCode: string;
  message: string;
  desc: string;
  imgSource: any;
  link?: string;
  attribution?: string;
}

export const StatusPage = ({
  statusCode,
  message,
  desc,
  imgSource,
  link,
  attribution,
}: StatusPageProps) => {
  return (
    <section className="grid h-screen py-16 md:py-20">
      <CustomContainer className="grid content-center gap-y-9 lg:gap-x-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h3 className="text-lg">{statusCode}</h3>
          <h1 className="text-2xl tracking-tighter my-8 md:text-3xl lg:text-5xl">
            {message}
          </h1>
          <p className="text-base mb-8 max-w-[50ch]">{desc}</p>
          <Link href="/" className="btn btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21 11H6.414l5.293-5.293l-1.414-1.414L2.586 12l7.707 7.707l1.414-1.414L6.414 13H21z"
              />
            </svg>
            Go back Home
          </Link>
        </div>
        <div className="justify-self-center lg:justify-self-end">
          <Image src={imgSource} alt="404 image" className="" />
        </div>
        <div className="my-8">
          Illustration attribution: {""}
          <a href={link} target="_blank" className="font-semibold">
            {attribution}
          </a>
        </div>
      </CustomContainer>
    </section>
  );
};
