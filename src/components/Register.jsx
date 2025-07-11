import React from 'react'

const Register = () => {
  return (
      <section className='flex xl:flex-row flex-col justify-center items-start lx:items-center xl:my-16 my-6 xl:px-0 px-6 sm:py-12 py-4  bg-slate-900 rounded-2xl'>
        <div className='flex flex-col mr-10'>
            <h2 className='font-semibold sm:text-5xl text-4xl text-white sm:leading[75px] leading-[35px] w-full' >Let's try our service now!</h2> 
            <p className='text-[#9b9b9a] mt-2 text-lg leading-8'>Everything you need to accept card payments and expand your business anywhere in the world.</p>
        </div>
        <div className='flex justify-center items-center lx:ml-14 ml-0  xl:mt-0'>
            <button className='py-4 mt-8 px-6 font-medium text-lg bg-gradient-to-r from-blue-600  via-blue-400  to-blue-200  rounded-xl'>Get Started</button>
        </div>
      </section>
  )
}

export default Register
