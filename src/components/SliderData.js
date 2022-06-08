import React,{useEffect,useState} from "react";
import axios from "axios";
import TopSlide from "./TopSlide";


export default function SliderData(){

const [slides,setSlide] = useState([]);
    
    /*const [some,setSome] =useState([]);*/
    useEffect(()=>{
   
        gettingTrendingCoinData();
        
},[]) ;  
   
 const gettingTrendingCoinData= async() => {
   const zes= await axios.get('https://api.coingecko.com/api/v3/search/trending?limit=5');
   
       setSlide(zes.data.coins);
       console.log(zes.data.coins);

 };
    
  
     
        /*for(let i=0; i < slides.length; i++)
        {
            setSome(slides[i].item);
            console.log(slides[i].item);
          
       
         
         }*/
        
         
   
   
    
  


   return(
   <div className=" flex flex-col pt-10 pb-14 bg-black lg:m-0 p-0 overflow-x-hidden">
    <div className="flex justify-start">
    <h4 className="text-white text-xl lg:text-3xl ml-14">Trending Coins</h4>
    </div>           
  <div className="lg:flex flex-row justify-center mt-10">
    {slides.map(same =>{
           return(
                <TopSlide key={same.item.id}
                name={same.item.name} 
                symbol={same.item.symbol} 
                image={same.item.small}
                rank ={same.item.market_cap_rank}
                />
                
              )
        }
       

        )
    }
</div>
   
   
</div>
   );
      

}