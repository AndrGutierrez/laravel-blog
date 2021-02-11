import React from "react";
import Header from "../components/Header";
import PostCardContainer from "../components/PostCardContainer";
import HamburguerMenu from "../components/HamburguerMenu";
import Footer from "../components/Footer";

function Posts({ posts, csrf_token }) {
    return (
        <div className="posts-container">
            <Header></Header>
            <PostCardContainer
                posts={posts}
                csrf_token={csrf_token}
            ></PostCardContainer>
            <HamburguerMenu></HamburguerMenu>
            <Footer></Footer>
        </div>
    );
}

export default Posts;
