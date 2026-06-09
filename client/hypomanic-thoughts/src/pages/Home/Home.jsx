import Header from "../../components/Header/Header.jsx"
import PostTile from "../../components/PostTile/PostTile.jsx";


const Home = () => {
  return (
    <>
        <Header />
        <div className="posts-container">
          <PostTile />
          <PostTile />
          <PostTile />
          <PostTile />
          <PostTile />
          <PostTile />
        </div>
    </>
    
  )};

export default Home