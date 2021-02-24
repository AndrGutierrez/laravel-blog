import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const MiniAuthor = ({ creation, title_style, children }) => {
    return (
        <div className="postauthor row col-12">
            <InertiaLink
                href={`/u/${creation.user.slug}`}
                className="postauthor-img-container py- py-1 px-2"
            >
                <img
                    src={creation.user.profile_picture}
                    alt="user's profilepic"
                    className="postauthor-img img-thumbnail"
                />
            </InertiaLink>
            <InertiaLink href={`/u/${creation.user.slug}`}>
                <h5 className={`postauthor-name ${title_style}`}>
                    {creation.user.name}
                </h5>
                {children}
            </InertiaLink>
        </div>
    );
};
export default MiniAuthor;
