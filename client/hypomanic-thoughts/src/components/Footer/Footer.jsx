import { NavLink } from "react-router-dom"
import styles from "../Footer/footer.module.css"

const Footer = () => {
  return (
    <>
    <div className={styles.footer}>Dis Gunna Be Da Footer</div>
    <NavLink to="/admin/create-post" >Create Post </NavLink>
    </>
  )
}

export default Footer