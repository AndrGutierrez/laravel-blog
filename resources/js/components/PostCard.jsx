import { InertiaLink } from "@inertiajs/inertia-react";

const PostCard = ({ post, children }) => {
    return (
        <div
            className="post row table-bordered row-cols-lg-6 row-cols-xs-1 col-lg-8"
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
                <div className="postauthor row col-12 custom-switch">
                    <InertiaLink href={`/u/${post.user.slug}`}>
                        <img
                            src={post.user.profile_picture}
                            alt="user's profilepic"
                            className="postauthor-img img-thumbnail"
                        />
                    </InertiaLink>
                    <InertiaLink href={`/u/${post.user.slug}`}>
                        <h6 className="postauthor-name col-6">
                            {post.user.name}
                        </h6>
                    </InertiaLink>
                </div>
            </div>
            <div className="post-buttoncontainer col-sm-12 col-lg-3">
                {children}
            </div>
        </div>
    );
};

export default PostCard;
