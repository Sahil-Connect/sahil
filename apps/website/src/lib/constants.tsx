import { StaticImageData } from "next/image";
import benefitOne from "../../public/benefits-1.svg";
import benefitTwo from "../../public/benefits-2.svg";
import benefitThree from "../../public/benefits-3.svg";
import benefitFour from "../../public/benefits-4.svg";
import benefitFive from "../../public/benefits-5.svg";
import benefitSix from "../../public/benefits-6.svg";
import featureOne from "../../public/feature-1.svg";
import featureTwo from "../../public/feature-2.svg";
import featureThree from "../../public/feature-3.svg";

interface FeaturesData {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
}

interface BenefitsData {
  id: number;
  image: string;
  title: string;
  desc: string;
}

interface FaqData {
  id: number;
  title: string;
  desc: string;
}

export const featuresData: FeaturesData[] = [
  {
    id: 1,
    title: "Smart Locker Network & Access Codes",
    description: "A distributed network of modular, secure lockers accessible via unique time-limited codes, eliminating missed deliveries and enabling asynchronous pickup.",
    image: featureOne,
  },
  {
    id: 2,
    title: "Seamless API Integration",
    description: "Plug and play with existing delivery platforms, offering real-time status updates, code generation, and box availability—all without disrupting the user experience.",
    image: featureTwo,
  },
  {
    id: 3,
    title: "Location Intelligence & Optimization",
    description: "Data-driven siting of lockers based on delivery heatmaps, reducing driver detours and failed drop-offs by up to 40%.",
    image: featureThree,
  },
];

export const benefitsData: BenefitsData[] = [
  {
    id: 1,
    image: benefitOne,
    title: "Boosted Delivery Success Rates",
    desc: "Transform failed deliveries into completed pickups, reducing refunds and redelivery costs.",
  },
  {
    id: 2,
    image: benefitTwo,
    title: "Optimized Driver Efficiency",
    desc: "Drivers spend less time waiting or calling customers, increasing daily deliveries and cutting fuel usage.",
  },
  {
    id: 3,
    image: benefitThree,
    title: "Scalable Multi-Tenant Infrastructure",
    desc: "One physical locker serves multiple delivery platforms with isolated access, maximizing utilization and ROI.",
  },
  {
    id: 4,
    image: benefitFour,
    title: "Flexible Pickup for Customers",
    desc: "Customers collect deliveries on their own time, improving satisfaction and reducing missed handoffs.",
  },
  {
    id: 5,
    image: benefitFive,
    title: "Low-Cost Urban Logistics Backbone",
    desc: "Affordable infrastructure that adapts to informal and dense urban settings, unlocking markets previously too costly to serve.",
  },
  {
    id: 6,
    image: benefitSix,
    title: "End-to-End Data Insights",
    desc: "Access actionable analytics on delivery patterns, locker usage, and operational efficiencies to continually optimize service.",
  },
];

export const faqData: FaqData[] = [
  {
    id: 1,
    title: "How does Sahil integrate with my existing delivery platform?",
    desc: "Sahil offers secure APIs that connect seamlessly to your order and driver management systems, delivering real-time locker status and access codes.",
  },
  {
    id: 2,
    title: "Can multiple delivery platforms use the same locker?",
    desc: "Absolutely! Our multi-tenant system isolates access, so multiple platforms can safely and efficiently share lockers.",
  },
  {
    id: 3,
    title: "Where are lockers installed, and how are locations chosen?",
    desc: "Locations are strategically selected using delivery data and urban insights to maximize impact, reduce failed deliveries, and optimize driver routes.",
  },
  {
    id: 4,
    title: "What happens if a customer doesn't pick up their package?",
    desc: "Our system supports configurable hold times and notifications, with automatic alerts to drivers and platforms to manage returns efficiently.",
  },
  {
    id: 5,
    title: "Is the locker secure and tamper-proof?",
    desc: "Yes, lockers use industrial-grade locks, tamper detection, and secure code-based access to protect deliveries and customer privacy.",
  },
  {
    id: 6,
    title: "Can this system handle food deliveries with temperature control?",
    desc: "We offer modular lockers with refrigerated compartments tailored for perishable goods, ensuring safety and freshness on pickup.",
  },
];
