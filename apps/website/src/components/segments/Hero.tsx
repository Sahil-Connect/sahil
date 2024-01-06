import { GridContainer } from '../shared'
import Image from 'next/image'
import Link from 'next/link'
import RoundIcon from '../../../public/round.svg'
import Mockup from '../../../public/empty.svg'
import MockupMain from '../../../public/agent.png'

export const Hero = () => {
  return (
    <section className='relative w-full py-64 pt-16 bg-hero bg-zinc-50 bg-no-repeat bg-top overflow-hidden'>
      <GridContainer className='flex flex-col items-center'>
        <div>
          <div className="hidden sm:mb-4 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 border border-zinc-900">
              <p>Empowering businesses</p>
            </div>
          </div>
          <div className="text-center mb-4 lg:mb-16">
            <h1 className='text-2xl font-jakarta font-bold text-zinc-900 mb-6 md:text-4xl lg:text-6xl'>
              Connecting businesses with <span className="block"> <span className='text-secondary'>suppliers</span> & <span className='text-secondary'>customers.</span></span>
            </h1>
            <p className='mb-4 max-w-[60ch] mx-auto'>
              We simplify procurement processes, connect you with market,
              and offer efficient delivery options.
            </p>
            <div className="flex items-center justify-center gap-10">
              <Link href='/' className='btn btn-primary font-medium'>
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div className='relative flex items-center w-full max-w-3xl mx-auto'>
          <Image
            src={RoundIcon}
            alt={'round-icon'}
            loading='eager'
            className='absolute left-0 bottom-0'
          />
          <Image
            src={RoundIcon}
            alt={'round-icon'}
            loading='eager'
            className='absolute top-0 right-0'
          />
        </div>
        <div className='flex items-center justify-center mt-6 lg:mt-24 xl:mt-36'>
          <div className='absolute w-full bottom-0 max-w-4xl mx-auto flex items-center justify-evenly sm:justify-between md:w-auto lg:-bottom-32 lg:gap-6'>
            <Image
              src={Mockup}
              alt={'mockup-left'}
              loading='eager'
              className='w-28 relative top-10 lg:w-48'
            />
            <Image
              src={MockupMain}
              alt={'mockup-center'}
              loading='eager'
              className='w-28 relative top-6 object-contain lg:w-64 lg:top-0 xl:w-64'
            />
            <Image
              src={Mockup}
              alt={'mockup-right'}
              loading='eager'
              className='w-28 relative top-10 lg:w-48'
            />
          </div>
        </div>
      </GridContainer>
    </section>
  )
}