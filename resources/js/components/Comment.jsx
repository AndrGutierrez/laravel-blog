import React from "react";
import MiniAuthor from "./MiniAuthor";
const Comment = ({ comment }) => {
    return (
        <div className="d-flex row  bg-white col-12 p-4 m-2">
            <div className="d-flex flex-row user row col-12 user-container">
                <MiniAuthor
                    creation={comment}
                    title_style="font-weight-bold comment-user"
                ></MiniAuthor>
            </div>
            <p className="cols-12 row pl-5">{comment.content}</p>
        </div>
    );
};

export default Comment;
