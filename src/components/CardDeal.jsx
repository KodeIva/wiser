import deal from '../assets/deal.jpg'

const CardDeal = () => {
  return (
    <section className='flex lg:flex-row flex-col sm:py-16 py-16'>
      <div className='flex-1 flex flex-col justify-center items-center'>
       <h2 className='w-full font-semibold text-3xl text-white leading-10 '>Find the better card deal <br />
       in few easy steps.</h2>
       <p className='text-[18px] text-[#9b9b9a]  leading-7 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, maiores.</p>
      
       <button type='button' className='mt-10 bg-gradient-to-r from-blue-600  via-blue-400  to-blue-200 py-4 px-6 font-medium text-lg text-slate-700 rounded-xl outline-none '>
          Get Started
       </button>
      </div>
      <div className="flex flex-1 justify-center items-center lg:mr-10 mr-0 lg:mt-0 mt-10 relative">
         <img src={deal} className='w-[100%] h-[100%]' alt="" />
      </div>
      
    </section>
  )
}

export default CardDeal
