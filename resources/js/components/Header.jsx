import React, { useEffect, useState } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import SearchForm from "./SearchForm";

function Header() {
    return (
        <header className="header container-fluid">
            <InertiaLink
                href=""
                className="header-title col-5 col-sm-3 col-md-4 col-lg-5 col-xl-5"
            >
                <h3 className="navbar-title display-4">Laravel Blog</h3>
            </InertiaLink>
            <InertiaLink className="nav-link">Home</InertiaLink>
            <InertiaLink className="nav-link">Profile</InertiaLink>
            <InertiaLink className="nav-link">Explore</InertiaLink>

            <SearchForm></SearchForm>
        </header>
    );
}
export default Header;
