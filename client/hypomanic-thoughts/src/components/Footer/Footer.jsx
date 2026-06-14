import { NavLink } from "react-router-dom"
import styles from "../Footer/footer.module.css"

const Footer = () => {
  return (
    <>
    <div className={styles.footer}>Dis Gunna Be Da Footer</div>
    <NavLink to="/admin/" >Admin</NavLink>
    </>
  )
}

export default Footer