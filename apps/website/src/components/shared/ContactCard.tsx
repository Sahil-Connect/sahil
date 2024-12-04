import { IconType } from 'react-icons';

interface ContactCardProps {
  icon: IconType;
  title: string;
  content: string | React.ReactNode;
  linkHref?: string;
  colorScheme?: 'green' | 'blue' | 'purple';
}

export const ContactCard = ({ 
  icon: Icon,
  title,
  content,
  linkHref,
  colorScheme = 'green'
}: ContactCardProps) => {
  const colorVariants = {
    green: {
      hover: 'hover:bg-green-50 hover:border-green-300',
      iconHover: 'group-hover:text-green-700',
      titleHover: 'group-hover:text-green-700',
      contentHover: 'group-hover:text-green-700',
      bgColors: ['bg-green-200', 'bg-green-300']
    },
    blue: {
      hover: 'hover:bg-blue-50 hover:border-blue-300',
      iconHover: 'group-hover:text-blue-700',
      titleHover: 'group-hover:text-blue-700',
      contentHover: 'group-hover:text-blue-400',
      bgColors: ['bg-blue-200', 'bg-blue-300']
    },
    purple: {
      hover: 'hover:bg-purple-50 hover:border-purple-300',
      iconHover: 'group-hover:text-purple-700',
      titleHover: 'group-hover:text-purple-700',
      contentHover: 'group-hover:text-purple-400',
      bgColors: ['bg-purple-200', 'bg-purple-300']
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
