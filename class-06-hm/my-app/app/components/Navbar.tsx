export default function Navbar() {
    return (

        <nav className="w-full h-32 bg-slate-950">
               <div className="flex justify-between px-44 py-2 border-b">

                    <div className="font-semibold text-white hover:text-red-700">Download App via SMS</div>
                    <div className="font-semibold text-white hover:text-red-700">Sign In<span className="border-l mx-2"></span>Sign Up</div>
                    

                </div>


            <div className="flex justify-between px-44 mt-10">
               <div className="bg-green-950 w-20 h-8 font-bold place-content-center text-center text-white hover:opacity-50 transition duration-300">LOGO</div>

               <ul className="space-x-10 text-white font-semibold flex py-1">
                  <li className="hover:text-red-700">Used Cars<span className="text-xs">{'▼'}</span></li>
                  <li className="hover:text-red-700">New Cars<span className="text-xs">{'▼'}</span></li>
                  <li className="hover:text-red-700">Bikes<span className="text-xs">{'▼'}</span></li>
                  <li className="hover:text-red-700">Auto Store<span className="text-xs">{'▼'}</span></li>
                  <li className="hover:text-red-700">Videos</li>
                  <li className="hover:text-red-700">Forums</li>
                  <li className="hover:text-red-700">Blog</li>
                  <li className="hover:text-red-700">More<span className="text-xs">{'▼'}</span></li>
               </ul>

               <div className="bg-red-800 w-28 h-8 flex items-center justify-center font-semibold text-center text-white hover:opacity-50 transition duration-300">
                     Post an Ad
                  <span className="text-xs ml-1">{'▼'}</span>
                  </div>
            </div>


         </nav>


    );
  }