import styles from "../CreatePostForm/createPostForm.module.css"
import api from "../../api/axios"
import Footer from "../Footer/Footer"


//Mantine Code-----------------------------------------------
import { MantineProvider } from '@mantine/core';            
// Mantine Styles (has to be in this order)
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
            <div className={styles.titleContainer}>
                <label htmlFor="title" className={styles.title}>Title</label>
            </div>
            <div className={styles.titleTextAreaContainer}>
                <input id="title" type="text" name="title" className={styles.titleTextArea}/>
            </div>

            <label htmlFor="body">Body</label>
            <input id="body" type="text" name="body"/>

        
        

            <MantineProvider >
                <div className={styles.textEditor}>
                    <TextEditor />
                </div>
            </MantineProvider>

        <input type="submit" value="Post" className={styles.submitButton}/>
        </form>
    
    </div>

    <Footer />

    </>
  )
}

export default CreatePostForm