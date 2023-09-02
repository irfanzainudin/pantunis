import React from "react";
import "./Pantun.css";

function Pantun(props) {
  // TODO: this wouldn't suffice as pantuns can use semicolons, newlines etc. as delimiters between lines, so it's important to model the pantun data in the database correctly (have 4 columns for 4-rangkap pantuns ie. bayang1 for the first line, bayang2 for the 2nd, makna1 for the 3rd etc. etc.)
  const splitted = props.children.split(", ");
  ///////////////////////////////////////////
  return splitted.length == 2 ? (
    <div className="pantun">
      <span className="pantun-span">
        <p>{splitted[0]}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;{splitted[1]}</p>
      </span>
    </div>
  ) : (
    <div className="pantun">
      <span className="pantun-span">
        <p>{splitted[0]}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;{splitted[1]}</p>
        <p>{splitted[2]}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;{splitted[3]}</p>
      </span>
    </div>
  );
}

export default Pantun;
