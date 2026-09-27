import { BiRightArrow } from "react-icons/bi";
import { Link, useLoaderData, useParams } from "react-router";
import RightBar from "../layout/RightBar";
import Navbar from "./Navbar";

export default function Details() {
    const {id} = useParams();

    const data = useLoaderData()
    console.log(id)
    console.log(data)

    const filteredNews = data.find(news => news.id == id);
    console.log(filteredNews)

    
  return (
    <div>
        <header>
                    <Navbar></Navbar>
                    
        </header>
       <div className="max-w-7xl mx-auto py-5">
         <Link to='/' className="btn btn-warning mt-1">Back to Home <BiRightArrow/> </Link>
       </div>
         <main className="grid grid-cols-1 md:grid-cols-12 max-w-7xl mx-auto gap-2 ">
            
            <section className="col-span-9">
                <img className="w-full" src={filteredNews.image_url } alt="" />
                <h1 className="text-4xl mt-5 ">{filteredNews.title}</h1>
               <p className="mt-5">{
                filteredNews.details
               }</p>
            </section>

            <aside className="col-span-3 sticky top-10 h-fit">
                <RightBar></RightBar>
            </aside>
        </main>

    </div>
  )
}
