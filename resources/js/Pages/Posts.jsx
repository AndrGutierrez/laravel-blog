import React from "react";
import Header from "../components/Header";
import PostContainer from "../components/PostContainer";
import HamburguerMenu from "../components/HamburguerMenu";
import Footer from "../components/Footer";

function Posts({ posts }) {
    return (
        <div>
            <Header></Header>
            <PostContainer posts={posts}></PostContainer>
            <HamburguerMenu></HamburguerMenu>
            <Footer></Footer>
        </div>
    );
}

export default Posts;
