import React, { useState } from "react";
import MiniAuthor from "./MiniAuthor";
import Options from "./Options";
const Comment = ({ comment, id }) => {
    const [displayed, setDisplayed] = useState(false);
    const [formDisplayed, setFormDisplayed] = useState(false);
    function DisplayOptions() {
        setDisplayed(!displayed);
    }
    function handleUpdate() {
        Inertia.update(`/comments/update/${comment.id}`);
    }
    return (
        <div className="card row col-12 m-1 py-2" id={id}>
            {displayed && !formDisplayed && (
                <Options
                    comment={comment}
                    id={id}
                    setFormDisplayed={setFormDisplayed}
                ></Options>
            )}
            {!formDisplayed && (
                <React.Fragment>
                    <div className="user row col-12 user-container">
                        <MiniAuthor
                            creation={comment}
                            title_style="comment-user mb-0"
                        >
                            <span className="text-secondary">
                                {comment.created_at.substring(0, 10)}
                            </span>
                        </MiniAuthor>
                    </div>
                    <p className="col-12 pl-5 py-2">{comment.content}</p>
                    <div onClick={DisplayOptions}>
                        <h1 className="options close position-absolute">
                            {!displayed && "..."}
                            {displayed && (
                                <div className="text-danger border-danger">
                                    &times;
                                </div>
                            )}
                        </h1>
                    </div>
                </React.Fragment>
            )}
            {formDisplayed && (
                <form action={handleUpdate}>
                    <div className="form-group">
                        <label htmlFor="comment-update">
                            Editando comentario
                        </label>
                        <textarea
                            id=""
                            name="comment-update"
                            className="form-control no-resize"
                            value={comment.content}
                        ></textarea>
                    </div>
                    <input
                        type="submit"
                        value="Cancel"
                        class="btn btn-secondary mr-1"
                    />
                    <input type="submit" value="Edit" class="btn btn-primary" />
                </form>
            )}
        </div>
    );
};

export default Comment;
