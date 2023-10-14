import Image from 'next/image'
import ctaImg from '../../../public/cta.png'

const Cta = () => {
  return (
        <section className='pt-20 pb-8 px-0 lg:pt-24 xxl:pt-32'>
            <div className="container">
                <div className="grid gap-[50px] p-[25px] bg-[#4ade80] shadow-[0_15px_30px_hsla(0,0%,0%,0.07)] rounded-2xl lg:p-[50px] xxl:px-16 xxl:py-4 xxl:grid-cols-[1fr_1fr] xxl:items-center">
                    <figure className="hidden xxl:block xxl:mx-auto">
                        <Image
                            src={ctaImg}
                            alt={'sahil download banner'}
                            loading='eager'
                            className='mt-[-100px] mb-[-100px]'
                        />
                    </figure>
                    <div>
                        <h2 className="text-center text-h2 text-white font-bold mt-5 mb-4 leading-none lg:text-h2xl xxl:text-left">
                            Unlock a world of seamless connections and collaborations.
                        </h2>
                        <p className="text-center text-base text-white font-medium mb-8 xxl:text-left">
                            Download the sahil app now, sign up for free and use our services
                            to grow your business.
                        </p>
                        <div className="flex items-center justify-center flex-wrap gap-[15px] mb-5 xxl:justify-start">
                            <a href="#" target="_blank" className="btn btn-primary px-[22px] py-[auto] max-w-max font-medium flex items-cnter gap-2.5 text-white bg-green text-base border-2 border-solid border-green rounded-[100px] transition-[0.25s] duration-[ease] normal-case hover:bg-transparent text-left">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <path fill="currentColor" d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04L8.32 8l3.207 2.96l2.694-1.586Zm-3.595 2.116L7.583 8.68L1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8L1 13.396ZM1.03 1.27l6.553 6.05l3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z"/>
                                </svg>
                                <div>
                                    <p className="font-normal">Available on the</p>
                                    <p className="font-semibold">Play Store</p>
                                </div>
                            </a>
                            <a href="#" target="_blank" className="btn btn-primary px-[22px] py-[auto] max-w-max font-medium flex items-center gap-2.5 text-white bg-green text-base border-2 border-solid border-green rounded-[100px] transition-[0.25s] duration-[ease] normal-case hover:bg-transparent text-left">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <defs>
                                        <path id="biApple0" d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516c.024.034 1.52.087 2.475-1.258c.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422c.212-2.189 1.675-2.789 1.698-2.854c.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116c-.508.139-1.653.589-1.968.607c-.316.018-1.256-.522-2.267-.665c-.647-.125-1.333.131-1.824.328c-.49.196-1.422.754-2.074 2.237c-.652 1.482-.311 3.83-.067 4.56c.244.729.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899c.319.232 1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472c.357.013 1.061.154 1.782.539c.571.197 1.111.115 1.652-.105c.541-.221 1.324-1.059 2.238-2.758c.347-.79.505-1.217.473-1.282Z"/>
                                    </defs>
                                    <g fill="currentColor">
                                        <use href="#biApple0"/>
                                        <use href="#biApple0"/>
                                    </g>
                                </svg>
                                <div>
                                    <p className="font-normal">Available on the</p>
                                    <p className="font-semibold">App Store</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Cta
