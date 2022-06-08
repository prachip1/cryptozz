import React from 'react';


export default function TheMainHeader(){


    return(
        <div className="container flex w-full m-0 p-0"> {/*main div*/}
            <div className="flex w-54 h-34"> {/*second div */}
               <video src="./videos/crypto.mp4"  autoPlay loop muted ></video>
            </div>  
             <div className="absolute mx-3 my-10 lg:mt-44">
            {/* <img src="./images/bitcoin.png" alt="bitcoin" className="w-24 h-24" />*/}
             <h1 className="text-white text-2xl  md:text-5xl lg:text-7xl ">Another news place for</h1>
            <span className="text-white uppercase font-bold -mt-10 text-5xl bg-gradient-to-r from-red-500 via-pink-600 to-purple-500 text-transparent bg-clip-text lg:text-9xl">CRYPTO.</span>
        
            </div> 
       </div>
    )
}