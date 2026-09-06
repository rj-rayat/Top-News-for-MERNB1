import { BiUser } from "react-icons/bi";

export default function MenuBar() {
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
    <a className="btn btn-primary"> <BiUser></BiUser> Login</a>
  </div>
</div>
   
  )
}
