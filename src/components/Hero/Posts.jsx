import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState(""); // Added search state

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  // Filter posts based on the search term
  const filteredPosts = posts.filter((post) =>
    post.body.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="posts">
        <div className="title">
          <h1>Our Latest Posts</h1>
          <form>
            <input
              required
              type="search"
              placeholder="Search"
              id="search"
              value={search} // Bind input value to search state
              onChange={(e) => setSearch(e.target.value)} // Update search state on input change
            />
            <button type="button">🔍</button>
          </form>
        </div>
        <div className="cards">
          {filteredPosts.map((post) => (
            <div className="card" key={post.id}>
              <div className="card-img"></div>
              <p className="id">ID: {post.id}</p>
              <h5>{post.body}</h5>
              <p className="data">Floyd Miles 3 Days Ago</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
