import React from "react";
import MiniAuthor from "./MiniAuthor";
const Comment = ({ comment }) => {
    console.log(comment);
    return (
        <div className="card row col-12 m-1 py-2">
            <div className="d-flex flex-row user row col-12 user-container">
                <MiniAuthor creation={comment} title_style="comment-user mb-0">
                    <span className="text-secondary">
                        {comment.created_at.substring(0, 10)}
                    </span>
                </MiniAuthor>
            </div>
            <p className="cols-12 row pl-5 py-2">{comment.content}</p>
        </div>
    );
};

export default Comment;
