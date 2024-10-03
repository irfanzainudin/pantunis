import React from "react";
import "./Pantun.css";
import ModalPantun from "./ModalPantun";
import { Link } from "react-router-dom";
import getHighlightedText from "../utils/getHighlightedText";

function Pantun4Kerat(props) {
  const pantun = props.children;
  const kata = props.kata;

  const whichSrc = (sumber) => {
    console.log(sumber);
    if (sumber === "Pantun Melayu")
    {
      return <Link to={"/sumber/pantun-melayu"}>Pantun Melayu</Link>;
    }
    else if (sumber === "KUMPULAN PANTUN LISAN MELAYU: KURIK KUNDI MERAH SAGA EDISI KEDUA")
    {
      return <Link to={"/sumber/kumpulan-pantun-lisan-melayu:-kurik-kundi-merah-saga-edisi-kedua"}>Kurik Kundi Merah Saga</Link>;
    }
    else if (sumber === "Koleksi \"Sejuta Pantun\" oleh Portal Malaycivilization")
    {
      return <Link to={"/sumber/koleksi-\"sejuta-pantun\"-oleh-portal-malaycivilization"}>Sejuta Pantun</Link>;
    }
    else if (sumber === "Malay Pantuns")
    {
      return <Link to={"/sumber/malay-pantuns"}>Malay Pantuns</Link>;
    }
  }

  return (
    <div className="pantun m-5">
      <section className="pantun-action-col">
        {/* Button trigger modal */}
        <button
          className="btn text-primary"
          data-bs-toggle="modal"
          data-bs-target={"#pantunModal" + pantun.pantun_id}
        >
          <i className="bi bi-info-circle-fill fs-2"></i>
        </button>
        <ModalPantun pantun={pantun} />
      </section>
      <section className="pantun-span">
        <p>{getHighlightedText(pantun.pantun_bayang1, kata)}</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          {getHighlightedText(pantun.pantun_bayang2, kata)}
        </p>
        <p>{getHighlightedText(pantun.pantun_maksud1, kata)}</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          {getHighlightedText(pantun.pantun_maksud2, kata)}
        </p>
        {/* <span className="badge rounded-pill text-bg-primary">pantun</span>
        <span className="badge rounded-pill text-bg-primary">variasi</span> */}
        {/* <small className="text-muted">
          ——— oleh <Link to={"/sumber"}>{pantun.sumber_pengkarya}</Link>
        </small>{" "} */}
        <small className="text-muted">
          ——— dari <Link to={"/sumber"}>{pantun.sumber_tajuk}</Link>
          {/* ——— dari {whichSrc(pantun.sumber_tajuk)} */}
        </small>
        {/* <Link to={"/sumber"} className="btn btn-primary info-lebih">Info lebih</Link> */}
      </section>
    </div>
  );
}

export default Pantun4Kerat;
