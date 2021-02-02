import React from "react";
import Header from "../components/Header";
import PostCardContainer from "../components/PostCardContainer";
import HamburguerMenu from "../components/HamburguerMenu";
import Footer from "../components/Footer";

function Posts({ posts }) {
    return (
        <div>
            <Header></Header>
            <PostCardContainer posts={posts}></PostCardContainer>
            <HamburguerMenu></HamburguerMenu>
            <Footer></Footer>
        </div>
    );
}

export default Posts;
