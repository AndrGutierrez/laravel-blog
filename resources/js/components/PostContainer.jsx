import React from "react";
import Post from "./Post";
import Button from "./Button";
import { Inertia } from "@inertiajs/inertia";

function PostContainer({ posts }) {
    function handleClickDelete(post) {
        // setDisplayed(false);
        Inertia.post(`/${post.slug}/delete`);
        // .then(()=>);
        //the method is post because this route uses post method
    }
    function handleClickEdit(e) {
        e.preventDefault();
        alert("a");
    }
    return (
        <div className="container-fluid col-12">
            {posts.map((post) => (
                <Post post={post} key={post.id}>
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
                        onClick={() => handleClickDelete(post)}
                        className="col-sm-6 col-md-5 col-lg-12"
                    >
                        <Button
                            btn_style="btn-danger delete"
                            btn_value="delete"
                        ></Button>
                    </div>
                </Post>
            ))}
        </div>
    );
}

export default PostContainer;
