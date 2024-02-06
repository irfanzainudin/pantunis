import React from "react";
import "./Pantun.css";
import ModalPantun from "./ModalPantun";
import { Link } from "react-router-dom";
import getHighlightedText from "../utils/getHighlightedText";

function Pantun4Kerat(props) {
  const pantun = props.children;
  const kata = props.kata;

  return (
    <div className="pantun m-5">
      <section className="pantun-action-col">
        {/* Button trigger modal */}
        <button
          className="btn text-primary"
          data-bs-toggle="modal"
          data-bs-target={"#pantunModal" + pantun.id}
        >
          <i className="bi bi-info-circle-fill fs-2"></i>
        </button>
        <ModalPantun pantun={pantun} />
      </section>
      <section className="pantun-span">
        <p>{getHighlightedText(pantun.bayang1, kata)}</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;{getHighlightedText(pantun.bayang2, kata)}
        </p>
        <p>{getHighlightedText(pantun.maksud1, kata)}</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;{getHighlightedText(pantun.maksud2, kata)}
        </p>
        {/* <span className="badge rounded-pill text-bg-primary">pantun</span>
        <span className="badge rounded-pill text-bg-primary">variasi</span> */}
        {/* <small className="text-muted">
          ——— oleh <Link to={"/sumber"}>{pantun.pengkarya}</Link>
        </small>{" "} */}
        <small className="text-muted">
          ——— dari <Link to={"/sumber"}>{pantun.tajuk}</Link>
        </small>
      </section>
    </div>
  );
}

export default Pantun4Kerat;
