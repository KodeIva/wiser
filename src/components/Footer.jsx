import { footerLinks, socials } from "../data/data"

const Footer = () => {
 const date = new Date().getFullYear()
 console.log(date);

  return (
    <section className="flex flex-col justify-center items-center w-full pt-12">
     <div className="flex justify-center w-full">
        <ul className="flex flex-col md:flex-row justify-end items-start">
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
        <div className="flex flex-col my-3 justify-center items-center w-[100%] md:flex-row md:justify-around">
            <div className="mb-3">
                <p className="text-[#9b9b9a]">
                    {date}
                    <span> Wiser</span>
                    <span> All Rights Reserved</span>
                </p>
            </div>
            <div className="mb-4">
                <ul className="flex"> 
                {socials.map(social => {
                    const { link, id, icon: Icon } = social
                    return (
                       
                            <li className="text-[#9b9b9a] mx-3 " key={id}>
                                <a href="`#${link}`" className="text-3xl lg:text-4xl"><Icon/></a>
                            </li>
                       
                    )
                })}
               </ul>  
            </div>
            
        </div>
    </section>
  )
}

export default Footer
