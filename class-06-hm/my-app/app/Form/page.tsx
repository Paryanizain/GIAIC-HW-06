import Link from "next/link";
import Footerother from "../components/Footerother";

export default function Forms(){
    return(
     <div> 
       
        <div className="text-5xl font-semibold text-center uppercase mt-10">
            <h1>Enter Your Details</h1>
        </div>
        <div className="p-8">
            <form className="w-full border p-8 flex flex-col justify-center items-center gap-5">
                <input type="email" className="border border-blue-300 rounded-lg px-1 w-2/12 mt-40" placeholder="Enter your Email" />
                <input type="password" className="border border-blue-300 rounded-lg px-1 w-2/12 mt-3" placeholder="Enter your Password" />
                <input type="text" className="border border-blue-300 rounded-lg px-1 w-2/12 mt-3" placeholder="Card Number" />
                <input type="text" className="border border-blue-300 rounded-lg px-1 w-2/12 mt-3" placeholder="Address" />
                <Link href="/Thanks" className="p-3 px-7 mt-8 w-1.5/12 border rounded-lg bg-blue-800 text-white font-semibold hover:opacity-50 transition duration-300">Place your order</Link>

            </form>
        </div>
        
            
        <Footerother />
     </div>
    )
}