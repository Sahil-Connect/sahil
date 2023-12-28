import { 
  SectionWrapper, 
  GridContainer 
} from '@/components/shared';

export const Cta = () => {
  return (
    <SectionWrapper>
      <GridContainer>
        <div className="flex flex-col items-start gap-y-10 bg-secondary rounded-lg py-8 px-6 md:py-12 md:px-10 md:items-center lg:py-14 lg:px-12 lg:gap-x-28 lg:flex-row">
          cta
        </div>
      </GridContainer>
    </SectionWrapper>
  )
}
