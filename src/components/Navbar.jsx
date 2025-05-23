import { NavLinks } from "../data/data"
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-6">
      <span className="text-blue-300 font-semibold text-4xl font-serif w-[124px] h-[32px]">
        Wiser
      </span>
      <ul className="sm:flex hidden justify-end items-center flex-1">
         {NavLinks.map((nav, index) => (
            <li 
              key={nav.id} 
              className="font-normal cursor-pointer text-[16px] text-white mr-10 "
            >
                <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
         ))}    
      </ul>

      <div className="sm:hidden flex justify-end items-center">
        <span className="w-[28px] h-[30px]"><CiMenuFries className='text-white' /></span>
        <span className="w-[28px] h-[30px]"><IoMdClose className='text-white' /></span>
      </div>
    </nav>
  )
}

export default Navbar
