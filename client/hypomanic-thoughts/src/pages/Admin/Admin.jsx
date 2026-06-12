import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import PostTile from "../../components/PostTile/PostTile"
import { useEffect, useState } from "react";
import styles from "../Admin/admin.module.css"
import api from "../../api/axios";
import { NavLink } from "react-router-dom";

const Admin = () => {


  const [ post, setPost ] = useState([]);

  useEffect(() => {

    const getPostsFromApi = async () => {

      const allPosts = await api.get("/api/posts");
      setPost(allPosts.data);
      
    };


    getPostsFromApi();
    
  },[]);









  return (
    <>
    <Header />

    <div className={styles.createPostBtnContainer}>
    <NavLink to="/admin/create-post" className={styles.navlink}>
      <div className={styles.createPostBtn}>Create Post</div>
    </NavLink>
    </div>

    {/* Outer Container Grid for posts */}
    <div className={styles.postTileContainer}>
    {/* Renders each post's title card */}
    {
      post.map(post => {
        //console.log(post._id)
        return <div key={post._id} className={styles.tileArea}><PostTile title={post.title} postId={post._id} /><button>Delete</button></div>
      })
    }


    </div>
    <Footer />
    </>
  )
}

export default Admin