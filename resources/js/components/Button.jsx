import React from "react";

const Button = ({ btn_style, btn_value }) => {
    return (
        <button
            type="submit"
            className={`btn ${btn_style} post-buttoncontainer__button edit btn col-lg-12 `}
        >
            <span className="button-text">{btn_value}</span>
        </button>
    );
};

export default Button;
