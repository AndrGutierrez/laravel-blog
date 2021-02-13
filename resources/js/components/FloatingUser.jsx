import React from "react";

function FloatingUser({ post, user }) {
    return (
        <div className="card floating-user col-11 col-sm-11 col-md-4 col-lg-4 row m-2 h-25  shadow-sm">
            <div className="author card-body col-12 row align-items-center">
                <div
                    className="image-container col-12 col-sm-4 col-md-12 col-lg-12  row justify-content-center m-0 p-0"
                    id="profilepic_container"
                >
                    <div className="author-profile-pic-container p-2">
                        <img
                            src={user.profile_picture}
                            alt="Profile picture from user"
                            id="profilepic"
                            className="img-thumbnail author-profile-pic rounded-circle"
                        />
                    </div>
                </div>
                <div className="author-name col-12 col-sm-7 col-md-12 row m-2">
                    <h2 className="author-nickname card-title text-center col-12">
                        {user.nickname}
                    </h2>
                    <a
                        href="{{ route('user', $post->user )}}"
                        className="author-name card-text text-center col-12"
                    >
                        <h5 className="">{user.name}</h5>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default FloatingUser;
