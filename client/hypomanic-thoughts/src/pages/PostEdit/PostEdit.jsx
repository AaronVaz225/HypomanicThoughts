import { useEffect, useState } from "react"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { useParams } from "react-router"
import api from "../../api/axios"
import CreatePostForm from "../../components/CreatePostForm/CreatePostForm"
import BackButton from "../../components/BackButton/BackButton"

const PostEdit = () => {
    const [ post, setPost ] = useState(null);
    const { postId } = useParams();

    useEffect(() => {


        const getPostFromApi = async () => {
            try {
                const postData = await api.get(`/api/posts/${postId}`)
                setPost(postData.data);
                
               
                

            } catch (err) {
                console.error(`Error Getting Post To Edit: ${err}`)
            }
        }

        getPostFromApi();

    },[postId])

    console.log(post)
    


  return (
    <div>
    <Header />
    <BackButton />
    {post && <CreatePostForm post={post} />}
    <Footer />
    </div>
  )
}

export default PostEdit