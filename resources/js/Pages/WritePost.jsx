import React from "react";
import Header from "../components/Header";
import PostForm from "../components/PostForm";
function WritePost() {
    return (
        <div className="form-container container-fluid">
            <Header></Header>
            <PostForm></PostForm>
        </div>
    );
}

export default WritePost;
