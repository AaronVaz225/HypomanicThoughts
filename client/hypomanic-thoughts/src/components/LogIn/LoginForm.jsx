import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import styles from "../LogIn/loginForm.module.css"
 



const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginAction = async (e) => {
      e.preventDefault();
   

      if (!email || !password) {
        alert("Please Enter Email and Password");//#TODO: make toast message
      }

      const payload = {
        email: email,
        password: password,
      }

      try {
        await api.post("/api/auth/login", payload);

        navigate("/admin", {replace: true}) //replace true replaces the history so user cant click back btn to login
        
      } catch (err) {
        console.error(`Error Occured During Login: ${err}`);
        alert("Wrong Email or password or an error occured"); //#TODO: add better error handling
      }



    }


  return (
    <div className={styles.loginContainer}>
        <form onSubmit={loginAction}>
          <div className={styles.emailContainer}>
            <label htmlFor="email">Email: </label>
            <input 
                type="text" 
                id="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                 />
            </div>


          <div className={styles.passwordContainer}>
            <label htmlFor="password">Password: </label>
            <input 
                type="password" 
                id="password" 
                name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                 />
            </div>
            <button type="submit" className={styles.logInBtn}>Log In</button>
        </form>
    </div>
  )
}

export default LoginForm