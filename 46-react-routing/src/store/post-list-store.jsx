import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    // DEFAULT_POST_LIST
    []
  );

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Goint To Spain",
//     body: "Hii, Freinds, I am Going to spain for my bussiness meeting, Hope to add some value in lifebahn community",
//     reactions: 1111,
//     userId: "user-10",
//     img: "https://scontent.fagr1-1.fna.fbcdn.net/v/t39.30808-6/341873248_929340094985838_7926513746576101475_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gvriyielcoMAX-T5wuS&_nc_ht=scontent.fagr1-1.fna&oh=00_AfCC-ejrtwRwzSNZE3d0vzBiY7D1P_P77eFgcUgvdABJ7w&oe=65F891A7",

//     tags: ["Vacation", "Spain", "Enjoying"],
//   },

//   {
//     id: "2",
//     title: "New Life",
//     body: "Hii there, Entering in my dream life to enjoy on my own, Hoping that I will love that life",
//     reactions: 2211,
//     img: "https://scontent.fagr1-1.fna.fbcdn.net/v/t39.30808-6/412269069_1039674750651368_8982313222460064824_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0fe96I-VGZkAX9C_FLZ&_nc_ht=scontent.fagr1-1.fna&oh=00_AfCgoEXZ8cZjvPL4x2DP0oy4P7p4P9YUfXzXpDdN612pIg&oe=65F751FB",
//     userId: "user-29",
//     tags: ["New Life", "Freedom", "Enjoying"],
//   },
// ];

export default PostListProvider;
