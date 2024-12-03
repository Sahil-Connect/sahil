import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

interface ShortCardProps {
  subtitle?: string;
  title?: string;
  description?: string;
  className?: string;
  image?: StaticImageData;
}

interface PartnerCardProps {
  title?: string;
  description?: string;
  link?: string;
  className?: string;
}

export const Card = ({ title, subtitle, description, className, image }: ShortCardProps) => {
  const defaultClass="mt-8 flex w-auto pt-0 flex-col items-start justify-center rounded-lg lg:mt-0";
  const mergedClass=twMerge(defaultClass, className);
  return (
    <div className={mergedClass}>
      <div className="p-8">
        <p className="text-sm mb-4">{subtitle}</p>
        <h3 className="text-3xl font-semibold">{title}</h3>
        <div className="my-2 border-b border-b-gray-300" />
        <p className="text-sm leading-none">
          {description}
        </p>
        {image && (
          <Image
            src={image}
            alt={"about-image"}
            loading="lazy"
            className="mt-8 rounded-lg object-cover"
          />
        )}
      </div>
    </div>
  );
};

export const PartnerCard = ({ title, description, link, className }: PartnerCardProps) => {
  const defaultClass="h-full p-8 border border-zinc-200 rounded-lg bg-gray-50";
  const mergedClass=twMerge(defaultClass, className);
  return (
    <div className={mergedClass}>
      <div className="h-full flex flex-col items-start justify-between gap-8">
        <div className="flex flex-col flex-1 items-start justify-end">
          <h3 className="text-xl font-bold mb-4 pb-0 md:text-2xl">{title}</h3>
          <p className="text-sm text-zinc-500 pt-0 mb-5 mt-0">
            {description} 
          </p>
          {link && (
            <Link
              href={link}
              className="group px-6 btn border border-gray-200 bg-white text-zinc-900 font-medium rounded-full hover:bg-white hover:text-zinc-900"
            >
              Continue
              <span className="relative group flex justify-center items-center rounded-full">
                <HiOutlineArrowUpRight className="group-hover:rotate-45 transition" />
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export const PartnerTitle = ({ title, description }: PartnerCardProps) => {
  return (
    <div className="my-8">
      <h3 className="text-xl font-bold mb-4 pb-0 md:text-2xl">{title}</h3>
      <p className="text-sm text-zinc-500 pt-0 mb-5 mt-0">
        {description} 
      </p>
    </div>
  );
};
