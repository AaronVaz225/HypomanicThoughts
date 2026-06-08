//Contains Title and NavBar
import { NavLink } from "react-router-dom"
import "./header.css"



const Header = () => {
  return (
    <header className="header-container">
        {/*------------Nav Bar-------------*/}
        <nav className="nav-bar">
        <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/about" >
            About
          </NavLink>

          <NavLink to="/Contact" >
            Contact
          </NavLink>
        </nav>


        {/*------------Title-------------*/}
        <div className="title">
          Hypo 
          <div className="manic">MANIC </div> 
          Thoughts
        </div>
    </header>
    
  )
}

export default Header