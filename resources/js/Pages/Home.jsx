import React from "react";

const Home = () => {
    let foo = "React";
    const bar = "Laravel";

    return (
        <div className="container">
            <h1 className="row justify-content-center col-sm-11 col-md-8 col-lg-8">
                Hello mom, I used {foo} + {bar} to be here on internet. Isn't
                that wacky?
            </h1>
        </div>
    );
};

export default Home;
