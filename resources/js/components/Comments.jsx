import React from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
function Comments({ comments }) {
    comments.map((comment) => {
        console.log(comment.user);
    });
    return (
        <div className="comments col-12 col-sm-12 col-md-11 col-lg-11 row justify-content-center">
            <CommentForm></CommentForm>
            {comments.map((comment) => (
                <Comment
                    comment={comment}
                    user={comment.user}
                    key={comment.id}
                ></Comment>
            ))}
        </div>
    );
}

export default Comments;
