import Image from 'next/image'
import { servicesData } from '../../data/dummyData'

const Services = () => {
  return (
    <section className="pt-16 pb-8 px-0 lg:pt-24">
        <div className="container">
            <ul className="flex flex-wrap justify-center items-center gap-10">
                { servicesData.map (({ id, image, title, desc }) => {
                    return(
                        <li key={id} className="max-w-[250px] w-full flex justify-start items-center gap-5 xxl:max-w-[260px]">
                            <div className="w-[45px]">
                                <Image
                                    src={image}
                                    alt={title}
                                    loading='eager'
                                    className='mx-auto'
                                />
                            </div>
                            <div>
                                <p className="text-black text-h3 font-semibold">{title}</p>
                                <p className="font-medium">{desc}</p>
                            </div>
                        </li>
                    )})
                }
            </ul>
        </div>
    </section>
  )
}

export default Services