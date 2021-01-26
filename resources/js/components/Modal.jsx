import React from "react";
import Button from "./Button";
import { Inertia } from "@inertiajs/inertia";

function Modal({ post, displayed, setDisplayed }) {
    function handleClickDelete(post) {
        Inertia.post(`/${post.slug}/delete`).then(() => (displayed = false));
        setDisplayed(false);
        // .then(()=>);
        //the method is post because this route uses post method
    }
    function handleClickHide() {
        setDisplayed(false);
    }
    return (
        <React.Fragment>
            {displayed && (
                <div className="container-fluid modal min-vh-100 justify-content-center align-items-center">
                    <div
                        className="custom-modal min-vh-100 col-12"
                        onClick={handleClickHide}
                    ></div>
                    <div className="modal-content pt-4 px-5 col-10 col-md-4 col-lg-4 col-xl-4">
                        <h4>You want to delete this post?</h4>
                        <span>there will be no way back :(</span>
                        <div className="modal-buttoncontainer py-4">
                            <div onClick={() => handleClickDelete(post)}>
                                <Button
                                    btn_style="btn-primary send"
                                    btn_value="yes!"
                                ></Button>
                            </div>

                            <div onClick={() => handleClickHide(post)}>
                                <Button
                                    onClick={() => handleClickDelete(post)}
                                    btn_style="btn-secondary cancel"
                                    btn_value="nah"
                                ></Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

export default Modal;
