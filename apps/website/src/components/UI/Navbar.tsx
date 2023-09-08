import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.png';

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
    name: 'Community',
    href: '/community',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

const Navbar = () => {
  return (
    <header className='container'>
      <nav className='navbar bg-base-100 p-0 lg:min-h-[5rem]'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' /></svg>
            </label>
            <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-white rounded-box w-52'>
              {links.map(({ name, href }) => {
                return (
                  <li key={name}>
                    <Link href={href} className='text-black font-semibold transition-[0.4s] hover:text-green-dark'>{name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link href='/' className='flex items-center gap-x-1 text-black font-bold text-h2'>
            <Image
              src={logo}
              alt={'Sahil'}
              loading='eager'
              className='w-6'
            />
            Sahil
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 xxl:gap-x-6'>
            {links.map(({ name, href }) => {
              return (
                <li key={name}>
                  <Link href={href} className='text-black text-base font-semibold transition-[0.4s] hover:text-green-dark xxl:text-basexl'>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='navbar-end'>
          <a className='btn btn-primary'>Get Started</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar