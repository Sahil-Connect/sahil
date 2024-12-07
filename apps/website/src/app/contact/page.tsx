import { 
  ContactCard,
  ContactCardProps,
  GridContainer, 
  PageTitle, 
} from "@/components/shared";
import { Cta, Faqs } from "@/components/segments";
import { HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";

export const metadata = {
  title: "Contact Us - Sahil App",
  description: "We’re here to help and would love to hear from you.",
};

const contactDetails: ContactCardProps[] = [
  {
    icon: HiEnvelope,
    title: "Drop us a line",
    content: "sahil.business@gmail.com",
    linkHref: "mailto:sahil.business@gmail.com",
    colorScheme: "neutral"
  },
  {
    icon: HiMapPin,
    title: "Our Head Office",
    content: (
      <>
        Norrsken House Kigali <br/> 
        1 KN 78 St, Kigali - Rwanda
      </>
    ),
    colorScheme: "gray"
  },
  {
    icon: HiPhone,
    title: "Book a Call",
    content: "+250-790-336-525",
    linkHref: "tel:+250790336525",
    colorScheme: "slate"
  }
];

export default function ContactPage() {
  return (
    <>
      <PageTitle
        subtitle="Contact Us"
        title="Get in Touch"
        description="Have questions? We'd love to hear from you. Get in touch with us."
      />
      <GridContainer>
        <section className="pt-16 pb-8">
          <div className="w-full">
            <div>
              <h3 className="text-xl font-semibold mb-8 lg:text-2xl">
                <span className="yellow-line">Reach Us</span>
              </h3>
              <p className="mb-2 text-gray-500 lg:mb-12">
                If you have any questions or need assistance, feel free to reach out to us through our contact details below.
              </p>
              <div className="mt-12 grid lg:grid-cols-3 gap-3">
                {contactDetails.map((contact, index) => (
                  <ContactCard
                    key={index}
                    icon={contact.icon}
                    title={contact.title}
                    content={contact.content}
                    linkHref={contact.linkHref}
                    colorScheme={contact.colorScheme}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </GridContainer>
      <Faqs />
      <Cta />
    </>
  );
}
