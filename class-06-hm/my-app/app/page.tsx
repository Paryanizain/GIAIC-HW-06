import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";
import Herosection from "./components/Herosection";

export default function Home() {
  return (
    <div>
  
      <Herosection />
      <div className="bg-slate-100 py-8 px-10 dark:bg-slate-700">
        <div className="flex justify-between">
        <h1 className="font-bold text-2xl text-black">Featured New Cars</h1>
        <div className="text-blue-700 text-sm font-medium hover:text-red-700">View All New Cars</div>
        </div>
        <ul className="flex font-semibold py-6 space-x-10 text-black">
          <li className="hover:text-red-700">Popular</li>
          <li className="hover:text-red-700">Upcoming</li>
          <li className="hover:text-red-700">Newly Launched</li>
        </ul>
        
        <div className="flex space-x-6 text-center">
        <ul className="w-1/4 bg-white">
        <Link href="/Corolla-details"><li className=" hover:opacity-50 transition duration-300"><Image src="/image/Corolla-X-Cars.jpg" alt="Description" width={500} height={300} /></li></Link>
        <Link href="/Corolla-details"><li className="text-blue-900 font-semibold hover:text-red-700">Toyota Corolla</li></Link>
        <Link href="/Corolla-details"><li className="text-green-500 font-semibold my-2 hover:text-red-700">PKR 59.7 - 75.5 lacs</li></Link>
        </ul>

        <ul className="w-1/4 bg-white">
        <Link href="/City-details"><li className=" hover:opacity-50 transition duration-300"><Image src="/image/Honda_City.jpg" alt="Description" width={500} height={300} /></li></Link>
        <Link href="/City-details"><li className="text-blue-900 font-semibold hover:text-red-700">Honda City</li></Link>
        <Link href="/City-details"><li className="text-green-500 font-semibold my-2 hover:text-red-700">PKR 45.5 - 58.5 lacs</li></Link>
        </ul>

        <ul className="w-1/4 bg-white">
        <Link href="/Juke-details"><li className=" hover:opacity-50 transition duration-300"><Image src="/image/Nissan_Juke01.png" alt="Description" width={500} height={300} /></li></Link>
        <Link href="/Juke-details"><li className="text-blue-900 font-semibold hover:text-red-700">Nissan Juke</li></Link>
        <Link href="/Juke-details"><li className="text-green-500 font-semibold my-2 hover:text-red-700">PKR 52.5 - 65.5 lacs</li></Link>
        </ul>

        <ul className="w-1/4 bg-white">
        <Link href="/Alto-details"><li className=" hover:opacity-50 transition duration-300"><Image src="/image/Suzuki_Alto_2015.jpg" alt="Description" width={500} height={300} /></li></Link>
        <Link href="/Alto-details"><li className="text-blue-900 font-semibold hover:text-red-700">Suzuki Alto</li></Link>
        <Link href="/Alto-details"><li className="text-green-500 font-semibold my-2 hover:text-red-700">PKR 23.3 - 32.5 lacs</li></Link>
        </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
