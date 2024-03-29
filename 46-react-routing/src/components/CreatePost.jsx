import React, { useContext } from "react";
import { PostList } from "../store/post-list-store";
import { Form, redirect } from "react-router-dom";

function CreatePost() {
  // const { addPost } = useContext(PostList);

  return (
    <>
      <Form method="POST" className="create_post">
        <div className="mb-3 ">
          <label htmlFor="UserId" className="form-label">
            UserId
          </label>
          <input
            type="text"
            className="form-control"
            id="UserId"
            name="userId"
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
            name="title"
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
            name="body"
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
            id="reactions"
            name="reactions"
            placeholder="How many people reacted to this post"
          />
        </div>
        {/* <div className="mb-3 ">
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
        </div> */}

        <div className="mb-3 ">
          <label htmlFor="tags" className="form-label">
            Enter your hashtags here
          </label>
          <input
            rows={4}
            type="text"
            className="form-control"
            id="tags"
            name="tags"
            placeholder="Please enter tags using space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
    </>
  );
}

export async function CreatePostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
      // data.addPost(post);
    });

  return redirect("/");
}

export default CreatePost;
