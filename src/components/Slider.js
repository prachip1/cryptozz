import React from "react";

export default function Slider({name, image, symbol, price,}){
    return(
      
        <div className="flex justify-center">
        <div className="flex flex-row justify-start items-center border-b h-30 w-90">
            <div className="flex items-center pr-1.5 min-width:min-content">
                <img src={image} className="h-20 w-20 mr-10" alt="hand" />
                <h1 className="text-xl w-24 text-green-500">{name}</h1>
                <p className="uppercase w-40 m-5 text-white">{symbol}</p>
            </div>
            <div className="flex justify-between text-center w-full text-white">
                <p className="w-40">${price}</p>
              
          
            </div>
        </div>
    </div>

    );

}