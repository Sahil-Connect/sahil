"use client";

import { useState } from "react";

import { HiOutlineMapPin, HiOutlineChevronUp, HiOutlineHome,  HiOutlineBell, HiOutlineUser } from "react-icons/hi2";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";


interface NavItem {
    icon: typeof HiOutlineHome
    label: string
    href: string
  }

const navItems: NavItem[] = [
    {
        icon: HiOutlineHome,
        label: 'Home',
        href: '/'
      },
    {
      icon: HiOutlineMapPin,
      label: 'Discover',
      href: '/discover'
    },
    {
      href: "/requests",
      label: "Requests",
      icon: HiOutlineBell,
    },
    {
        icon: HiOutlineUser,
        label: 'Profile',
        href: '/profile'
      }
  ]

export function BottomNav () {
    const pathname = usePathname();


    return (
        <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 absolute bottom-0 left-0 right-0 shadow-lg max-h-24 border-t border-border">
        <div className="flex items-center justify-evenly py-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <div 
                key={item.href}
                className={`${isActive ? 'text-primary' : 'text-muted-foreground'} flex flex-col items-center justify-center gap-2`}
              >
                <Link 
                  href={item.href} 
                  className="flex items-center justify-center gap-2 p-2 rounded-full transition-all duration-200 ease-in-out"
                >
                  <item.icon 
                    size={20} 
                    className="transition-all duration-200 text-muted-foreground hover:scale-110" 
                  />
                </Link>
                <span
                  className="text-xs md:text-sm font-medium whitespace-nowrap transition-colors duration-200"
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    )
}