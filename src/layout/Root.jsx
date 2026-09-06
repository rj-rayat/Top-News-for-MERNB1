import { Outlet } from "react-router";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import Navbar from "../components/Navbar";
import { Suspense } from "react";

const categoryPromise = fetch('categories.json').then(res => res.json())
export default function Root() {
  return (
    <div className="">
        <header>
            <Navbar></Navbar>
            
        </header>



        <main className="grid grid-cols-1 md:grid-cols-12 max-w-7xl mx-auto gap-2 ">
            <aside className="col-span-3">
                <Suspense fallback={<progress className="progress w-56"></progress>} >
                    <LeftBar categoryPromise={categoryPromise}></LeftBar>
                </Suspense>
            </aside>
            <section className="col-span-6">
                <Outlet></Outlet>
            </section>

            <aside className="col-span-3">
                <RightBar></RightBar>
            </aside>
        </main>
    </div>
  )
}
