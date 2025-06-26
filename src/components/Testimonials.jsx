import React from 'react'
import { feedback } from '../data/data'

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

      <div className="flex flex-wrap w-full justify-center sm:justify-center relative z-[1]">
        {feedback.map(singleFeedback => {
            const { id, img,name, title, comment } = singleFeedback
           return (
            <div key={id} className="flex flex-col justify-between px-10 py-12 rounded-3xl max-w-[370px] md:mr-10 ms:mt-5 mr-0 my-5 bg-transparent">      
        <p className='text-lg leading-8 text-white my-10'>{comment}</p>
         <div className="flex flex-row">
            <img
              className='w-14 h-14 rounded-full' 
              src={img} alt="" 
            />
            <div className="flex flex-col ml-4">
                <h3 className='font-semibold text-xl leading-8'>{name}</h3>
                <h4 className='text-sm text-[#9b9b9a] leading-6 '>{title}</h4>
                
            </div>
         </div>
        </div>
           )
        })}
      </div>

    </section>
  )
}

export default Testimonials
