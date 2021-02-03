import React from "react";

function PostForm() {
    function handleSubmit(e) {
        return e;
    }
    return (
        <form className="form" action="">
            <div onSubmit={handleSubmit}>
                <div className="form-group">
                    <label class="form-control"></label>
                </div>
                <div className="form-group">
                    <label class="form-control"></label>
                </div>
                <div className="form-group">
                    <label class="form-control"></label>
                </div>
            </div>
        </form>
    );
}

export default PostForm;
