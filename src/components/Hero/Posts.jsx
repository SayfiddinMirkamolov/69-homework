import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  const [todos, setTodos] = useState([]); 
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="posts">
        <div className="title">
          <h1>Our Latest Posts</h1>
          <form>
            <input required type="search" placeholder="Search" id="search" />
            <button htmlFor="search"  variant="warning"
          
          onClick={() => handleUpdateTodo(todo.id, prompt("New title", todo.title))}>🔍</button>
          </form>
        </div>
        <div className="cards">
          {posts.map((post) => (
            <div className="card">
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
