import Image from 'next/image'
import about from '../../../public/about.png'

const About = () => {
  return (
    <section className="pt-16 pb-8 px-0 lg:pt-24">
        <div className="container px-4">
           <div className="about-us-component grid items-center gap-12 grid-rows-[auto] xxl:grid-cols-[1fr_1fr]">
                <div className="about-us-component-one">
                    <div className="flex flex-col items-start justify-start">
                        <div className="inline-block font-semibold bg-[#84faa1] px-4 py-1 rounded-[2rem] mb-2">
                            About Us
                        </div>
                        <h3 className="text-h2 font-semibold my-3 lg:text-h2xl">
                            Who are We
                        </h3>
                    </div>
                    <p className="about-desc mb-3">
                        We are a dynamic platform that bridges the gap between businesses, suppliers, and customers. Our mission is to simplify procurement processes, foster market connections, and streamline delivery services.
                    </p>
                    <p className="about-desc mb-3">
                        We believe in the power of collaboration and aim to create a thriving ecosystem where businesses can connect with suppliers that match their needs, and customers can find products that meet their preferences.
                    </p>
                    <p className="about-desc mb-3">
                        Our platform is designed to make transactions smoother, faster, and more efficient. We are committed to providing a seamless experience for all our users, ensuring they can focus on what matters
                        most - growing their business and satisfying their customers.
                    </p>
                </div>
                <div className="about-us-component-two relative flex justify-center items-center">
                    <Image
                        src={about}
                        alt={'Sahil'}
                        loading='eager'
                        className='w-full h-full'
                    />
                    <div className="absolute left-0 top-0 right-0 bottom-0 z-[-1] bg-[#067a4631] rounded-[20px_20px_20px_20px]"></div>
                </div>
           </div>
        </div>
    </section>
  )
}

export default About
