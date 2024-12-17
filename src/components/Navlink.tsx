import Link from 'next/link';
const NavLink = ({href, title}:any) => {
    return (
        <Link href={href} className='block py-2 pl-3 pr-4 text-[#A8A8A8] sm:text-xl 
                     hover:text-white rounded md:p-0 md:hover:text-[#A8A8A8]'>{title}</Link>
    )
}
export default NavLink;