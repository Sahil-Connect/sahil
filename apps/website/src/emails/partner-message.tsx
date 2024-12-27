import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface PartnerMessageProps {
  name: string;
  email: string;
  phoneNumber: string;
  companyName?: string;
  supplyDetails?: string;
  vehicleDetails?: string;
}

export const PartnerMessage = ({
  name,
  email,
  phoneNumber,
  companyName,
  supplyDetails,
  vehicleDetails,
}: PartnerMessageProps) => (
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
            <Section>
              <Heading className="text-lg font-medium text-black">
                Your received a message from {name} 
              </Heading>
              <Text className="text-black">
                Full name: <strong>{name}</strong>
              </Text>
              <Text className="text-black">
                Email address: <strong>{email}</strong>
              </Text>
              <Text className="text-black">
                Phone number: <strong>{phoneNumber}</strong>
              </Text>
              {companyName &&
                <Text className="text-black">
                  Company name: <strong>{companyName}</strong>
                </Text>
              }
              {supplyDetails &&
                <Text className="text-black">
                  Supply details: <strong>{supplyDetails}</strong>
                </Text>
              }
              {vehicleDetails &&
                <Text className="text-black">
                  Vehicle status: <strong>{vehicleDetails}</strong>
                </Text>
              }
            </Section>
            <Text>
              <Hr />
            </Text>
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

export default PartnerMessage;
