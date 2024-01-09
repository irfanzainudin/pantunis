import React from "react";
import "./Pantun.css";

function Pantun(props) {
  const pantun = props.children;
  const kata = props.kata;

  function getHighlightedText(text, highlight) {
    // Split text on highlight term, include term itself into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <b key={i}>{part}</b>
          ) : (
            part
          )
        )}
      </span>
    );
  }

  // TODO: handle pantun 2 kerat as well
  return pantun.jenis === 2 ? (
    <div className="pantun">
      <span className="pantun-span">
        <p>{getHighlightedText(pantun.bayang1, kata)}</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;{getHighlightedText(pantun.maksud1, kata)}
        </p>
      </span>
    </div>
  ) : (
    <div className="pantun">
      <span className="pantun-span">
        <p>{getHighlightedText(pantun.bayang1, kata)}</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;{getHighlightedText(pantun.bayang2, kata)}
        </p>
        <p>{getHighlightedText(pantun.maksud1, kata)}</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;{getHighlightedText(pantun.maksud2, kata)}
        </p>
        {/* <span class="badge rounded-pill text-bg-primary">pantun</span>
        <span class="badge rounded-pill text-bg-primary">variasi</span> */}
      </span>
    </div>
  );
}

export default Pantun;
