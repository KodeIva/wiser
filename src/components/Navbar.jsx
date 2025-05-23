import { NavLinks } from "../data/data"

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
    </nav>
  )
}

export default Navbar
