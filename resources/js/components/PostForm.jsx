import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

import Button from "./Button";

function PostForm() {
    const [values, setValues] = useState({
        title: "",
        post_content: "",
    });
    function handleSubmit(e) {
        e.preventDefault();
        Inertia.post("/posts/create", values);
    }
    function handleChange(e) {
        console.log("a");
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
        console.log(e.target);
    }
    return (
        <form
            className="table-bordered bg-white p-3 col-12 col-lg-5 col-md-6 display-flex justify-content-centermax-vh-100"
            action=""
        >
            <div onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="">Title</label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="title"
                        value={values.title}
                        onChange={handleChange}
                        id="title"
                    />
                </div>
                <div className="form-group">
                    <label className="">Content</label>
                    <textarea
                        id="post_content"
                        className="form-control no-resize"
                        name=""
                        value={values.post_content}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="">Image (optional)</label>
                    <br />
                    <input type="file" />
                </div>
                <div className="form-group"></div>
                <Button
                    btn_style="send btn-primary mb-2"
                    btn_value="Send"
                ></Button>
            </div>
        </form>
    );
}

export default PostForm;
