import { footerLinks } from "../data/data"

const Footer = () => {
 const date = new Date().getFullYear()
 console.log(date);

  return (
    <section className="flex flex-col justify-center items-center w-full">
     <div className="flex justify-center w-full">
        <ul className="flex flex-col sm:flex-row justify-end items-start">
         {footerLinks.map(footerLink => (       
             <div key={footerLink.title} className=" flex items-start flex-col m-1 px-10 lg:px-14  ">
                <h4 className="font-medium text-lg text-white my-2">{footerLink.title}</h4>
                <ul>
                  {footerLink.links.map(link => {
                    return (
                     <li className="cursor-pointer text-[#9b9b9a]" key={link.id}>{link.name}</li>
                    )
                  })}    
                </ul>               
             </div>    
          ))}    
        </ul>
        </div>
        <hr className="border-t border-t-[#9b9b9a] w-[100%] my-7"/>
        <div>
            <div>
                <p className="text-[#9b9b9a]">
                    {date}
                    <span> Wiser</span>
                    <span> All Rights Reserved</span>
                </p>
            </div>
            
        </div>
    </section>
  )
}

export default Footer
