import Image from "next/image";

export default function Herosection () {
  return (
    <div className="">

      <div className="flex justify-center text-3xl text-slate-700 font-semibold py-10">
        <h1>Sell Your Car on PakWheels and Get the Best Price</h1>
      </div>

      <div className="flex justify-center space-x-12 pb-8">
          <div className="">
          
            <h1 className="text-lg text-blue-700 font-semibold py-2">Post your Ad on PakWheels</h1>
            <p className="py-1 text-slate-700 font-semibold flex gap-1"><Image src="/check.png" alt="ok" width={25} height={10}/>Post your Ad for Free in 3 Easy Steps</p>
            <p className="py-1 text-slate-700 font-semibold flex gap-1"><Image src="/check.png" alt="ok" width={25} height={10}/>Get Genuine offers form Verified Buyers</p>
            <p className="py-1 text-slate-700 font-semibold flex gap-1"><Image src="/check.png" alt="ok" width={25} height={10}/>Sell your car Fast at the Best Price</p>
            <div className="py-5">
            <button className="text-white text-lg bg-red-700 shadow-md hover:bg-red-800 rounded py-1.5 pt-1 px-10">
              Post Your Ad
            </button>
            </div>
          </div>

          <div>
              <h1 className="text-slate-400 text-xl font-semibold py-20">OR</h1>
          </div>

          <div className="pl-2">
          <h1 className="text-lg text-blue-700 font-semibold py-2">Try PakWheels Sell it For Me</h1>
            <p className="py-1 text-slate-700 font-semibold flex gap-1"><Image src="/check.png" alt="ok" width={25} height={10}/>Dedicated Sales Expert to Sell your Car</p>
            <p className="py-1 text-slate-700 font-semibold flex gap-1"><Image src="/check.png" alt="ok" width={25} height={10}/>We Bargain for you and share the Best Offer</p>
            <p className="py-1 text-slate-700 font-semibold flex gap-1"><Image src="/check.png" alt="ok" width={25} height={10}/>We ensure Safe & Secure Transaction</p>
            <div className="py-5">
            <button className="text-white text-lg bg-blue-700 rounded shadow-md hover:bg-blue-800 py-1.5 pt-1 px-6">
              Register Your Car
            </button>
            </div>
         </div>
      </div>
      
          
  
 
    </div>
  );
}