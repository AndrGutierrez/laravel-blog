import React from "react";

const CommentForm = () => {
    return (
        <form
            action=""
            className="col-11 row justify-content-center"
            method="POST"
        >
            <textarea
                id=""
                className=""
                rows="5"
                className="no-resize form-control col-12 row"
            ></textarea>
            {/* @csrf */}
            <div className="row">
                <input
                    type="submit"
                    value="cancel"
                    onChange={() => {
                        return;
                    }}
                    className="btn btn-secondary col-md-5"
                />
                <input
                    type="delete"
                    value="send"
                    onChange={() => {
                        return;
                    }}
                    className="btn btn-primary col-md-5"
                />
            </div>
        </form>
    );
};
export default CommentForm;
