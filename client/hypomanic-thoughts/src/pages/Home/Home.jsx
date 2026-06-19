import Header from "../../components/Header/Header.jsx"
import PostTile from "../../components/PostTile/PostTile.jsx";
import styles from "../Home/home.module.css";
import {useState, useEffect } from "react";
import api from "../../api/axios.js"
import Footer from "../../components/Footer/Footer.jsx";




const Home = () => {


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

        {/* Outer Container Grid for posts */}
        <div className={styles.postTileContainer}>

          {/* Renders each post's title card */}
          {
            post.map(post => {
              const date = new Date(post.createdOn).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric"
              })
              return <div key={post._id} className={styles.tileArea} style={{backgroundImage: `url("${post.image_Url || "/BaSingSe.avif"}")`}}><PostTile title={post.title} postId={post._id} date={date}/></div>
            })
          }

          
        </div>

        <Footer />

 
    </>
    
  )};

export default Home