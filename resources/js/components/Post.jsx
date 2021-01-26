import React, { useState } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

function Post({ post, children }) {
    const [confirmModalVisible, setConfirmModalVisible] = useState(false);
    const [successModalVisible, setSuccessModalVisible] = useState(false);

    return (
        <div
            className="post row table-bordered row-cols-lg-6 row-cols-xs-1 col-lg-8"
            key={post.id}
        >
            <div className="post-content col-lg-9">
                <h4 className="nav-link post-title">
                    <InertiaLink href="/{post.slug}">{post.title}</InertiaLink>
                </h4>
                <p className="post-preview nav-link">
                    {post.body.substring(0, 150)}
                </p>
                <div className="postauthor row col-12 custom-switch">
                    <InertiaLink>
                        <img
                            src={post.user.profile_picture}
                            alt="user's profilepic"
                            className="postauthor-img img-thumbnail"
                        />
                    </InertiaLink>
                    <InertiaLink>
                        <h6 className="postauthor-name col-6">
                            {post.user.name}
                        </h6>
                    </InertiaLink>
                </div>
            </div>
            <div className="post-buttoncontainer col-sm-12 col-lg-3">
                {/* <input */}
                {/*     type="button" */}
                {/*     className="btn btn-success post-buttoncontainer__button edit col-sm-6 col-md-5 col-lg-12" */}
                {/*     value="edit" */}
                {/* /> */}
                {/* <input */}
                {/*     type="button" */}
                {/*     className="btn btn-danger post-buttoncontainer__button delete col-sm-6 col-md-5 col-lg-12" */}
                {/*     onClick={handleClickDelete} */}
                {/*     value="delete" */}
                {/* /> */}
                {children}
            </div>
        </div>
    );
}

export default Post;
