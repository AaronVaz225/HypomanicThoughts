import { useState } from "react";
 



const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");




  return (
    <div>
        <form>
            <label htmlFor="email">Email: </label>
            <input 
                type="text" 
                id="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                 />

            <label htmlFor="password">Password: </label>
            <input 
                type="text" 
                id="password" 
                name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                 />
        </form>
    </div>
  )
}

export default LoginForm