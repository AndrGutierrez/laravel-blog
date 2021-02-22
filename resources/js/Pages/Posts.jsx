import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CreateButton from "../components/CreateButton";
import HamburguerMenu from "../components/HamburguerMenu";
import PostCardContainer from "../components/PostCardContainer";

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
            <CreateButton></CreateButton>
        </div>
    );
}

export default Posts;
