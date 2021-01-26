import React from "react";

const Button = ({ btn_style, btn_value }) => {
    return (
        <input
            type="button"
            className={`btn ${btn_style} post-buttoncontainer__button edit col-lg-12`}
            value={btn_value}
        />
    );
};

export default Button;
