import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessege from "./WelcomeMessege";
import Post from "./Post";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  };

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessege onGetPostsClick={handleGetPostsClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
