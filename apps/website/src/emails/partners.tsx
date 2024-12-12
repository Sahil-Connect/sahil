import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface PartnerProps {
  name: string;
}

export const PartnerEmail = ({
  name,
}: PartnerProps) => (
  <Html>
    <Head />
    <Preview>
      Your one-stop logistics platform.
    </Preview>
    <Tailwind>
      <Body className="bg-white my-auto mx-auto font-sans px-2">
        <Container className="bg-zinc-100 my-4 p-3 mx-auto max-w-2xl">
          <Container className="bg-white border border-solid border-zinc-200 mx-auto px-8 py-4 max-w-2xl">
            <Section>
              <Img 
                src="https://mabior7.github.io/logo/assets/img/logo.png" 
                width="80" 
                alt="Sahil App" 
                className="my-0"
              />
            </Section>
            <Section className="text-black">
              <Text>
                Hi {name},
              </Text>
              <Heading className="text-lg font-medium">
                Your submission has been received! 
              </Heading>
              <Text>
                Thank you for reaching out and expressing your interest in partnering with us. 
                We are excited about the possibility of working and collaborating together. 
              </Text>
              <Text>
                Our team will review the information you provided and promptly get back to you with the way forward. 
              </Text>
              <Text>
                If your profile aligns with our goals, we will schedule an initial meeting to discuss potential opportunities 
                and how we can support each other’s growth.
              </Text>
              <Text>
                Regards,
                <br />
                Sahil team
              </Text>
            </Section>
            <Text>
              <Hr />
            </Text>
            <Section className="flex items-center">
              <Column className="pr-4">
                <Link 
                  href="https://www.linkedin.com/company/sahil-app/" 
                >
                  <Img 
                    src="https://mabior7.github.io/logo/assets/img/linkedin.png" 
                    alt="LinkedIn" 
                    width="16" 
                    height="16" 
                  />
                </Link>
              </Column>
              <Column className="pr-4">
                <Link 
                  href="https://x.com/sahilhq/" 
                >
                  <Img 
                    src="https://mabior7.github.io/logo/assets/img/twitter.png" 
                    alt="twitter" 
                    width="16" 
                    height="16" 
                  />
                </Link>
              </Column>
              <Column className="pr-4">
                <Link 
                  href="https://www.instagram.com/sahil.connect/" 
                >
                  <Img 
                    src="https://mabior7.github.io/logo/assets/img/instagram.png" 
                    alt="LinkedIn" 
                    width="16" 
                    height="16" 
                  />
                </Link>
              </Column>
            </Section>
            <Section>
              <Text style={{ fontSize: "12px", color: "#8898aa" }}>
                © 2024 Sahil – Company Ltd. All Rights Reserved. |
                Norrsken House Kigali, 1 KN 78 St, Kigali-Rwanda
              </Text>
            </Section>
          </Container>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default PartnerEmail;
