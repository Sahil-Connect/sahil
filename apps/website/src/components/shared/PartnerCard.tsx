import Link from "next/link";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

interface PartnerCardProps {
  title: string;
  description: string;
  linkHref: string;
  colorScheme?: 'purple' | 'blue' | 'neutral';
}

interface PartnerTitleProps {
  title: string;
  description: string;
}

export const PartnerCard = ({ 
  title,
  description,
  linkHref,
  colorScheme = 'purple'
}: PartnerCardProps) => {
  const colorVariants = {
    purple: {
      hover: 'hover:bg-purple-50 hover:border-purple-300',
      titleHover: 'group-hover:text-purple-700',
      descHover: 'group-hover:text-purple-400',
      btnHover: 'group-hover:bg-purple-600',
      bgColors: ['bg-purple-200', 'bg-purple-300']
    },
    blue: {
      hover: 'hover:bg-blue-50 hover:border-blue-300',
      titleHover: 'group-hover:text-blue-700',
      descHover: 'group-hover:text-blue-400',
      btnHover: 'group-hover:bg-blue-600',
      bgColors: ['bg-blue-200', 'bg-blue-300']
    },
    neutral: {
      hover: 'hover:bg-neutral-50 hover:border-neutral-300',
      titleHover: 'group-hover:text-neutral-700',
      descHover: 'group-hover:text-neutral-400',
      btnHover: 'group-hover:bg-neutral-600',
      bgColors: ['bg-neutral-200', 'bg-neutral-300']
    }
  };

  const colors = colorVariants[colorScheme];

  return (
    <div 
      className={`
        group relative h-full flex flex-col items-start justify-between gap-8 p-8 border border-zinc-200 
        rounded-lg bg-gray-50 overflow-hidden transition duration-300 ease-in-out 
        ${colors.hover}
      `}
    >
      <div className="flex flex-col flex-1 items-start justify-end">
        <h3 
          className={`
            text-xl font-bold mb-4 pb-0 md:text-2xl 
            ${colors.titleHover}
          `}
        >
          {title}
        </h3>
        <p 
          className={`
            text-sm text-zinc-500 pt-0 mb-5 mt-0 
            ${colors.descHover}
          `}
        >
          {description}
        </p>
        <Link
          href={linkHref}
          className={`
            group px-6 btn border border-gray-200 
            bg-white text-zinc-900 font-medium 
            rounded-full ease-in-out 
            ${colors.btnHover} group-hover:text-white
          `}
        >
          Continue
          <span className="relative group flex justify-center items-center rounded-full">
            <HiOutlineArrowUpRight className="group-hover:rotate-45 transition" />
          </span>
        </Link>
      </div>
      {colors.bgColors.map((bgColor, index) => (
        <div
          key={bgColor}
          className={`
            hidden absolute w-${index === 0 ? '20' : '16'} 
            h-${index === 0 ? '20' : '16'} bottom-0 right-0 
            ${bgColor} rounded-tl-full rounded-tr-none 
            z-0 delay-${index === 0 ? '100' : '200'} 
            ease-in-out group-hover:block
          `}
        />
      ))}
    </div>
  );
};

export const PartnerTitle = ({ title, description }: PartnerTitleProps) => {
  return (
    <div className="my-8">
      <h3 className="text-xl font-bold mb-4 pb-0 md:text-2xl">{title}</h3>
      <p className="text-sm text-zinc-500 pt-0 mb-5 mt-0">
        {description} 
      </p>
    </div>
  );
};
