import React from "react";
import Post from "./Post";

function PostContainer({ posts }) {
    return (
        <div className="container-fluid col-12">
            {posts.map((post) => (
                <Post post={post} key={post.id}></Post>
            ))}
        </div>
    );
}

export default PostContainer;
