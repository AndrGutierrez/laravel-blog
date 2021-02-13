import React, { useState } from "react";
import PostCard from "./PostCard";
import Button from "./Button";
import Modal from "./Modal";

function PostCardContainer({ posts, csrf_token }) {
    const [displayed, setDisplayed] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    function DisplayModal(post) {
        setDisplayed(true);
        setSelectedPost(post);
        // console.log(displayed, post.title);
    }

    function handleClickEdit() {
        console.log("I was clicked");
    }

    return (
        <div className="background container-fluid col-12">
            <Modal
                post={selectedPost}
                csrf_token={csrf_token}
                displayed={displayed}
                setDisplayed={setDisplayed}
            ></Modal>
            {posts.map((post) => (
                <PostCard post={post} key={post.id} csrf_token={csrf_token}>
                    <button
                        className="btn btn-success edit post-buttoncontainer__button col-12"
                        type="button"
                        onClick={handleClickEdit}
                    >
                        <div className="button-text">Edit</div>
                        <div className="animated-text d-none">Edit</div>
                    </button>
                    <button
                        className="btn btn-danger delete post-buttoncontainer__button col-12"
                        type="button"
                        onClick={() => DisplayModal(post)}
                    >
                        <div className="animated-text d-none">Delete</div>
                        <div className="button-text">Delete</div>
                    </button>
                </PostCard>
            ))}
        </div>
    );
}

export default PostCardContainer;
