import  bill  from '../assets/bill.png'
import { GooglePlayButton, AppGalleryButton, AppStoreButton, ButtonsContainer } from "react-mobile-app-button";

const Billing = () => {
    const APKUrl = "https://play.google.com/store/apps/details?id=com.programiz.learncpp";
    const IOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";
    const HUAUrl = "https://consumer.huawei.com/en/mobileservices/appgallery/"

  return (
    <section id='product' className='flex lg:flex-row flex-col-reverse sm:py-16 py-6'>
      <div className='flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative'>
        <img src={bill} className='w-[100%] h-[100%] relative z-[5]' alt="" />
      </div>
      <div className='flex-1 flex justify-center items-start flex-col'>
        <h2 className='font-semibold  xs:text-[48px] text-[40px] text-white w-full leading-10'>Easily control your <br className="sm:block hidden" /> billing & invoicing</h2>
        <p className='text-[#9b9b9a] max-w-[470px] mt-5 font-normal text-[18px] leading-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla eaque repellendus maxime quod consectetur sint architecto eligendi asperiores ab magnam, adipisci officiis? Hic iure consequatur adipisci. Aperiam exercitationem soluta recusandae placeat temporibus reprehenderit tempora distinctio, delectus ut nulla earum laborum inventore aliquid.</p>
        <div className='flex flex-wrap mt-8'>
           <div className='m-1'>
             <GooglePlayButton height={60} width={190}
               url={APKUrl}
               theme={'dark'}
             />
           </div>
           <div className='m-1'>
            <AppStoreButton height={60} width={190}
                url={IOSUrl}
                theme={'dark'}
            />
           </div>
           <div className='m-1'>
             <AppGalleryButton height={60} width={190} 
               url={HUAUrl}
               theme={"dark"} 
             />
           </div>
        </div>
      </div>
    </section>
  )
}

export default Billing
