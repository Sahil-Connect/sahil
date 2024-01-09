import { 
  PageTitle, 
  GridContainer, 
  ComingSoon,
} from '@/components/shared'

export const metadata = {
  title: 'Privacy Policy - Sahil App',
  description: 'Discover the wide range of services we offer. Our innovative solutions are designed to help you streamline your business operations.',
}

export default function privacyPolicy() {
  return (
    <>
      <PageTitle 
        title="Privacy Policy" 
        description="Learn about our commitment to protecting your personal information and how we handle data privacy."
      />
      <GridContainer>
        <ComingSoon />
      </GridContainer>
    </>
  )
}