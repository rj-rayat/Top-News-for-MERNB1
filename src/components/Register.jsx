import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { BiRightArrow } from "react-icons/bi";

export default function Register() {
  const {createUser} = useContext(AuthContext)
  const registerHandler = (e)=>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    createUser(email, password)
    .then((userCredential)=>{
      const user = userCredential.user
      console.log("After creating user", user)
    }).catch(err =>{
      console.log(err)
    })
      
    
  }
  return (
    <div className="flex justify-center h-screen items-center">
        <form onSubmit={registerHandler} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend text-2xl mx-auto">Register</legend>

            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" />

            <button type="submit" className="btn btn-neutral mt-4">Sign up</button>
            <Link to='/' className="btn btn-warning mt-1">Back to Home <BiRightArrow/> </Link>

            <p>have account ? <span className="text-blue-600"> <Link to={'/login'}>Login</Link> </span> </p>
        </form>
    </div>
  )
}
