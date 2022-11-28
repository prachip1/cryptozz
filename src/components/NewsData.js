import React from "react";


export default function NewsData({title,image,body,url}){
  const truncateText = (str, num) =>{
    if(str?.length > num){
      return str.slice(0,num) + '...'
    }
    else{
      return str
    }
  }
    return(
      

        <div className="flex justify-center items-center ml-6 p-1 mt-14">
          <div className="flex flex-start bg-slate-800 rounded pl-8 pb-9 pt-10 mb-4">
            <img src={image} className="mr-10 h-40 w-40 rounded " alt="hand" />
         </div>
            <div className="flex flex-col bg-slate-800 w-3/5 ml-8 pt-8 pl-8 pb-9 pr-6 mb-5 rounded">
            <h1 className="text-xl w-full text-purple-500">{title}</h1>
            <p className="text-white mt-4 mb-4 break-normal">{truncateText(body,150)}</p>
            <div className="bg-gradient-to-r from-indigo-500 via-red-300 to-purple-500 rounded p-1 w-44">
              <div className="flex flex-col items-center bg-slate-800 p-1">
              <button className="pt-1 pb-1 rounded mb-2 text-center">
             <a href={url} className="text-white rounded text-sm p-2 text-center">Read More</a>
            </button> 
              </div>
          
            </div>
          
           </div>
            
         </div>   
    )
}