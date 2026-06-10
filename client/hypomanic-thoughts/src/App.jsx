import { Routes, Route } from "react-router-dom";
import Admin from './pages/Admin/Admin.jsx';
import CreatePost from './pages/CreatePost/CreatePost.jsx';
import Home from './pages/Home/Home.jsx';
import PostDetails from "./pages/PostDetails/PostDetails.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import About from './pages/About/About.jsx';




const App = () => {
  return ( 
    <>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<PostDetails />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/create-post" element={<CreatePost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App