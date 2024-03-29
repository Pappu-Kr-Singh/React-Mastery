import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

function Post({ post }) {
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div className="card post-card post" style={{ width: "28rem" }}>
        <div className="card-body card_img">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded bg-danger reactions"
              onClick={() => deletePost(post.id)}
            >
              <MdDelete />
            </span>
          </h5>
          <img src={post.img} alt="" />

          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hashtags">
              {tag}
            </span>
          ))}
        </div>
        <div className="alert alert-success mx-2" role="alert">
          This post has been reacted by {post.reactions}
        </div>
      </div>
    </>
  );
}

export default Post;
