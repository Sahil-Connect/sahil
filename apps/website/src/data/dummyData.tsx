import serviceOne from '../../public/service-1.svg'
import serviceTwo from '../../public/service-2.svg'
import serviceThree from '../../public/service-3.svg'
import serviceFour from '../../public/service-4.svg'
import housesvg from '../../assets/images/house.svg'
import handcuffssvg from '../../assets/images/handcuffs.svg'

interface ServiceData {
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