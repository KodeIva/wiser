import { stats } from "../data/data"

const Stats = () => {
  return (
    <section className='flex text-white justify-center items-center'>
      {stats.map((stat) => {
        const { id, title, count } = stat
        return (
            <div key={id}>
              <h4>{title}</h4>
              <p>{count}</p>
            </div>
        )
      })}
    </section>
  )
}

export default Stats
