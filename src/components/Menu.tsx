import React from 'react';
import NavLink from './Navlink';


const Menu = ({Links}:any) => {
  return (
    <ul className='flex flex-col items-center'>{Links.map((link:any, index:any) => 
    <NavLink href={link.path} title={link.title} />)}</ul>
  )
}

export default Menu
