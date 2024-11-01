import Link from "next/link";
import Image from "next/image";
import Footerother from "../components/Footerother";

export default function Corolla_details() {
  return (
    <div>
      <div className="p-8">
        <div className="flex justify-center">
          <h1 className="text-3xl font-semibold underline">
            Honda City 2024 Price in Pakistan,Images,Reviews & Specs
          </h1>
        </div>

        <div className="flex justify-center mt-10">
          <div>
            <Image
              src="/image/City1.jpg"
              alt="Description"
              width={500}
              height={300}
            />
          </div>
        </div>

        <div className="flex justify-center space-x-4 py-10">
          <button className="bg-white text-blue-900 border border-blue-900 p-[6px] px-[14px] rounded-md hover:bg-blue-800 hover:text-white">
            Book a test drive
          </button>
          <button className="bg-white text-blue-900 border border-blue-900 p-[6px] px-[14px] rounded-md hover:bg-blue-800 hover:text-white">
            Request Bank Finance
          </button>
          <button className="bg-white text-blue-900 border border-blue-900 p-[6px] px-[14px] rounded-md hover:bg-blue-800 hover:text-white">
            Visit Price
          </button>
          <button className="bg-white text-blue-900 border border-blue-900 p-[6px] px-[14px] rounded-md hover:bg-blue-800 hover:text-white">
            Car Inspection
          </button>
        </div>

        <div className="flex justify-center">
          <h1 className="text-2xl">Vehicle Description</h1>
        </div>

        <ul className="flex space-x-5 text-sm justify-center py-4">
          <li className="text-black dark:text-white font-semibold">
            Number of Doors: <span className="text-slate-500">4</span>
          </li>
          <li className="text-black dark:text-white font-semibold">
            Engine: <span className="text-slate-500">1300 CC</span>
          </li>
          <li className="text-black dark:text-white font-semibold">
            Condition: <span className="text-slate-500">9 / 10</span>
          </li>
          <li className="text-black dark:text-white font-semibold">
            Driven: <span className="text-slate-500">7,500 KM</span>
          </li>
          <li className="text-black dark:text-white font-semibold">
            Suspension Type:{" "}
            <span className="text-slate-500">Soft Suspension</span>
          </li>
          <li className="text-black dark:text-white font-semibold">
            Avg: <span className="text-slate-500">17 Km pr ltr</span>
          </li>
          <li className="text-black dark:text-white font-semibold">
            Transmission: <span className="text-slate-500">Automatic</span>
          </li>
          <li className="text-black dark:text-white font-semibold">
            Fuel Type: <span className="text-slate-500">High Octane</span>
          </li>
        </ul>

        <div className="flex justify-center py-10">
          <h1 className="font-semibold text-2xl text-green-500">PKR 5000000</h1>
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/Form"
            className="bg-blue-800 text-white p-[12px] px-[20px] rounded-md font-semibold hover:opacity-50 transition duration-300"
          >
            Make Payment
          </Link>
        </div>
      </div>
      <Footerother />
    </div>
  );
}
