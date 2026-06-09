/*
This component is the post tile that shows up on the home page. 
It should show the picture and title. 
It should also be clickable, taking you to the page that lets you read that post. 
*/


/*
#TODO
-create simple post tile just with html and css
-create a simulated data file to get the logic of maping out the post content correct
-fetch the actual post data from the db

*/
import styles from "../PostTile/postTile.module.css"


const PostTile = () => {
  return (
    <div className={styles.postTileContainer}>
        <img src="/BaSingSe.jpg" style={{ width: "400px", heigth: "400px" }}/>
    </div>
  )
}

export default PostTile