import styles from "../CreatePostForm/createPostForm.module.css"
import api from "../../api/axios"


//Mantine Code-----------------------------------------------
import { MantineProvider } from '@mantine/core';            
// Mantine Styles
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import TextEditor from "../TextEditor/TextEditor";
//-----------------------------------------------------------------------------------------




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

    <>

    <div>
    <form action={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title"/>

        <label htmlFor="body">Body</label>
        <input id="body" type="text" name="body"/>

        <input type="submit" value="Post" />
    </form>

    <MantineProvider >
        <TextEditor />
    </MantineProvider>
    </div>

    

    </>
  )
}

export default CreatePostForm