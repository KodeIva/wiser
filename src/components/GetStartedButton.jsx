import { MdArrowOutward } from "react-icons/md";

const GetStartedButton = () => {
  return (
    <div className="flex justify-center items-center w-[140px] h-[140px] bg-gradient-to-r from-blue-600  via-blue-400  to-blue-200 rounded-full cursor-pointer p-[2px]">
      <div className="flex flex-col bg-slate-800 w-[100%] h-[100%] rounded-full justify-center items-start pl-9">
        <p className="font-medium text-lg leading-6 flex flex-row justify-center items-center">
           <span className=" bg-gradient-to-r from-blue-600  via-blue-400  to-blue-200 text-transparent bg-clip-text">Get</span> 
           <MdArrowOutward className="text-white ml-3"/>
        </p>
        <p className="font-medium text-lg leading-6 flex flex-row justify-center items-center">
           <span className=" bg-gradient-to-r from-blue-600  via-blue-400  to-blue-200 text-transparent bg-clip-text">Started</span> 
        </p>
      </div>
    </div>
  )
}

export default GetStartedButton
