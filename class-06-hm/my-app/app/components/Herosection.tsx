export default function Herosection(){
    return(
        <div className="bg-slate-100 p-8 dark:bg-slate-700">
            <div className="text-2xl font-semibold text-center text-black">Sell Your Car on ZsWheels and Get the Best Price</div>
            <div className="flex justify-evenly p-8">

                <div className="w-1/3 border p-12 bg-white dark:bg-black">

                <h1 className="font-bold text-blue-900">Post Your Ad on ZsWheels</h1>
                <ul>
                <li className="text-xs font-semibold mt-3 p-1 text-black dark:text-white">Post your Ad for Free in 3 Easy Steps</li>
                <li className="text-xs font-semibold p-1 text-black dark:text-white">Get Genuine offers from Verified Buyers</li>
                <li className="text-xs font-semibold p-1 text-black dark:text-white">Sell your car Fast at the Best Price</li>
                </ul>
                <button className="bg-red-700 text-white font-semibold p-[6px] px-[28px] mt-5 rounded-md hover:opacity-50 transition duration-300">Post Your Ad</button>

                </div>

             <div className="font-semibold text-2xl mt-32 text-slate-600 dark:text-slate-300">OR</div>
                <div className="w-1/3 border p-12 bg-white dark:bg-black">
                  <h1 className="font-bold text-blue-900">Try ZsWheels Sell it For Me</h1>
                  <ul>
                  <li className="text-xs font-semibold mt-3 p-1 text-black dark:text-white">Dedicated Sales Expert to Sell your Car</li>
                  <li className="text-xs font-semibold p-1 text-black dark:text-white">We Bargain for you and share the Best Offer</li>
                  <li className="text-xs font-semibold p-1 text-black dark:text-white">We ensure Sale & Secure Transaction</li>
                  </ul>
                  <button className="bg-sky-600 text-white font-semibold p-[6px] px-[28px] mt-5 rounded-md hover:opacity-50 transition duration-300">Register Your Car</button>
                </div>
             </div>
        </div>
    )
}