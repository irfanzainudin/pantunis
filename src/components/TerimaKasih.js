import React from "react";

function TerimaKasih()
{
    return (
        <div className="alert alert-success alert-dismissible fade show w-75 mx-auto" role="alert">
            <strong><i className="bi bi-check-circle-fill"></i> Terima kasih! Pantun anda berjaya direkodkan.</strong>
            &nbsp;<span>Sumbangan anda amat dihargai dan<br/>akan membantu Pantunis menjadi pangkalan data pantun terbesar di Internet.</span>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default TerimaKasih;