import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import { GridContainer } from '../shared';

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Features',
    href: '/features',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export const Navbar = () => {
  return (
    <header className='border-b border-b-gray-300 w-full h-16 lg:h-20 bg-zinc-50'>
      <GridContainer className='px-2'>     
        <nav className='navbar p-0 lg:h-20'>
          <div className='navbar-start'>
            <div className='dropdown'>
              <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
              </label>
              <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-gray-50 rounded-box w-52'>
                {links.map(({ name, href }) => {
                  return (
                    <li key={name}>
                      <Link href={href} className='text-zinc-900 text-base transition duration-300 ease-linear hover:text-primary'>
                        {name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <Link href='/' className='flex items-center font-jakarta gap-x-2 text-zinc-900 font-bold text-xl'>
              <Image
                src={logo}
                alt={'Sahil'}
                loading='eager'
                className='w-10 max-w-full object-contain'
              />
              sahil
            </Link>
          </div>
          <div className='navbar-center hidden lg:flex'>
            <ul className='menu menu-horizontal px-1 lg:gap-x-6'>
              {links.map(({ name, href }) => {
                return (
                  <li key={name}>
                    <Link 
                      href={href} 
                      className="px-3 py-1 text-zinc-900 text-base transition duration-300 hover:text-primary"
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='navbar-end'>
            <Link href={'/'} className='btn btn-primary font-medium'>Get Started</Link>
          </div>
        </nav>
      </GridContainer>
    </header>
  )
}