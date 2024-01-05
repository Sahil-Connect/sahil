import { 
  ComingSoon, 
  GridContainer, 
  PageTitle, 
} from '@/components/shared'

export const metadata = {
  title: 'About Us - Sahil App',
  description: 'Discover our mission, vision, and the values that drive us to deliver top-notch services.',
}

export default function AboutPage() {
  return (
    <>
      <PageTitle 
        title="About Us" 
        subtitle="Our Story" 
        description="Get to know us better! Learn more about our mission, our vision, and the values that guide our work."
      />
      <GridContainer>
        <ComingSoon />
      </GridContainer>
    </>
  )
}