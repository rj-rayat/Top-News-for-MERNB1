import { useContext } from "react";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

export default function MenuBar() {

  const {user} = useContext(AuthContext)

   const {signedOut} = useContext(AuthContext)
  const signOutHandler = ()=>{
    signedOut()
  }

  return (

        <div className="navbar bg-base-100 ">

  <div className="navbar-start hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Top</a></li>
      <li>
        <details>
          <summary>Division</summary>
          <ul className="p-2 bg-base-100 w-40 z-1">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Map</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <button onClick={signOutHandler} className="btn btn-primary"> Signout</button> : <Link to={'/login'} className="btn btn-primary"> <BiUser></BiUser> Login</Link>
    }
    
  </div>
</div>
   
  )
}
