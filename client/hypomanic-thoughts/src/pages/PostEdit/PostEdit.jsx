import { useEffect, useState } from "react"
import Footer from "../../components/Footer/Footer.jsx"
import Header from "../../components/Header/Header.jsx"
import { useParams } from "react-router"
import api from "../../api/axios.js"
import CreatePostForm from "../../components/CreatePostForm/CreatePostForm.jsx"
import BackButton from "../../components/BackButton/BackButton.jsx"

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