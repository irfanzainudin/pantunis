import React from "react";
import "./Pantun.css";

// Keratan Pantun (Pantun Models)
import Pantun2Kerat from "./Pantun2Kerat";
import Pantun4Kerat from "./Pantun4Kerat";

function Pantun(props) {
  const pantun = props.children;
  const kata = props.kata;

  if (pantun.pantun_jenis === 2)
    return <Pantun2Kerat kata={kata}>{pantun}</Pantun2Kerat>;
  else if (pantun.pantun_jenis === 4)
    return <Pantun4Kerat kata={kata}>{pantun}</Pantun4Kerat>;
  else return <Pantun4Kerat kata={kata}>{pantun}</Pantun4Kerat>;
}

export default Pantun;
