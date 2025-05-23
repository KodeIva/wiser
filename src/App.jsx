import Navbar from "./components/Navbar"


function App() {

  return (
   <div className="bg-slate-800 w-full overflow-hidden">
     <div className="flex sm:px-16 px-6 justify-center items-start">
      <div className="xl:max-w-[1280px] w-full">
       {/* 

        <ul className="flex flex-col sm:hidden justify-end items-start text-white">
          <li className="px-3"><a href="#home">Home</a></li>
          <li className="px-3"><a href="#features">Features</a></li>
          <li className="px-3"><a href="#products">Product</a></li>
          <li className="px-3"><a href="#pricing">Pricing</a></li>
          <li className="px-3"><a href="#client">Clients</a></li>
        </ul>*/}
         <Navbar />
      </div>
     </div> 
     </div>  
  
   
  
  
    
  )
}

export default App
