import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";

function SearchForm() {
    return (
        <form
            action="submit"
            className="header-form row d-none d-sm-flex col-6 col-md-4 col-lg-4 col-xl-3"
        >
            <input
                className="header-form__text col-6 col-sm-6 col-md-7"
                type="text"
                placeholder="Search"
            />
            <InertiaLink href="/" class="col-6 col-sm-6 col-md-5 col-lg-4">
                <input
                    className="header-form__button btn btn-primary form-control"
                    type="button"
                    value="Search"
                />
            </InertiaLink>
        </form>
    );
}

export default SearchForm;
