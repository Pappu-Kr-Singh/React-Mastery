import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
        // console.log(data.posts.title);
      });

    return () => {
      console.log("cleanup useEffect");
      controller.abort();
    };
  }, []);

  // const handleGetPostsClick = () => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //     });
  // };

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && (
        // <WelcomeMessage onGetPostsClick={handleGetPostsClick} />
        <WelcomeMessage />
      )}

      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;
