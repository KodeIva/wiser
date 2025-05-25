import { FaPercentage } from "react-icons/fa";
import GetStartedButton from "./GetStartedButton";
import creditCard  from '../assets/creditCard.png'

const Hero = () => {
  return (
    <section id="home" className="flex lg:flex-row justify-center items-center flex-col sm:py-16 py-6">
      <div className="flex justify-center items-start flex-1 flex-col xl:px-0 sm:px-16 px-6">
        
        <div className="flex flex-row items-center py-[6px] px-4">
          <FaPercentage className="text-blue-300 text-xl" />
          <p className="text-[#9b9b9a] text-[18px] font-normal leading-[30px] ml-2">
             <span className="text-white">20%</span> Discount For {" "}
             <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex md:flex-row flex-col justify-between items-center w-full">
          <h1 className="flex-1 font-semibold md:text-[72px] text-[52px] text-white leadiing-[75px] mb-5">
            The next <br />
            <span className="bg-gradient-to-r from-blue-600  via-blue-400  to-blue-200 text-transparent bg-clip-text" >
                Generation
            </span> {" "} <br />
            Payment Method 
          </h1>

          <div className="flex"> 
            <GetStartedButton/>
          </div>
        </div> 

        <p className="max-w-[500px] text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, ipsam error vero magni tempora, impedit natus? Culpa provident delectus voluptates rem asper.</p>

      </div>

      <div className="flex-1 flex justify-center items-center w-[350px] md:w-[450px] md:h-[450px] ">
        <img className="w-[100%] h-[100%] max-w-[350px] md:max-w-[450px] relative" src={creditCard} alt="" />
      </div>
    </section>
  )
}

export default Hero
