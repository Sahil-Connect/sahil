import { 
  SectionWrapper, 
  GridContainer 
} from '@/components/shared';
import Image from 'next/image'
import Link from 'next/link'
import { registrationRoleData } from '@/lib/constants';

export const RegistrationRole = () => {
  return (
    <SectionWrapper>
      <GridContainer>
        <ul className="story-list grid gap-y-10 lg:grid-cols-2 lg:gap-x-8">
          {registrationRoleData.map (({ id, title, description, image, link, alt }) => {
            return(
              <li key={id} className="relative h-[540px] bg-zinc-50 rounded-lg overflow-hidden lg:h-[600px]">
                <div className="p-8">
                  <h3 className="text-xl mb-4 font-bold md:mb-8 md:text-2xl lg:text-4xl">
                    {title}
                  </h3>
                  <p className="text-gray-600 max-w-[50ch] mb-6">
                    {description}
                  </p>
                  <Link href={link} className='btn btn-primary font-medium'>
                    Register Here
                  </Link>
                </div>
                <div className="absolute px-8 bottom-0 w-full flex items-center justify-center">
                  <Image
                    src={image}
                    alt={alt}
                    className='align-middle justify-self-center object-cover'
                  />
                </div>
              </li>
            )})
          }
        </ul>
      </GridContainer>
    </SectionWrapper>
  )
}
