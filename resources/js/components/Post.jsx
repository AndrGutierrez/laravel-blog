import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

function Post({ post }) {
    return (
        <div className="row card col-sm-11 col-md-6 col-lg-6 col-xl-8 post">
            <div className="post-content">
                <h4 className="nav-link post-title">
                    <InertiaLink href="/{post.slug}">{post.title}</InertiaLink>
                </h4>
                <p className="post-preview nav-link">
                    {post.body.substring(0, 150)}
                </p>
            </div>
        </div>
    );
}

export default Post;
