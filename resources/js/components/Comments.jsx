import React from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
function Comments({ comments }) {
    return (
        <div className="col-12 col-sm-12 col-md-11 col-lg-11 row justify-content-center">
            <CommentForm></CommentForm>
            {comments.map((comment) => (
                <Comment comment={comment} key={comment.id}></Comment>
            ))}
        </div>
    );
}

export default Comments;
