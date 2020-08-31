import React from "react";
import "./index.css";
import Saved from "../SavedModal";

function SearchCard(props) {
    return (
        <div className="col-12 mt-3 mx-auto result-card-style">
            <div className="row" style={{ marginBottom: "15px" }}>
                <div className="col-12 md-6">
                    <h2 style={{ fontSize: "4em" }}>{props.title}</h2>
                    <h4 style={{ fontSize: "3em" }}>Written By: {props.auth}</h4>
                </div>
                <div className="col-12 md-6">
                    <div className="image">
                        <img src={props.img} className="img-fluid" alt="thumbnail" />
                    </div>
                </div>
                <div className="col-8 md-6">

                    <a type="button" 
                    className="btn btn-success" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    href={props.link} >View</a>
                    {props.save ? <button type="button"
                        className="btn btn-primary rightButton"
                        data-target={"#" + props.id}
                        onClick={() => props.handleSave(props)}>Save
                    </button> : <button
                            type="button"
                            className="btn btn-primary rightButton"
                            onClick={() => props.handleDelete(props.id)}>Delete</button>}

                </div>
                <Saved title="You saved a book!" img={props.img} objectTitle={props.title} author={props.auth} id={props.id} />
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="synopsis">{props.desc}</div>
                </div>
            </div>
        </div>
    );
}

export default SearchCard;