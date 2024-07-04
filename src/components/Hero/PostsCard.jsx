import { Link, useNavigate } from "react-router-dom";
import "./Posts.scss";

const PostsCard = ({ posts, handlePostsDetails }) => {
  const navigate = useNavigate();
  return (
    <div>
      <img
        src={i1}
        className="card-img-top h-50 object-fit-cover"
        alt={posts.title}
      />
      <div className="card-body">
        <h5 className="card-title text-truncate">{posts.title}</h5>
        <p className="card-text text-truncate">{posts.description}</p>
        <Link to={`/posts/${posts.id}`} className="butt">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          neque quod vel sunt maiores cupiditate quasi dolorem quae, itaque
          officiis odio impedit placeat necessitatibus, ex temporibus dolores?
          Eligendi, quasi eos!
        </Link>
      </div>
    </div>
  );
};

export default PostsCard;
