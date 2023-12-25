import React, { useEffect, useState } from "react";
import "./Pantun.css";

function Pantun(props) {
  const pantun = props.children;
  const kata = props.kata;
  const [barisan, setBarisan] = useState([]);
  let temp = [];

  useEffect(() => {
    // TODO: useEffect() runs on every render cycle -- meaning if there are changes to the UI, then useEffect() will run (at least that's what I think it means) -- so changing the lines of the pantun to highlight the search word will cause useEffect() -- hence prosesPantun() -- to run twice and the lines will be printed twice (at least that's what I think is happening)
    // prosesPantun();
  }, []);

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

  const prosesPantun = () => {
    const bayang1 = pantun.bayang1.split(" ");
    const bayang2 = pantun.bayang2.split(" ");
    const maksud1 = pantun.maksud1.split(" ");
    const maksud2 = pantun.maksud2.split(" ");

    // Find out which lines have `kata` in them
    prosesBarisPantun(bayang1);
    // prosesBarisPantun(bayang2);
    // prosesBarisPantun(maksud1);
    // prosesBarisPantun(maksud2);
  };

  const prosesBarisPantun = (baris) => {
    baris.map((word) => {
      if (word.toLowerCase().includes(kata)) {
        const i = baris.indexOf(word);
        // TODO: punctuations (semicolons, commas etc.) are highlighted as well, which could maybe affect UX
        baris[i] = '<span class="tanda">' + word + "</span>";
        const p_line = {
          __html: baris.join(" "),
        };
        temp.push(p_line);
        setBarisan(temp);
      }
    });
  };

  function isObject(obj) {
    return obj === Object(obj);
  }

  // TODO: handle pantun 2 kerat as well
  // return pantun.bayang2.length > 0 ? (
  //   <div className="pantun">
  //     <span className="pantun-span">
  //       <p>{pantun.bayang1}</p>
  //       <p>&nbsp;&nbsp;&nbsp;&nbsp;{pantun.maksud1}</p>
  //     </span>
  //   </div>
  // ) : (
  //   <div className="pantun">
  //     <span className="pantun-span">
  //       <p>{pantun.bayang1}</p>
  //       <p>&nbsp;&nbsp;&nbsp;&nbsp;{pantun.bayang2}</p>
  //       <p>{pantun.maksud1}</p>
  //       <p>&nbsp;&nbsp;&nbsp;&nbsp;{pantun.maksud2}</p>
  //     </span>
  //   </div>
  // );
  return (
    <div className="pantun">
      <span className="pantun-span">
        {/* {console.log(barisan)} */}
        {barisan.length > 0
          ? barisan.map((baris, i) => {
              if (isObject(baris)) {
                return i % 2 !== 0 ? (
                  <p dangerouslySetInnerHTML={baris}></p>
                ) : (
                  <p dangerouslySetInnerHTML={baris}></p>
                );
              } else {
                return i % 2 !== 0 ? (
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;{baris}</p>
                ) : (
                  <p>{baris}</p>
                );
              }
            })
          : ""}
        <p>{getHighlightedText(pantun.bayang1, kata)}</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;{getHighlightedText(pantun.bayang2, kata)}
        </p>
        <p>{getHighlightedText(pantun.maksud1, kata)}</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;{getHighlightedText(pantun.maksud2, kata)}
        </p>
      </span>
    </div>
  );
}

export default Pantun;
