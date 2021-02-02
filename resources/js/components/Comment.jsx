import React from "react";
const Comment = ({ comment, user }) => {
    console.log(comment.user);
    return (
        <div className="comments-comment row col-12 row-cols-1 p-4">
            <a href="{{ route('user', $comment->user) }}" className="col">
                <h5 className="comments-comment__user">Lorem Ipsum</h5>
            </a>
            <p className="col">{comment.content}</p>
        </div>
    );
};

export default Comment;
