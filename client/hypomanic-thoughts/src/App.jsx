import { Routes, Route } from "react-router-dom";
import Admin from './pages/Admin.jsx';
import CreatePost from './pages/CreatePost.jsx';
import Home from './pages/Home.jsx';
import PostDetails from "./pages/PostDetails.jsx";
import Contact from "./pages/Contact.jsx";
import About from './pages/About.jsx';




const App = () => {
  return ( 
    <>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostDetails />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/create-post" element={<CreatePost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App