import { InertiaLink } from "@inertiajs/inertia-react";
import MiniAuthor from "./MiniAuthor";

const PostCard = ({ post, children }) => {
    return (
        <div
            className="post bg-white row table-bordered row-cols-lg-6 row-cols-xs-1 col-lg-8"
            key={post.id}
            tabIndex="-1"
        >
            <div className="post-content col-lg-9">
                <h4 className="px-3 pt-2 post-title">
                    <InertiaLink
                        href={`/u/${post.user.slug}/post/${post.id}/${post.slug}`}
                    >
                        {post.title}
                    </InertiaLink>
                </h4>
                <p className="post-preview px-3">
                    <InertiaLink
                        className="post-preview"
                        href={`/u/${post.user.slug}/post/${post.id}/${post.slug}`}
                    >
                        {post.body.substring(0, 150)}
                    </InertiaLink>
                </p>
                <div className="">
                    <MiniAuthor creation={post} title_style="gray"></MiniAuthor>
                </div>
            </div>
            <div className="post-buttoncontainer col-sm-12 col-lg-3">
                {children}
            </div>
        </div>
    );
};

export default PostCard;
