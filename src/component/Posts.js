

// export default Posts
import React, { useContext } from "react";
import { ContextProvider } from "../global/Context";
import { FaTrashAlt } from "react-icons/fa";

// import Comment from "./Comments";
const Posts = () => {
  const { posts } = useContext(ContextProvider);
  const Deletepost=(e)=>{
    e.preventDefault();
    console.log("post deleted");
  }
  return (
    <>
      {posts.map((post) => (
        <div className="posts" key={post.id}>
          
          <div className="posts__img">
            <img src={post.image} alt={post.image} />
            <div className="post__delete" onChange="">
    <a href="" onClick={Deletepost}>  < FaTrashAlt className="delete" /></a>
      </div>
          </div>
         
        </div>
      ))}
      
    </>
  );
};

export default Posts;
