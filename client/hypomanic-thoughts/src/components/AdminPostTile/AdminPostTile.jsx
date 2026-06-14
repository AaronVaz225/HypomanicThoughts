
import { NavLink } from "react-router-dom"
import styles from "../AdminPostTile/adminPostTile.module.css"


const PostTile = ({ title, postId }) => {



  return (

    <NavLink to={`/admin/post/${postId}`} className={styles.link}>
    <div className={styles.post}>
        <div className={styles.title}>{title}</div>
    </div>
    </NavLink>
     
  )
}

export default PostTile