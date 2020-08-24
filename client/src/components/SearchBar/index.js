import React from "react";
import "./index.css";

function SearchBar(props){
    return (
        <form className="form-style">
            <div className="form-group">
            <label>{props.title}</label>
                <input className="form-control" id="searchInput" placeholder="Search For A Book : )" value={props.value} onChange={props.handleSearchChange} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={props.searchButton}>Search</button>
        </form>
    );
}

export default SearchBar;