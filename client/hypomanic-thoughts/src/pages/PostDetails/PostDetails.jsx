/*
  Since i already got the posts from the databse, including the body, i could restructure this to be a child component of PostTile.jsx perhaps. 
  Then i wouldn't need to make another database request for the post body, it could just be passed as a prop. But for simplicities sake, and to 
  practice using useParams and axios I kept it this way.
*/
import { useState, useEffect } from "react"
import Header from "../../components/Header/Header"
import { useParams } from "react-router"
import api from "../../api/axios"
import styles from "../PostDetails/postDetails.module.css"
import Footer from "../../components/Footer/Footer"

const PostDetails = () => {

  //gets the post id from the URL
  let { postId } = useParams()

  
  const [ postBody, setPostBody ] = useState("");

  useEffect(() => {

    const getPostBodyFromApi = async () => {
      const singlePost = await api.get(`/api/posts/${postId}`)

      setPostBody(singlePost.data)

    }

    getPostBodyFromApi();
    

  },[postId]);



  return (
    <>
    <Header />
    <div className={styles.container}>
      <div className={styles.blogTitle}>{postBody.title}</div>
      <div className={styles.blogBody}>{postBody.body}</div>
    </div>
    <Footer />
    </>
  )
}

export default PostDetails