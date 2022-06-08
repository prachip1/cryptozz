import React from "react";

export default function TopSlide({name,symbol,image,rank}){
    return(
       
        <div className="bg-gradient-to-r from-indigo-500 via-red-300 to-purple-500 rounded ml-1 mr-1 h-44 w-44">
           <div className="flex flex-col items-center bg-slate-700 h-40 w-40 ml-2 mt-2 rounded">
           <div className="flex flex-row text-white  mt-6 break-normal">{name}</div>
            <img className="flex flex-row h-10 w-10 rounded-full mt-1 mb-1" src={image} alt=""/>
             <div className="flex flex-row text-white text-lg p-2">{symbol}</div>
             <div className="flex flex-row text-green-600 text-lg -mt-4"><span className="text-white">Rank :  </span> {rank}</div>
         </div>
        </div>
       
        
    )
}