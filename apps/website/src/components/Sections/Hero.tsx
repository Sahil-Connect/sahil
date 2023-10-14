import Image from 'next/image'
import Link from 'next/link'
import home from '../../../public/hero.png'
import vectorOne from '../../../public/vector-1.svg'
import vectorTwo from '../../../public/vector-2.svg'

const Hero = () => {
  return (
    <section className='home grid gap-0 border-b-green border-b-4 border-solid rounded-[0_0_23px_23px]'>
      <div className='pt-12 pb-10 px-0 lg:mt-2'>
        <div className='container text-center'>
          <h1 className='text-bigger font-bold text-black mb-4 leading-none xxl:text-biggestxl'>
            Connecting businesses with <span className='text-green'>suppliers</span> & <span className='text-green'>customers</span>.
          </h1>
          <p className='font-semibold mb-4 max-w-[60ch] mx-auto'>
            We simplify procurement processes, connect you with market,
            and offer efficient delivery options.
          </p>
          <Link href='/' className='btn btn-primary'>
            Get Started
          </Link>
        </div>
      </div>
      <div className='relative align-middle justify-self-center'>
        <Image
          src={home}
          alt={'Sahil'}
          loading='eager'
          className='align-middle justify-self-center'
        />
        <Image
          src={vectorOne}
          alt={'Sahil'}
          loading='eager'
          className='hidden opacity-60 z-[-1] lg:block lg:absolute right-[-40px] top-[100px]'
        />
        <Image
          src={vectorTwo}
          alt={'Sahil'}
          loading='eager'
          className='hidden opacity-60 z-[-1] lg:block lg:absolute left-[-10px] top-[20px]'
        />
      </div>
    </section>
  )
}

export default Hero