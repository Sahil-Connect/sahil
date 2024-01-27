import Link from "next/link";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  link?: string;
}

export const SectionTitle = ({ subtitle, title, link }: SectionTitleProps) => {
  return (
    <div className="mb-8 md:mb-10 lg:mb-14">
      <div className="mb-2 text-base">{subtitle}</div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold md:text-4xl">
          <span className="yellow-line">{title}</span>
        </h2>
        {link && (
          <Link
            href={link}
            className="hidden md:inline-flex md:items-center md:gap-x-1"
          >
            View More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};
