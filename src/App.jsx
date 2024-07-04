import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Posts from "./components/Hero/Posts";
import PostsDetails from "./pages/PostsDetails";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Posts />
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postsId" element={<PostsDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
