
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";



export default function Root() {
  return (
    <div>
        <header>
                    <Navbar></Navbar>
                    
                </header>
        
        
        
                <main>
                    <Outlet></Outlet>
                </main>
    </div>
  )
}
