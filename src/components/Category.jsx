import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router"
import NewsCard from "./NewsCard";

export default function Category() {
  
    const {id} = useParams();
    const data = useLoaderData()
    const [news, setNews] = useState([])

    useEffect(()=>{
        if (id == 0){
            setNews(data)
            return;
        }else if(id == 1){
            const newsByCategory = data.filter(item=> item.others.is_today_pick==true);
            setNews(newsByCategory)
        }else{
            const newsByCategory = data.filter(item=> item.category_id == id);
            setNews(newsByCategory)
        }
        
    },[data, id])
  return (
    <div>
        {
            news.map(item => <NewsCard key={item.id} news ={item}></NewsCard>)
        }
    </div>
  )
}
