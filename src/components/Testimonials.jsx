import React from 'react'

const Testimonials = () => {
  return (
    <section id='clients' className='flex flex-col relative justify-center items-center text-white sm:my-16 my-6'>
      <div className="flex flex-col w-full justify-between items-center md:flex-row sm:mb-16 mb-6 relative z-[1]">
        <h1 className='w-full font-semibold sm:text-3xl text-4xl leading-[60px]'>
            What people are <br className='sm:block hidden'/> saying about us
        </h1>
        <div className='w-full md:mt-0 mt-6'>
           <p className='text-lg text-[#9b9b9a] text-left max-w-[450px] leading-8'>Everything you need to process payments and thrive - wherever business takes you.</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
