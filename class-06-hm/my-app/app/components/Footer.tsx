import Link from "next/link"

export default function Footer(){
    return(
        <div className="w-full bg-slate-950">
            <div className="flex justify-center">
                <h1 className=" uppercase text-white font-bold text-2xl mt-28">where to?</h1>
            </div>
            <ul className="text-white font-semibold flex justify-center space-x-10 mt-6">
                <li className="hover:text-red-700">Outside</li>
                <li className="hover:text-red-700">Interior</li>
                <li className="hover:text-red-700">Location</li>
                <li className="hover:text-red-700">Video</li>
                <li className="hover:text-red-700">Team</li>
                <li className="hover:text-red-700">Enquire</li>
            </ul>
            <div className="text-white flex justify-between items-center mt-48 p-10">
                <div className="w-48 font-semibold text-sm">Branding and Marketing by <span className="uppercase font-bold text-xl">zain shahid</span></div>
                <Link href="/" className="font-semibold hover:text-red-700">Back to top</Link>
                <div className="w-48 text-sm font-semibold">Check Out<span className="text-bold uppercase mx-1 hover:text-red-700">@zain shahid</span></div>
            </div>
        </div>
    )
}