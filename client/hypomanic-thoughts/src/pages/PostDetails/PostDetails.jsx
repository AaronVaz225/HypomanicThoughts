/*
  Since i already got the posts from the databse, including the body, i could restructure this to be a child component of PostTile.jsx perhaps. 
  Then i wouldn't need to make another database request for the post body, it could just be passed as a prop. But for simplicities sake, and to 
  practice using useParams and axios I kept it this way.
*/
import { useState, useEffect } from "react"
import Header from "../../components/Header/Header"
import { useParams } from "react-router"
import api from "../../api/axios"

const PostDetails = () => {

  //gets the post id from the URL
  let { postId } = useParams()

  
  const [ postBody, setPostBody ] = useState("");

  useEffect(() => {

    const getPostBodyFromApi = async () => {
      const singlePost = await api.get(`/api/posts/${postId}`)

      setPostBody(singlePost.data.body)

    }

    getPostBodyFromApi();
    

  },[postId]);



  return (
    <>
    <Header />
    <div>PostDetails {postBody}</div>
    </>
  )
}

export default PostDetails