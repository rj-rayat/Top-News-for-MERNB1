import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { BiRightArrow } from "react-icons/bi";

export default function Login() {
  const navigate = useNavigate()
  const location = useLocation()

   const {signIn} = useContext(AuthContext)
    const loginHandler = (e)=>{
      e.preventDefault()
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email, password)
  
      signIn(email, password)
      .then(()=>{
      
        navigate(location.state || '/')
      }).catch(err =>{
        console.log(err)
      })
        
      
    }
  return (
    <div className="flex justify-center h-screen items-center">
        <form onSubmit={loginHandler} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend mx-auto text-2xl">Login</legend>

            <label  className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" />

            <button type="submit" className="btn btn-neutral mt-4">Login</button>
            <Link to='/' className="btn btn-warning mt-1">Back to Home <BiRightArrow/> </Link>
            

            <p>Don't have account ? <span className="text-blue-600"> <Link to={'/register'}>Register</Link> </span> </p>
        </form>
    </div>
  )
}
