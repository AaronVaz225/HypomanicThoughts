//Contains Title and NavBar
import { NavLink, useLocation } from "react-router-dom"
import styles from "./header.module.css"
import LogoutButton from "../LogoutButton/LogoutButton"
import { useState } from "react";




const Header = () => {
  const location = useLocation();
  const isAdmin = location.pathname == "/admin/" ? true : false;

  const [showAdmin, setShowAdmin] = useState(false);
    document.addEventListener('keydown', (e) => {
      if (e.key === "|") {
        setShowAdmin(true)
      }
  
    })

  return (
    <header className={styles.headerContainer}>

        {/*------------Nav Bar-------------*/}
        <nav className={styles.navBar}>
        {showAdmin && <NavLink to="/admin/" style={( {isActive} ) => isActive ? {textDecoration : "underline"} : {textDecoration : "none" }}>
        Admin
        </NavLink>}

        <NavLink to="/" style={( {isActive} ) => isActive ? {textDecoration : "underline"} : {textDecoration : "none" }} end>
            Home
          </NavLink>

          <NavLink to="/about" style={( {isActive} ) => isActive ? {textDecoration : "underline"} : {textDecoration : "none" }}>
            About
          </NavLink>

          <NavLink to="/Contact" style={( {isActive} ) => isActive ? {textDecoration : "underline"} : {textDecoration : "none" }}>
            Contact
          </NavLink>
        </nav>

        {isAdmin && <LogoutButton />}


        {/*------------Title-------------*/}
        <div className={styles.title}>
          Hypo 
          <img 
          src="/maniclogo.png"
          alt="Manic"
          className={styles.image}
          />
          Thoughts
        </div>

        <img src="/subtitle.png" alt="subtitle" className={styles.subtitle} />
    </header>
    
  )
}

export default Header