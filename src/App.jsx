import Billing from "./components/Billing"
import Business from "./components/Business"
import CardDeal from "./components/CardDeal"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Register from "./components/Register"
import Stats from "./components/Stats"
import Testimonials from "./components/Testimonials"


function App() {

  return (
   <div className="bg-slate-800 w-full overflow-hidden">
     <div className="flex sm:px-16 px-6 justify-center items-start">
      <div className="xl:max-w-[1280px] w-full">
         <Navbar />
      </div>
     </div> 

     <div className="bg-slate-800 sm:px-16 px-6 flex justify-center items-start">
       <div className="xl:max-w-[1280px] w-full">
        <Hero/>
        <Stats />
        <Business/>
        <Billing/>
        <CardDeal/>
        <Testimonials/>
        <Register/>
       </div>
     </div>
   </div>  
  
   
  
  
    
  )
}

export default App
