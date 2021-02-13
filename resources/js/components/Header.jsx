import React, { useEffect, useState } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import SearchForm from "./SearchForm";

function Header() {
    return (
        <header className="navbar shadow fixed-top container-fluid">
            <InertiaLink
                href=""
                className="header-title col-5 col-sm-3 col-md-4 col-lg-5 col-xl-5"
            >
                <h3 className="navbar-title display-4">Laravel Blog</h3>
            </InertiaLink>
            <div className="header-links row align-items-center">
                <InertiaLink className="nav-link">Home</InertiaLink>
                <InertiaLink className="nav-link">Profile</InertiaLink>
                <InertiaLink className="nav-link">Explore</InertiaLink>
            </div>

            <SearchForm></SearchForm>
        </header>
    );
}
export default Header;
