import styles from "../CreatePostForm/createPostForm.module.css"
import api from "../../api/axios"
import Footer from "../Footer/Footer"
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import DropzoneButton from "../DropZone/DropZoneButton"
import { useEffect, useState } from "react";

//Mantine Code-----------------------------------------------
// Mantine Styles (has to be in this order)
//import '@mantine/core/styles.css';
//import '@mantine/tiptap/styles.css';
import TextEditor from "../TextEditor/TextEditor";
//-----------------------------------------------------------------------------------------




const CreatePostForm = ({ post = null }) => { 
    const editor = useEditor({
        extensions: [StarterKit],
        content: '<p>Start typing your thoughts here...</p>', 
      });

    const [ imageUrl, setImageUrl ] = useState( post.image_Url || ""); 
     

    const handleSubmit = async (formData) => {
        

        const postTitle = formData.get("title")
        const postBody = JSON.stringify(editor.getJSON());

       

        try {

            if (post) {
                try {
                    console.log("#TODO: Make API request :)")
                } catch (err) {
                    console.error(`Error editing post: ${err}`)
                }
            }

            const postPayload = {
                title : postTitle,
                body : postBody,
                image_Url: imageUrl,
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

    
    useEffect(() => {
        if (post && editor) {
            editor.commands.setContent(JSON.parse(post.body))
            
        }
    },[editor])


  return (

    <>
    <div className={styles.dropzoneContainer}>
     <DropzoneButton setImageUrl={setImageUrl}/>
    </div>

    <div className={styles.imagePreviewContainer}>
    {imageUrl && <img className={styles.imagePreview} src={imageUrl} />}
    </div>

    <div>

        <form action={handleSubmit}>
            <div className={styles.titleContainer}>
                <label htmlFor="title" className={styles.title}>Title</label> {/*TODO: { postTitle ? `${postTitle}` : "Title"} */}
            </div>
            <div className={styles.titleTextAreaContainer}>
                <input id="title" type="text" name="title" className={styles.titleTextArea} defaultValue={post.title || ""}/>
            </div>


            
                <div className={styles.textEditor}>
                    <TextEditor editor={editor} />
                </div>
            

        <input type="submit" value="Post" className={styles.submitButton}/>
        </form>
    
    </div>

    

    </>
  )
}

export default CreatePostForm