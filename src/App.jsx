import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Stats from "./components/Stats"


function App() {

  return (
   <div className="bg-slate-800 w-full overflow-hidden">
     <div className="flex sm:px-16 px-6 justify-center items-start">
      <div className="xl:max-w-[1280px] w-full">
         <Navbar />
      </div>
     </div> 

     <div className="bg-slate-800 flex justify-center items-start">
       <div className="xl:max-w-[1280px] w-full">
        <Hero/>
        <Stats />
       </div>
     </div>
   </div>  
  
   
  
  
    
  )
}

export default App
