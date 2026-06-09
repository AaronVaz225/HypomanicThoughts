/*
This component is the post tile that shows up on the home page. 
It should show the picture and title. 
It should also be clickable, taking you to the page that lets you read that post. 
*/


/*
#TODO
-create simple post tile just with html and css ✅
-create a simulated data file to get the logic of maping out the post content correct 
-fetch the actual post data from the db 
-Upload images with "Cloudinary".

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