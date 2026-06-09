import Header from "../../components/Header/Header.jsx"
import PostTile from "../../components/PostTile/PostTile.jsx";
import styles from "../Home/home.module.css";
import sampleData from "../../components/PostTile/sample.js";






const Home = () => {
  return (
    <>
        <Header />
        <div className={styles.postTileContainer}>

          {
            sampleData.map(post => {
              return <div className={styles.tileArea}><PostTile key={post.id} title={post.title} /></div>
            })
          }

          
        </div>
    </>
    
  )};

export default Home