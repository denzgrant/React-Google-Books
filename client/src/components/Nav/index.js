
import React from "react";


function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <a className="navbar-brand" href="/" style={{ color: "#0F9D58" }}>Google Books</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className={window.location.pathname === "/books" ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="/books" style={{ color: "#4285F4" }}>Search</a>
                    </li>
                    <li className={window.location.pathname === "/books/:id" ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="/books/:id" style={{ color: "#F4B400" }}>Saved</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;