import { 
  ComingSoon, 
  GridContainer, 
  PageTitle, 
} from '@/components/shared'

export const metadata = {
  title: 'Contact Us - Sahil App',
  description: 'We’re here to help and would love to hear from you.',
}

export default function ContactPage() {
  return (
    <>
      <PageTitle 
        title="Contact Us" 
        subtitle="Get in Touch" 
        description="Have questions? We'd love to hear from you. Get in touch with us."
      />
      <GridContainer>
        <ComingSoon />
      </GridContainer>
    </>
  )
}