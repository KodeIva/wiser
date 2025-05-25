

const Business = () => {
  return (
    <section id="features" className="flex mt-10 ml-16 xl:ml-0 text-white justify-center items-center flex-wrap">
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
      
    </section>
  )
}

export default Business
