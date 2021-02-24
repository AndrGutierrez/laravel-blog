import React from "react";

function FloatingUser({ post, user }) {
    return (
        <div className="card floating-user col-11 col-sm-11 col-md-4 col-lg-4 row m-2 h-25 shadow-sm py-2">
            <div className="author col-12 align-items-center">
                <div
                    className="image-container col-12 col-md-12 col-lg-12row justify-content-center m-0 p-0"
                    id="profilepic_container"
                >
                    <div className="author-profile-pic-container d-flex justify-content-center p-2 ">
                        <img
                            src={user.profile_picture}
                            alt="Profile picture from user"
                            id="profilepic"
                            className="img-thumbnail author-profile-pic rounded-circle"
                        />
                    </div>
                </div>
                <div className="author-name col-12 p-0">
                    <h2 className="author-nickname card-title text-center col-12">
                        {user.nickname}
                    </h2>
                    <a
                        href="{{ route('user', $post->user )}}"
                        className="author-name card-text text-center col-12 p-0"
                    >
                        <h5 className="">{user.name}</h5>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default FloatingUser;
