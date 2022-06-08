import React,{useState,useEffect} from "react";
import axios from "axios";
import NewsData from "./NewsData";



export default function News(){
    const [news,setNews] = useState([]);

useEffect(()=>{
        axios
        .get('https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=f6c7759742bd044954876b41f369da393bfc2ed928da6d34f364a3ca307ed81b')
        .then(res =>{
            setNews(res.data.Data);
            console.log(res.data.Data);
        })
        .catch(error => console.log(error));
    }, []) 
    


return(
    /*the main div */
  
    <div className="flex flex-col mt-10 my-0 py-0">
        <div className="flex ml-5">
        <h1 className="text-white justify-start text-xl mb-6 mt-5 lg:text-3xl ml-14">Latest News</h1>
        </div>
       {news.map(({id,title,imageurl,body,url}) =>(
           <NewsData key={id} 
                     title={title} 
                     image={imageurl} 
                     body={body}
                     url={url}
                     
            />
       )

       )}
        
    </div>
);
};

