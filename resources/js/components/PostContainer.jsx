import React from "react";
import Post from "./Post";

function PostContainer({ posts }) {
    console.log(posts[0]);
    return (
        <div className="container col-12">
            {posts.map((post) => (
                <Post post={post}></Post>
            ))}
        </div>
    );
}

export default PostContainer;
