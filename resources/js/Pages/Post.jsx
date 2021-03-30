import React from "react";
import Header from "../components/Header";
import FullPost from "../components/FullPost";
import FloatingUser from "../components/FloatingUser";
import Comments from "../components/Comments";

function Post({ author, post, comments }) {
    return (
        <div>
            <Header></Header>
            <div className="post-container row container justify-content-center px-0 mx-0 mt-5">
                <FloatingUser user={author}></FloatingUser>
                <div className="container-fluid col-12 col-sm-12 col-md-8 col-lg-8 row justify-content-center">
                    <FullPost post={post}></FullPost>
                    <Comments comments={comments} post={post}></Comments>
                </div>
            </div>
        </div>
    );
}
export default Post;
