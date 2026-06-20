import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/axios.js";

const ProtectedRoutes = () => {
    const [ isAuthenticated, setIsAuthenticated ] = useState(null);
    const location = useLocation();

    useEffect(() => {
      const checkAuth = async () => {
        try {
          await api.get("api/auth/me");
          setIsAuthenticated(true)
        } catch (err) {
          console.log(`User Is Not Authenticated: ${err}`)
          setIsAuthenticated(false);
        }
      }

      checkAuth();
    },[location.pathname])



    if (isAuthenticated === null) return null; //Could add a loding thing
    if (!isAuthenticated) return <Navigate to="/login" replace />;

    return <Outlet />


  
}

export default ProtectedRoutes