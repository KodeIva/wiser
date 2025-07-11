import { footerLinks } from "../data/data"

const Footer = () => {
  return (
    <section >
     <div>
        <ul className="flex flex-col justify-end items-start">
         {footerLinks.map(footerLink => (
                
             <div key={footerLink.title} className="font-normal cursor-pointer text-[16px] text-white my-2 mr-10 ">
                <h4>{footerLink.title}</h4>

                <ul>
                  {footerLink.links.map(link => {
                    return (
                        <li key={link.id}>{link.name}</li>
                    )
                  })}    
                </ul>  

              
</div>
                  
                 ))}    
              </ul>
        </div>
    </section>
  )
}

export default Footer
