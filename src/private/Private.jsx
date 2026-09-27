import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate, useLocation } from "react-router";


export default function Private({children}) {
    const location = useLocation()
    const {user, loading} = useContext(AuthContext);

    if (loading){
        return <> <span className="loading loading-spinner text-error"></span> </>
    }
    if (user){
        return children;
        
    }else{
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }
}
