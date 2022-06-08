import React,{useState,useEffect} from "react";
import axios from "axios";
import Slider from "./Slider";

export default function Tracker(){
  const [coins,setCoins] = useState([]);


  
 

  useEffect(()=>{
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=5&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
    console.log(res.data);
    })
    .catch(error => console.log(error));
  }, []);



 
  console.log(coins);
    /*
    if(filteredCoins.length === 0){
      return(
        <div className="flex justify-center flex-column bg-slate-200 rounded py-10 px-10 w-20 h-30 mt-9">
        <h1 className="text-red-500"> There is no such coins</h1>
        </div>
      )
      
    } 
 */
 
   

 return(
   <div>
  
  
      {coins.map(coin => {
          return(
            <Slider key={coin.id}
            name={coin.name}
            image={coin.image} 
            symbol={coin.symbol}
            price={coin.current_price}
          />
          )
      })}
     </div>


);


}