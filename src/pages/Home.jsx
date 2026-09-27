import { Suspense, use } from "react";
import NewsCard from "../components/NewsCard";


const promise = fetch('/news.json').then(res => res.json());
export default function Home() {
  const data = use(promise);
  return (
    <div>

      <Suspense fallback={<progress className="progress w-56"></progress>}>
        {
          data.map(item => <NewsCard key={item.id} news ={item}></NewsCard>)
        }
      </Suspense>
      
    </div>
  )
}
