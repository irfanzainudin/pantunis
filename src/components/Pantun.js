import React, { useEffect, useState } from "react";
import "./Pantun.css";

function Pantun(props) {
  const pantun = props.children;
  const kata = props.kata;
  const [barisan, setBarisan] = useState([]);

  useEffect(() => {
    prosesPantun();
  }, []);

  const prosesPantun = () => {
    const temp = [];
    const bayang1 = pantun.bayang1.toLowerCase();
    const bayang2 = pantun.bayang2.toLowerCase();
    const maksud1 = pantun.maksud1.toLowerCase();
    const maksud2 = pantun.maksud2.toLowerCase();
    // Find out which lines have `kata` in them
    if (bayang1.includes(kata)) {
      const spl = bayang1.split(kata);
      const str = spl.join('<span class="tanda">' + kata + "</span>");
      const p_line = {
        __html: str.charAt(0).toUpperCase() + str.slice(1),
      };
      temp.push(p_line);
      setBarisan(temp);
    } else {
      temp.push(pantun.bayang1);
      setBarisan(temp);
    }

    if (bayang2.includes(kata)) {
      const spl = bayang2.split(kata);
      const str = spl.join('<span class="tanda">' + kata + "</span>");
      const p_line = {
        __html:
          "&nbsp;&nbsp;&nbsp;&nbsp;" +
          str.charAt(0).toUpperCase() +
          str.slice(1),
      };
      temp.push(p_line);
      setBarisan(temp);
    } else {
      temp.push(pantun.bayang2);
      setBarisan(temp);
    }

    if (maksud1.includes(kata)) {
      const spl = maksud1.split(kata);
      const str = spl.join('<span class="tanda">' + kata + "</span>");
      const p_line = {
        __html: str.charAt(0).toUpperCase() + str.slice(1),
      };
      temp.push(p_line);
      setBarisan(temp);
    } else {
      temp.push(pantun.maksud1);
      setBarisan(temp);
    }

    if (maksud2.includes(kata)) {
      const spl = maksud2.split(kata);
      const str = spl.join('<span class="tanda">' + kata + "</span>");
      const p_line = {
        __html:
          "&nbsp;&nbsp;&nbsp;&nbsp;" +
          str.charAt(0).toUpperCase() +
          str.slice(1),
      };
      temp.push(p_line);
      setBarisan(temp);
    } else {
      temp.push(pantun.maksud2);
      setBarisan(temp);
    }

    // Highlight the part of the lines that corresponds to `kata`
    // barisan.map((line) => {
    //   const spl = line.split(kata);
    //   const p_line = {
    //     __html: spl.join('<span class="tanda">' + kata + "</span>"),
    //   };
    //   setPosisiKata(p_line);
    // });
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
      </span>
    </div>
  );
}

export default Pantun;
