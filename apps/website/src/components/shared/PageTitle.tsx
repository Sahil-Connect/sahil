import { GridContainer } from './GridContainer';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  description: string;
}

export const PageTitle = ({ title, subtitle, description }: PageTitleProps) => {
  return (
    <section className="py-10 md:py-12">
      <GridContainer>
        <div className="flex flex-col items-start gap-y-4 md:flex-row md:justify-between md:items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2 md:mb-0 md:text-4xl">{title}</h1>
            <div>{subtitle}</div>
          </div>
          <p className="hidden md:block md:max-w-md md:text-justify">
            {description}
          </p>
        </div>
      </GridContainer>
    </section>
  )
}
