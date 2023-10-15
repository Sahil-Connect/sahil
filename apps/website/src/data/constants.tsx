import serviceOne from '../../public/service-1.svg'
import serviceTwo from '../../public/service-2.svg'
import serviceThree from '../../public/service-3.svg'
import serviceFour from '../../public/service-4.svg'
import featureOne from '../../public/feature-1.svg'
import featureTwo from '../../public/feature-2.svg'
import featureThree from '../../public/feature-3.svg'

interface ServiceData {
    id: number;
    image: string;
    title: string;
    desc: string;
}

interface FeaturesData {
    id: number;
    image: string;
    title: string;
    desc: string;
}

export const servicesData: ServiceData[] = [
    {
        id: 1,
        image: serviceOne,
        title: 'Order Tracking',
        desc: 'Track your Order Easily',
    },
    {
        id: 2,
        image: serviceTwo,
        title: 'Supply Chain',
        desc: 'Efficient Supply Flow',
    },
    {
        id: 3,
        image: serviceThree,
        title: 'Secure Payment',
        desc: '100% Secure Gaurantee',
    },
    {
        id: 4,
        image: serviceFour,
        title: 'Special Support',
        desc: '24/7 Dedicated Support',
    },
];

export const featuresData: FeaturesData[] = [
    {
        id: 1,
        image: featureOne,
        title: 'User Registration',
        desc: 'Enabling access, personalized experiences, security, and community engagement. A fundamental feature for tailored interactions and trust-building in digital platforms.',
    },
    {
        id: 2,
        image: featureTwo,
        title: 'Matching Process',
        desc: 'Establish a supply chain by connecting with suitable suppliers. The app matches businesses with suitable suppliers based on user requirements and supplier inventory.',
    },
    {
        id: 3,
        image: featureThree,
        title: 'Delivery Process',
        desc: 'Flexible delivery. Choose from community pick-up points or input specific addresses. Includes confirmation, coordination, validation, and delivery time selection.',
    },
];
