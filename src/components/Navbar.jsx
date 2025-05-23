import { useState } from "react";
import { NavLinks } from "../data/data"
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
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
        <button type="button" className="w-[28px] h-[30px]" onClick={()=>setToggle(!toggle)}>
           {toggle ? <IoMdClose className='text-white' /> : <CiMenuFries className='text-white' />} <CiMenuFries/></button>
      </div>
    </nav>
  )
}

export default Navbar
