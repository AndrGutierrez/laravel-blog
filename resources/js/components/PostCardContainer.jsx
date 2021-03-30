import React, { useState } from "react";
import PostCard from "./PostCard";
import { Inertia } from "@inertiajs/inertia";
import Modal from "./Modal";

function PostCardContainer({ posts, csrf_token }) {
    const [displayed, setDisplayed] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    function DisplayModal(post) {
        setDisplayed(true);
        setSelectedPost(post);
        // console.log(displayed, post.title);
    }

    function handleClickEdit(post) {
        // TODO
        console.log(`posts/edit/${post.id}/${post.slug}`);
        Inertia.get(`posts/edit/${post.id}/${post.slug}`);
    }

    return (
        <div className="container-fluid col-12">
            <Modal
                post={selectedPost}
                csrf_token={csrf_token}
                displayed={displayed}
                setDisplayed={setDisplayed}
            ></Modal>
            {posts.map((post) => (
                <PostCard post={post} key={post.id} csrf_token={csrf_token}>
                    <button
                        className="btn btn-outline-success button my-1 col-12 col-sm-5 col-md-5 col-lg-12"
                        type="button"
                        onClick={() => handleClickEdit(post)}
                    >
                        <div className="button-text">Edit</div>
                        <div className="animated-text d-none">Edit</div>
                    </button>
                    <button
                        className="btn btn-outline-danger button  col-12 col-sm-5 col-md-5 col-lg-12"
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
