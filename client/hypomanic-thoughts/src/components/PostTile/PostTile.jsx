/*
This component is the post tile that shows up on the home page. 
It should show the picture and title. 
It should also be clickable, taking you to the page that lets you read that post. 
*/



import styles from "../PostTile/postTile.module.css"


const PostTile = ({ title }) => {
  return (
    <div className={styles.post}>
        <div className={styles.title}>{title}</div>
    </div>
  )
}

export default PostTile