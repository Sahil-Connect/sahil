import { StaticImageData } from 'next/image'
import benefitOne from '../../public/benefits-1.svg'
import benefitTwo from '../../public/benefits-2.svg'
import benefitThree from '../../public/benefits-3.svg'
import benefitFour from '../../public/benefits-4.svg'
import benefitFive from '../../public/benefits-5.svg'
import benefitSix from '../../public/benefits-6.svg'
import agentSupplier from '../../public/agent-supplier.png'
import agentBusiness from '../../public/agent-business.png'

interface BenefitsData {
    id: number;
    image: string;
    title: string;
    desc: string;
}

interface RegistrationRoleData {
    id: number;
    title: string;
    description: string;
    image: StaticImageData;
    link: string;
    alt: string;
}

interface FaqData {
    id: number;
    title: string;
    desc: string;
}

export const benefitsData: BenefitsData[] = [
    {
        id: 1,
        image: benefitOne,
        title: 'Streamlined Operations',
        desc: "Enhance efficiency, and notably cut time managing your supply chains for better operations.",
    },
    {
        id: 2,
        image: benefitTwo,
        title: 'Access to Wide Network',
        desc: "Gain access to a vast network and new opportunities for growth and expansion.",
    },
    {
        id: 3,
        image: benefitThree,
        title: 'Secure Transactions',
        desc: "We employ advanced measures safeguarding data integrity within our platform.",
    },
    {
        id: 4,
        image: benefitFour,
        title: 'Time Efficiency',
        desc: "Save valuable time that can be better spent on other important aspects of your business.",
    },
    {
        id: 5,
        image: benefitFive,
        title: 'User-Friendly Interface',
        desc: "Enjoy an intuitive interface for seamless navigation and a user-friendly experience.",
    },
    {
        id: 6,
        image: benefitSix,
        title: 'Data Analysis',
        desc: "We provide valuable insights and data that can help businesses make informed decisions.",
    },
];

export const registrationRoleData: RegistrationRoleData[] = [
    {
        id: 1,
        title: 'Are You a Supplier Looking to Grow Your Business?',
        description: "Sahil is not just a platform - it’s your partner in achieving growth and success. Join Sahil today and revolutionize your supply operations.",
        image: agentSupplier,
        link: '/',
        alt: 'agent-supplier',
    },
    {
        id: 2,
        title: 'Are You a Business in Need of Supplies?',
        description: "Take your business to new heights, tap into a network of potential suppliers and customers. Join Sahil today and grow your business.",
        image: agentBusiness,
        link: '/',
        alt: 'agent-business',
    },
];

export const faqData: FaqData[] = [
    {
        id: 1,
        title: 'How can I register as a business or supplier?',
        desc: "You can register by creating an account on our platform. During registration, you'll be asked to provide necessary information about your business or the products/services you offer.",
    },
    {
        id: 2,
        title: 'What type of businesses and suppliers can register?',
        desc: "Our platform caters to a wide range of businesses and suppliers. Whether you're a startup, a small business, or a large corporation, you're welcome to register.",
    },
    {
        id: 3,
        title: 'How does the application simplify procurement processes?',
        desc: 'We streamline procurement by providing a platform where businesses can easily find and connect with suppliers that match their needs.',
    },
    {
        id: 4,
        title: 'What delivery services are offered?',
        desc: 'We facilitate the delivery of products from suppliers to businesses, and from businesses to customers. The specifics of these services can vary based on the supplier and the type of product.',
    },
    {
        id: 5,
        title: 'How does the application connect with the market?',
        desc: 'Our platform serves as a marketplace where businesses, suppliers, and customers can interact, exchange information, and conduct transactions.',
    },
];
