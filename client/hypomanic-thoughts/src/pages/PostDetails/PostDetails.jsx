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


//Test Editor Imports
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
// import EditorView from "../../components/EditorView/EditorView"
// import { MantineProvider } from '@mantine/core';
 



const PostDetails = () => {

  //gets the post id from the URL
  let { postId } = useParams()
  const [ post, setPost ] = useState({});
  


  useEffect(() => {

    const getPostBodyFromApi = async () => {
      const singlePost = await api.get(`/api/posts/${postId}`)

      setPost(singlePost.data)

    }

    getPostBodyFromApi();
    

  },[postId]);

 



  const editor = useEditor({
    extensions: [StarterKit],
    content:  "",
    editable: false,
  });



  /*
  Explanation of this use effect. editor takes a moment to actually be created. So in a way its kind of async.
  So thats also why it needs to be in the dependency array. you cant parse post.body if no editor exists. and 
  also if post.body runs before it is filled with data from the api call, it will just be a blank canvas. 
  */

  useEffect(() => {
    if ( editor && post.body ){
    editor.commands.setContent(JSON.parse(post.body))
    }
  },[editor, post.body])

 
  return (
    <>
    <Header />
    <div className={styles.container}>
      <div className={styles.blogTitle}>{post.title}</div>
      <EditorContent editor={editor} />
    </div>
    <Footer />
    </>
  )
}

export default PostDetails