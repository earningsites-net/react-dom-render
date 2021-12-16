import React from "react";
var ReactDOM = require("react-dom");
import deliriumTremens from "./../public/dan.jpg";
import metropolis from "./../public/dreamtheater.jpg";
import queen from "./../public/queen.jpg";
import pinkFloyd from "./../public/pinkfloyd.jpg";

ReactDOM.render(
  <div className="container">
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My favorite CDs
    </h1>
    <img className="small-image" alt="cd1" src={deliriumTremens}></img>
    <img className="small-image" alt="cd2" src={metropolis}></img>
    <img className="small-image" alt="cd3" src={queen}></img>
    <img className="small-image" alt="cd4" src={pinkFloyd}></img>
  </div>,
  document.querySelector("#root")
);
