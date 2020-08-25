import React from "react";
import "./index.css"
import SearchCard from "../ResultCard";

function Results(props) {
    let books = props.books;
    return (
        <div className="col-12">
            <div className="result-style">
                <h1 className="display-3">Results</h1>
                {
                    books.length > 0 ? books.map(event => {
                        let data;

                        if (props.save) {
                            data = {
                                id: event.id,
                                title: event.volumeInfo.title,
                                authors: event.volumeInfo.authors,
                                img: event.volumeInfo.imageLinks.thumbnail,
                                desc: event.volumeInfo.description,
                                link: event.volumeInfo.infoLink
                            };
                        }
                        else {
                            data = {
                                id: event._id,
                                title: event.title,
                                authors: event.authors,
                                img: event.image,
                                desc: event.description,
                                link: event.link
                            };
                        }

                        return <SearchCard
                            key={data.id}
                            id={data.id}
                            title={data.title}
                            auth={data.authors}
                            img={data.img} 
                            desc={data.desc} 
                            link={data.link} 
                            save={props.save} 
                            handleSave={props.handleSave} 
                            handleDelete={props.handleDelete} />
                    }) : <h3 style={{ color: "#DB4437" }}>No Results Available</h3>
                }
            </div>
        </div>
    );
}

export default Results;