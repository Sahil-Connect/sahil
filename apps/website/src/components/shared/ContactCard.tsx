import { IconType } from 'react-icons';

export interface ContactCardProps {
  icon: IconType;
  title: string;
  content: string | React.ReactNode;
  linkHref?: string;
  colorScheme?: 'neutral' | 'gray' | 'slate';
}

export const ContactCard = ({ 
  icon: Icon,
  title,
  content,
  linkHref,
  colorScheme = 'neutral'
}: ContactCardProps) => {
  const colorVariants = {
    neutral: {
      hover: 'hover:bg-neutral-50 hover:border-neutral-300',
      iconHover: 'group-hover:text-neutral-700',
      titleHover: 'group-hover:text-neutral-700',
      contentHover: 'group-hover:text-neutral-700',
      bgColors: ['bg-neutral-200', 'bg-neutral-300']
    },
    gray: {
      hover: 'hover:bg-gray-50 hover:border-gray-300',
      iconHover: 'group-hover:text-gray-700',
      titleHover: 'group-hover:text-gray-700',
      contentHover: 'group-hover:text-gray-400',
      bgColors: ['bg-gray-200', 'bg-gray-300']
    },
    slate: {
      hover: 'hover:bg-slate-50 hover:border-slate-300',
      iconHover: 'group-hover:text-slate-700',
      titleHover: 'group-hover:text-slate-700',
      contentHover: 'group-hover:text-slate-400',
      bgColors: ['bg-slate-200', 'bg-slate-300']
    }
  };

  const colors = colorVariants[colorScheme];

  const renderContent = () => {
    if (typeof content === 'string' && linkHref) {
      return (
        <a 
          href={linkHref} 
          className={`text-gray-500 ${colors.contentHover}`}
        >
          {content}
        </a>
      );
    }
    return (
      <p className={`text-gray-500 ${colors.contentHover}`}>
        {content}
      </p>
    );
  };

  return (
    <div 
      className={`
        group relative px-5 py-10 w-full flex flex-col gap-2 justify-between items-center border rounded-lg 
        text-center overflow-hidden transition duration-300 
        ease-in-out ${colors.hover}
      `}
    >
      <div className="flex items-center justify-center rounded-full">
        <span className={`text-3xl ${colors.iconHover}`}>
          <Icon />
        </span>
      </div>
      <div className="z-50">
        <h3 className={`text-lg font-bold ${colors.titleHover}`}>
          {title}
        </h3>
        {renderContent()}
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
