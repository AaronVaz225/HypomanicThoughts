import styles from "../CreatePostForm/createPostForm.module.css"
import api from "../../api/axios"



//formData.get("fieldName") matches name on form
const CreatePostForm = () => {


    const handleSubmit = async (formData) => {
        

        const postTitle = formData.get("title")
        const postBody = formData.get("body")

        try {
            const postPayload = {
                title : postTitle,
                body : postBody
            }

            if (!postTitle) {
                alert("Please Enter A Title");
                return;
            }

            if (!postBody) {
                alert("Please Write a post before submitting!");
                return;
            }

            await api.post("/api/posts", postPayload);
            alert("Post Successful!")
            
        } catch (err) {
            console.error(`Error submitting post: ${err.message}`)
        }
    };






  return (

    <div>

    <form action={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title"/>

        <label htmlFor="body">Body</label>
        <input id="body" type="text" name="body"/>

        <input type="submit" value="Post" />
    </form>
    
    </div>
  )
}

export default CreatePostForm