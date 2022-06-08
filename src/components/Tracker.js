import React,{useState,useEffect} from "react";
import axios from "axios";
import Coin from "./Coin";



export default function Tracker(){
  const [coins,setCoins] = useState([]); 

  const [search,setSearch]= useState("");
 


  useEffect(()=>{
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
    console.log(res.data);
    })
    .catch(error => console.log(error));
  }, []);

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  const handleChange = e => {
    setSearch(e.target.value);
    console.log(e.target.value);
    
  }
 console.log("search value",search);
 console.log("from api data",coins);
 console.log("after filtered value",filteredCoins);


 return(
   <div className= "w-screen h-screen lg:overflow-x-hidden">
     <div className="lg:flex justify-center mt-20 mb-40">
       
       <h1 className="text-white text-center font-sans text-xl m-0 p-0">Search a currency</h1>
       
       <form>
        <input type="text" className="ml-5 py-2 px-12 rounded shadow-2xl" placeholder="find your crypto.." 
        onChange={handleChange}/>
      
         </form>
       
     </div>
       

      {
      
      filteredCoins.map(coin => {
          return(
            <Coin key={coin.id}
            name={coin.name}
            image={coin.image} 
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
              />
          );
      })}
      
    
 



    
      
     </div>


);




}