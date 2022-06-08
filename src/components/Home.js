import React from "react";
import News from "./News";
import TheMainHeader from "./TheMainHeader";
import Footer from "./Footer";
import SliderData from "./SliderData";





export default function Home() {
return(
  /*main div*/
  <div className="flex justify-content bg-black-700 font-sans lg:overflow-x-hidden ">
      {/*div for graph from tracker */}
      
      <div className="flex flex-col">
     
      <TheMainHeader />
       <SliderData />
      <News />
     <Footer />
      </div> 
     
          
  {/* div for news from api*/}
         
        


       
       
     
            
    
   </div>
 )
}