import Image from 'next/image';
import React from 'react';
import logo from '../../../public/logo.png';
import Link from 'next/link';

const Navbar = () => {
  const links = [
    {
      name: 'Businesses',
      href: '/businesses',
    },
    {
      name: 'Orders',
      href: '/orders',
    },
    {
      name: 'Suppliers',
      href: '/suppliers',
    },
    {
      name: 'Profile',
      href: '/profile',
    },
  ];
  return (
    <header className='navbar bg-white shadow'>
      <div className='navbar-start'>
        <Link href='/'>
          <Image
            src={logo}
            alt='Sahil'
            height={100}
            loading='eager'
            className='h-10 w-16 object-contain'
          />
        </Link>
        <span className='normal-case text-xl'>Sahil Agent</span>
      </div>
      <nav className='navbar-end'>
        <ul className='menu menu-horizontal px-1 hidden lg:flex lg:items-center lg:gap-4'>
          {links.map(({ name, href }) => {
            return (
              <li key={name}>
                <Link href={href}>{name}</Link>
              </li>
            );
          })}
        </ul>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            {links.map(({ name, href }) => {
              return (
                <li key={name}>
                  <Link href={href}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
