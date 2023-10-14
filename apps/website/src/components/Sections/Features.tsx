import Image from 'next/image'
import { featuresData } from '../../data/constants'

const Features = () => {
  return (
    <section className="pt-16 pb-8 px-0 lg:pt-24">
        <div className="flex flex-col items-center justify-center">
            <div className="inline-block font-semibold bg-[#84faa1] px-4 py-1 rounded-[2rem] mb-2">
                Features
            </div>
            <h3 className="text-h3 font-semibold mb-8 lg:text-h2xl">
                Navigate through our core features
            </h3>
        </div>
        <div className="container">
            <ul className="grid gap-[30px] lg:grid-cols-[1fr_1fr] xxl:grid-cols-[repeat(3,1fr)]">
                { featuresData.map (({ id, image, title, desc }) => {
                    return(
                        <li key={id}>
                            <div className="px-[25px] py-10 border border-solid border-[#d2d6db] rounded-2xl">
                                <div className="flex justify-center flex-nowrap items-center w-16 h-16 border border-solid border-[#1a1a1a] bg-[#84faa1] rounded-[8rem] mb-5">
                                    <div className="flex justify-center items-center">
                                        <Image
                                            src={image}
                                            alt={title}
                                            loading='eager'
                                            className='w-[2.5rem] h-[2.5rem] align-middle justify-self-center'
                                        />
                                    </div>
                                </div>
                                <h3 className="text-h3 font-semibold lg:text-h3xl">
                                    {title}
                                </h3>
                                <p className="font-medium mt-5 mb-4">
                                    {desc}
                                </p>
                            </div>
                        </li>
                    )})
                }
            </ul>
        </div>
    </section>
  )
}

export default Features
