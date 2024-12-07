import Link from "next/link";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

interface SectionTitleProps {
  subtitle?: string;
  title?: string;
  link?: string;
  textCentered?: boolean;
  textAndLink?: boolean;
}

export const SectionTitle = ({ subtitle, title, link, textCentered, textAndLink }: SectionTitleProps) => {
  return (
    <>
      {textAndLink && (
      <div className="mb-8 md:mb-10 lg:mb-14">
        <div className="text-base text-secondary font-medium">{subtitle}</div>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold md:text-4xl">
            <span className="yellow-line">{title}</span>
          </h2>
          {link && (
            <Link
              href={link}
              className="group hidden px-6 btn border border-gray-200 bg-white text-zinc-900 font-medium rounded-full hover:bg-white hover:text-zinc-900 md:inline-flex"
            >
              View More
              <span className="relative group flex justify-center items-center rounded-full">
                <HiOutlineArrowUpRight className="group-hover:rotate-45 transition" />
              </span>
            </Link>
          )}
        </div>
      </div>
      )}
      {textCentered && (
        <div className="mb-12 flex flex-col items-center justify-center">
          <div className="font-medium -mb-1 text-secondary">
            <span>{subtitle}</span>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold md:text-3xl">
              <span className="yellow-line">{title}</span>
            </h3>
          </div>
        </div>
      )}
    </>
  );
};
