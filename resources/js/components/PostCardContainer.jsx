import React, { useState } from "react";
import PostCard from "./PostCard";
import Button from "./Button";
import Modal from "./Modal";

function PostCardContainer({ posts }) {
    const [displayed, setDisplayed] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    function DisplayModal(post) {
        setDisplayed(true);
        setSelectedPost(post);
        console.log(displayed, post.title);
    }
    function handleClickEdit() {
        console.log("I was clicked");
    }
    return (
        <div className="background container-fluid col-12">
            <Modal
                post={selectedPost}
                displayed={displayed}
                setDisplayed={setDisplayed}
            ></Modal>
            {posts.map((post) => (
                <PostCard post={post} key={post.id}>
                    <div
                        onClick={handleClickEdit}
                        className="col-sm-6 col-md-5 col-lg-12"
                    >
                        <Button
                            btn_style="btn-success edit"
                            btn_value="edit"
                        ></Button>
                    </div>
                    <div
                        onClick={() => DisplayModal(post)}
                        className="col-sm-6 col-md-5 col-lg-12"
                    >
                        <Button
                            btn_style="btn-danger delete"
                            btn_value="delete"
                        ></Button>
                    </div>
                </PostCard>
            ))}
        </div>
    );
}

export default PostCardContainer;
