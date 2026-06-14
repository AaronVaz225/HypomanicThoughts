//Contains Title and NavBar
import { NavLink } from "react-router-dom"
import styles from "./header.module.css"



const Header = () => {
  return (
    <header className={styles.headerContainer}>
        {/*------------Nav Bar-------------*/}
        <nav className={styles.navBar}>
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


        {/*------------Title-------------*/}
        <div className={styles.title}>
          Hypo 
          <div className={styles.manic}>MANIC </div> 
          Thoughts
        </div>
    </header>
    
  )
}

export default Header