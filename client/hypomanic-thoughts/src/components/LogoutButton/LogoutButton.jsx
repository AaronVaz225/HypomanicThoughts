import { useNavigate } from "react-router-dom"
import api from "../../api/axios"


const LogoutButton = () => {
    const navigate = useNavigate();



    const handleClick = () => {
        try {
            api.post("api/auth/logout")
            console.log("Logged Out Successfully")

             navigate("/login", {replace: true});

        } catch (err) {
            console.error(`Error occured while logging out: ${err}`)
        }
    }



  return (
    <div>
    <button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default LogoutButton