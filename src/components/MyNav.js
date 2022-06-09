import React from "react";
import { Link } from "react-router-dom";




export default function MyNav() {
return(
    <nav className=" py-5 bg-slate-700 m-0 px-0 lg:my-0 overflow-x-hidden">
     {/*main div*/}   
     <div className=" ">
        {/*logo and primary links div*/}
        <div className="flex justify-between">
            <div className="flex space-x-8">
               <div> {/*logo div*/}
               <Link to="/" className="flex items-center  text-red-300 text-small">
                  <span className="font-bold mt-1 text-lg ml-4">Cryptozzzz</span>
                 </Link>
               </div>
               {/*primary nav*/}
               <div className="flex items-center space-x-1 text-indigo-700 text-tiny lg:space-x-4 md:space-x-4">
                <Link to="/" className="py-1  text-slate-200 text-tiny hover:text-red-400 invisible md:visible lg:visible">Home</Link>
                <Link to= "/tracker" className="py-1  text-slate-200 text-tiny hover:text-red-400">Tracker</Link>
            
               {/* <Link to="" className="py-1  text-slate-200 text-tiny hover:text-red-400">Know Crypto</Link>
                <Link to="" className="py-1  text-slate-200 text-tiny hover:text-red-400">Blog</Link>
                 <Link to="" className="py-1  text-slate-200 text-tiny hover:text-red-400">Contact Us</Link> */}
               </div>  
            </div> 
        
         {/*sign up and login div*/}
       {/* <div className="flex items-center text-tiny space-x-5 bg-white py-2 px-4 rounded-lg -mr-64">
           <Link to="#" className=" text-indigo-600">Log In</Link>
               </div>*/}
        </div>
     
    </div>

    </nav>
)
}