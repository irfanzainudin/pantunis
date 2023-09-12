import React from "react";
import "./Pantun.css";

function Pantun(props) {
  const pantun = props.children;
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
        <p>{pantun.bayang1}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;{pantun.bayang2}</p>
        <p>{pantun.maksud1}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;{pantun.maksud2}</p>
        <span class="badge rounded-pill text-bg-primary">pantun</span>
        <span class="badge rounded-pill text-bg-primary">variasi</span>
      </span>
    </div>
  );
}

export default Pantun;
