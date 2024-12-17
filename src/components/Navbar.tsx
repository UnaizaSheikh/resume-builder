//navbar.tsx 
"use client"
import React, { useState } from 'react'
import NavLink from '@/components/Navlink'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import  Menu  from '@/components/Menu'

const NavLinks = [
   {
    title: 'About',
    path  : '/about',
    },
    {
      title: 'Projects',
      path  : '/projects',
      },
      {
        title: 'Contact',
        path  : '/contact',
        }
];


const Navbar = () => {
  const [navbarOpen, setNavbaropen] = useState(false);
  return (
    <nav className='fixed top-0 left-10 right-10 bg-[#121212] bg-opacity-100 z-10'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <Link href='/' className='text-2xl md:text-5xl text-yellow-100 font-semibold'>
        Logo
        </Link>
        <div className='mobile-menu block md:hidden'>
        <div className='menu hidden md:block md:w-auto'id='navbar'>

          
          {
            !navbarOpen ? (
              <button
               onClick={() => setNavbaropen(true)} 
               className='flex items-center px-3 py-2 text-yellow-100 border rounded
               border-yellow-100 hover:text-white hover:border-white'>
                < Bars3Icon className='w-6 h-6 '/>
                </button>
            ):(
              <button
               onClick={() => setNavbaropen(false)} 
               className='flex items-center px-3 py-2 text-yellow-100 border rounded
               border-yellow-100 hover:text-white hover:border-white'>
                < XMarkIcon className='w-6 h-6 '/>
                </button>)
          }
          </div>

        </div>
        <div className='menu hidden md:block md:w-auto'id='navbar'>
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt:0'>
                {
                    NavLinks.map((link:any,index:any) => (
                        <li>key={index}
                        <NavLink href={link.path} title={link.title} />
                        </li>
                    ))
                }
                
            </ul>
        </div>
        </div>
        {navbarOpen ? <Menu links={NavLinks} />: null}
    </nav>
  )
}

export default Navbar                             