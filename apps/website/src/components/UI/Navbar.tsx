'use client'

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import Overlay from './Overlay';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

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
  const [showMenu, setShowMenu] = useState(false);
  const [scrollHeader, setScrollHeader] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setShowMenu(true);
    setShowOverlay(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setShowMenu(false);
    setShowOverlay(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleClickOutside = (event: { target: any; }) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
        setShowOverlay(false);
        document.body.style.overflow = 'auto';
      }
    };
    if (showMenu && showOverlay) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu, showOverlay]);

  const scrollBg = () => {
    if(window.scrollY >= 10){
      setScrollHeader(true);
    }else{
      setScrollHeader(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', scrollBg);
    return () => {
      window.removeEventListener('scroll', scrollBg);
    };
  }, []);

  return (
    <>
      {showOverlay && <Overlay />}
      <header className={`fixed top-0 left-0 w-full z-[100] bg-transparent ${scrollHeader ? 'bg-white shadow-[0_0_4px_rgba(14,55,63,0.15)] ' : ''}`}>
        <nav className='container h-[3.5rem] flex items-center justify-between lg:h-[calc(3.5rem_+_1.5rem)]'>
          <Link href='/' className='flex items-center gap-x-1 text-black font-bold text-h2 lg:text-h1'>
            <Image
              src={logo}
              alt={'Sahil'}
              loading='eager'
              className='w-6'
            />
            Sahil
          </Link>
          <div className={`nav-menu ${showMenu ? 'right-0' : ''}`} ref={menuRef}>
            <ul className='flex flex-col items-center gap-y-8 xxl:flex-row gap-x-12' onClick={handleClose}>
              {links.map(({ name, href }) => {
                return (
                <li key={name}>
                  <Link href={href} className='text-black font-semibold transition-[0.4s] hover:text-green-dark'>{name}</Link>
                </li>
                );
              })}
            </ul>
            <div className='absolute top-4 right-6 text-2xl cursor-pointer font-bold xxl:hidden' onClick={handleClose}>
              <AiOutlineClose />
            </div>
          </div>
          <div className='inline-flex text-xl cursor-pointer text-black font-bold xxl:hidden' onClick={handleClick}>
            <AiOutlineMenu />
          </div>
          <Link href='/' className='button hidden xxl:block'>
            Get Started
          </Link>
        </nav>
      </header>
    </>
  )
}

export default Navbar