import Link from "next/link";
import Footerother from "../components/Footerother";

export default function Thanks(){
    return(
        <div>
        <div className="w-full place-content-center bg-white text-center p-10">
            
            <div className="text-blue-500 text-6xl font-bold pt-24">Thank you for shopping!!!</div>
            <div className="font-thin my-10 text-black">Your order will be delivered in 3 days</div>
            <div className="pt-48">
            <Link href="/" className="bg-blue-600 p-[6px] px-[12px] hover:opacity-50 transition duration-300 hover:text-white">GO TO HOME</Link>
            </div>
        </div>
        <Footerother />
        </div>
    )
}