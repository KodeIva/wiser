import { stats } from "../data/data"

const Stats = () => {
  return (
    <section className='flex text-white justify-center items-center flex-wrap'>
      {stats.map((stat) => {
        const { id, title, count } = stat
        return (
            <div key={id} className="flex-1 flex flex-col justify-center items-center m-3">
              <h4 className="font-semibold text-[20px]  md:text-[30px] leading-10">{count}</h4>
              <p className="text-transparent bg-clip-text text-xs md:text-sm lg:text-xl leading-6 ml-3 uppercase bg-gradient-to-r from-blue-600  via-blue-400  to-blue-200 ">{title}</p>
            </div>
        )
      })}
    </section>
  )
}

export default Stats
