import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

interface ShortCardProps {
  subtitle?: string;
  title?: string;
  description?: string;
  className?: string;
  image?: StaticImageData;
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
