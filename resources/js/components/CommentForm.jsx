import React from "react";

const CommentForm = () => {
    return (
        <form
            action=""
            className="col-12 col-lg-11 row justify-content-center px-0 my-2"
            method="POST"
        >
            <textarea
                id=""
                rows="5"
                className="no-resize form-control col-12 row"
            ></textarea>
            {/* @csrf */}
            <div className="row mt-2 px-0 justify-content-end col-12">
                <input
                    type="submit"
                    value="cancel"
                    onChange={() => {
                        return;
                    }}
                    className="btn btn-secondary button cancel col-6 col-sm-4 col-md-4"
                />
                <input
                    type="delete"
                    value="send"
                    onChange={() => {
                        return;
                    }}
                    className="btn btn-primary button send col-6 col-sm-4 col-md-4"
                />
            </div>
        </form>
    );
};
export default CommentForm;
