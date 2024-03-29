import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const imgUrlElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const imgUrl = imgUrlElement.current.value;
    const tags = tagsElement.current.value.split("\\s+");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    imgUrlElement.current.value = "";
    tagsElement.current.value = " ";

    addPost(userId, postTitle, postBody, reactions, imgUrl, tags);
  };

  return (
    <>
      <form className="create_post" onSubmit={handleSubmit}>
        <div className="mb-3 ">
          <label htmlFor="UserId" className="form-label">
            UserId
          </label>
          <input
            type="text"
            className="form-control"
            id="UserId"
            ref={userIdElement}
            placeholder="Enter your user id here.."
          />
        </div>

        <div className="mb-3 ">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            ref={postTitleElement}
            placeholder="How are you feeling today"
          />
        </div>

        <div className="mb-3 ">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            rows={4}
            type="text"
            className="form-control"
            id="body"
            ref={postBodyElement}
            placeholder="Tell us more about it.."
          />
        </div>

        <div className="mb-3 ">
          <label htmlFor="reactions" className="form-label">
            Number of reactions
          </label>
          <input
            rows={4}
            type="text"
            className="form-control"
            id="body"
            ref={reactionsElement}
            placeholder="How many people reacted to this post"
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="img" className="form-label">
            Image Url
          </label>
          <input
            rows={4}
            type="text"
            className="form-control"
            id="img"
            ref={imgUrlElement}
            placeholder="Enter your image url here"
          />
        </div>

        <div className="mb-3 ">
          <label htmlFor="tags" className="form-label">
            Enter your hashtags here
          </label>
          <input
            rows={4}
            type="text"
            className="form-control"
            id="tags"
            ref={tagsElement}
            placeholder="Please enter tags using space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
}

export default CreatePost;
