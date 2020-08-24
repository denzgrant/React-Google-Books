import React from "react";
import "./index.css";
import bookPhoto from './bookPhoto.JPG';

function Jumbotron({ children }) {
  return (
    <div
      style={{
        fontSize: "1em",
        height: 300,
        paddingTop: 130,
        textAlign: "center",
        backgroundImage: `url(${bookPhoto})`,
        backgroundSize: "cover"
      }}
      className="jumbotron"
    >
      <h1 className="header">
        <span style={{ color: '#4285F4' }} >G</span>
        <span style={{ color: '#DB4437' }} >o</span>
        <span style={{ color: '#F4B400' }} >o</span>
        <span style={{ color: '#4285F4' }} >g</span>
        <span style={{ color: '#0F9D58' }} >l</span>
        <span style={{ color: '#DB4437' }} >e</span>

        <span style={{ color: '#4285F4' }} >B</span>
        <span style={{ color: '#DB4437' }} >o</span>
        <span style={{ color: '#F4B400' }} >o</span>
        <span style={{ color: '#4285F4' }} >k</span>
        <span style={{ color: '#DB4437' }} >s</span>
      </h1>
      {children}
    </div>
  );
}

export default Jumbotron;
