import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./PantunModal.css";

function Pantun2Kerat() {
    const [bayang1, setBayang1] = useState("");
    const [maksud1, setMaksud1] = useState("");

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const url = "http://localhost:3001/dermaPantun";
        axios.post(url, {
            bayang1: bayang1,
            maksud1: maksud1,
            sumber: 8,
            jenis: 2
        })
        .then((res) => {
            console.log(res);
            document.querySelector('button#closePantun2KeratModal').click(); // close modal
            navigate(`/pantun/${res.data[0]}&just_added=true`);
        })
        .catch((e) => {
            console.log(`There was an error making a POST request to /dermaPantun: ${e}`);
        })
    }

    const handleBayang1 = (e) => {
        setBayang1(e.target.value);
    }

    const handleMaksud1 = (e) => {
        setMaksud1(e.target.value);
    }
    
    return (
        // <!-- Modal Pantun 2-Kerat -->
        <div
        className="modal fade"
        id="pantun2kerat"
        tabIndex="-1"
        aria-labelledby="pantun2keratLabel"
        aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="pantun2keratLabel">
                            <i className="bi bi-pencil-square text-primary"></i> Sumbang
                        </h1>
                        <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        id="closePantun2KeratModal"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="bayang1"> Bayang 1 </span>
                                <input
                                type="text"
                                className="form-control"
                                placeholder="cth. Siakap senohong gelama ikan duri,"
                                aria-label="Bayang 1"
                                aria-describedby="bayang1"
                                name="bayang1"
                                onChange={handleBayang1}
                                defaultValue={bayang1}
                                required
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="maksud1"> Maksud 1 </span>
                                <input
                                type="text"
                                className="form-control"
                                placeholder="cth. Bercakap bohong lama-lama mencuri."
                                aria-label="Maksud 1"
                                aria-describedby="maksud1"
                                name="maksud1"
                                onChange={handleMaksud1}
                                defaultValue={maksud1}
                                required
                                />
                            </div>
                            {/* <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text" id="maksud2"> License </span>
                                <select
                                className="form-select form-select-sm"
                                aria-label="License for pantun"
                                >
                                <option value="fu" selected>Free use for all</option>
                                <option value="fp">Free for personal use only</option>
                                <option value="rr">All rights reserved</option>
                                <option value="nl">No license</option>
                                </select>
                            </div> */}
                            <input type="number" value="2" name="jenis" hidden readOnly />
                            <input type="number" value="5" name="sumber" hidden readOnly />
                            <input type="submit" className="btn btn-primary" value="Sumbang" />
                        </form>
                    </div>
                    <div className="modal-footer">
                        <small>Setiap pantun adalah hak milik mutlak penulis. Untuk info lebih tentang bagaimana Pantunis menghormati hakcipta penulis pantun, <Link to="/notislesen" onClick={() => {
                            document.querySelector('button#closePantun2KeratModal').click(); // close modal
                        }}>rujuk sini</Link>.</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pantun2Kerat;
