
import { NavLink } from "react-router-dom"
import styles from "../PostTile/postTile.module.css"


const PostTile = ({ title, postId }) => {



  return (

    <NavLink to={`/admin/post/${postId}`} className={styles.link}>
    <div className={styles.post}>
            <div className={styles.title}><div className={styles.textBox}>{title}</div></div>
        </div>
    </NavLink>
     
  )
}

export default PostTile