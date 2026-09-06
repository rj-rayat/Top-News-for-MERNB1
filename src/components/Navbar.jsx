import Breaking from "./Breaking";
import Logo from "./Logo";
import { format } from "date-fns";
import MenuBar from "./MenuBar";


export default function Navbar() {
  return (
    <div className="max-w-7xl mx-auto">
        <div>
            <Logo></Logo>
            <p className="text-accent text-center mt-5 font-extrabold">{format(new Date(), "EEEE, dd, LLLL, uuuu ")}</p>
            <MenuBar></MenuBar>
           <Breaking></Breaking>
           
        </div>
    </div>
  )
}
