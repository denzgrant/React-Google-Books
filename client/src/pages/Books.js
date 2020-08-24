import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
import Results from "../components/Results";
import API from "../utils/API";

function SearchPage() {

    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);

    function handleSearchChange(e) {
        let { value } = e.target;
        setSearch(value);
    }

    function searchGoogleBooks(e) {
        e.preventDefault();

        API.searchGoogleBooks(search).then(res => {
            setBooks(res.data.items);
            setSearch("");
        })
            .catch(err => {
                console.log(err);
            });
    }

    function handleSave(data) {
        console.log(data);
        API.saveBook({
            title: data.title,
            authors: data.auth,
            description: data.desc,
            image: data.img,
            link: data.link
        }).then(res => {
            console.log(res)
            alert("Book was saved!");
        });
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <Jumbotron />
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <SearchBar title="Book Search" value={search} handleSearchChange={handleSearchChange} searchButton={searchGoogleBooks} />
                </div>
            </div>

            <div className="row">
                <Results books={books} save={true} handleSave={handleSave} />
            </div>

        </div>
    );
}

export default SearchPage;