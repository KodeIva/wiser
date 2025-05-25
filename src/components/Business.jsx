import { features } from "../data/data"


const Business = () => {
  return (
    <section id="features" className="flex flex-col lg:flex-row lg:justify-center lg:items-start mt-10 ml-2 xl:ml-0 text-white justify-center items-center flex-wrap">
      {/* Left side */}
      <div className="flex-1 flex flex-col justify-center items-start">
        <h2
         className="text-white font-semibold md:text-[48px] text-[30px] w-full leading-10 md:leading-[65px] " 
        >
            Keep building your dream. 
            <br className="sm:block hidden" /> 
            We'll manage the money.
        </h2>
        <p className="mt-5 max-w-[470px] text-[#9b9b9a] text-lg leading-7">
            With the right credit card, you can improve your financial life by building credit, earning rewards. But with hundreds of options available, finding the right one can be overhelming.
        </p>
        <button className="bg-gradient-to-r from-blue-600  via-blue-400  to-blue-200 mt-10 py-4 px-6 rounded-md font-medium transition-all transform hover:scale-105 hover:shadow-lg duration-700 ease-in-out">
            Get Started
        </button>
      </div>

      {/* Right side */}
      <div className="flex flex-col max-w-[480px] h-[500px] mt-[150px]">
        {features.map((feature) => {
           const {id,icon: Icon,title,text} = feature
            return (
                <div key={id} className="flex flex-row justify-center items-center mb-11">
                    <div className="w-[40px] h-[40px] mr-3"><Icon className="w-full h-full text-blue-400 " /> </div>
                    <div>
                        <h4 className="font-bold text-lg">{title}</h4>
                        <p className="text-[#9b9b9a]">{text}</p>
                    </div>
                </div>
            )
        })}
      </div>
      
    </section>
  )
}

export default Business
