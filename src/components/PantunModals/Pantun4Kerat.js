import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./PantunModal.css";

function Pantun4Kerat() {
    const [bayang1, setBayang1] = useState("");
    const [maksud1, setMaksud1] = useState("");
    const [bayang2, setBayang2] = useState("");
    const [maksud2, setMaksud2] = useState("");
    
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const url = "http://localhost:3001/dermaPantun";
        axios.post(url, {
            bayang1: bayang1,
            maksud1: maksud1,
            bayang2: bayang2,
            maksud2: maksud2,
            sumber: 8,
            jenis: 4
        })
        .then((res) => {
            console.log(res);
            document.querySelector('button#closePantun4KeratModal').click(); // close modal
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

    const handleBayang2 = (e) => {
        setBayang2(e.target.value);
    }

    const handleMaksud2 = (e) => {
        setMaksud2(e.target.value);
    }

    return (
        // <!-- Modal Pantun 4-Kerat -->
        <div
        className="modal fade"
        id="pantun4kerat"
        tabIndex="-1"
        aria-labelledby="pantun4keratLabel"
        aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="pantun4keratLabel">
                        <i className="bi bi-pencil-square text-primary"></i> Sumbang
                        </h1>
                        <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        id="closePantun4KeratModal"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit} action="/terima_kasih_derma_pantun">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="bayang1"> Bayang 1 </span>
                                <input
                                type="text"
                                className="form-control"
                                placeholder="cth. Cempedak di luar pagar,"
                                aria-label="Bayang 1"
                                aria-describedby="bayang1"
                                name="bayang1"
                                onChange={handleBayang1}
                                defaultValue={bayang1}
                                required
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="bayang2"> Bayang 2 </span>
                                <input
                                type="text"
                                className="form-control"
                                placeholder="cth. Tarik galah tolong jolokkan;"
                                aria-label="Bayang 2"
                                aria-describedby="bayang2"
                                name="bayang2"
                                onChange={handleBayang2}
                                defaultValue={bayang2}
                                required
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="maksud1"> Maksud 1 </span>
                                <input
                                type="text"
                                className="form-control"
                                placeholder="cth. Saya budak baharu belajar,"
                                aria-label="Maksud 1"
                                aria-describedby="maksud1"
                                name="maksud1"
                                onChange={handleMaksud1}
                                defaultValue={maksud1}
                                required
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="maksud2"> Maksud 2 </span>
                                <input
                                type="text"
                                className="form-control"
                                placeholder="cth. Kalau salah tolong tunjukkan."
                                aria-label="Maksud 2"
                                aria-describedby="maksud2"
                                name="maksud2"
                                onChange={handleMaksud2}
                                defaultValue={maksud2}
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
                            <input type="number" value="4" name="jenis" hidden readOnly />
                            <input type="number" value="5" name="sumber" hidden readOnly />
                            <input type="submit" className="btn btn-primary" value="Sumbang" />
                        </form>
                    </div>
                    <div className="modal-footer">
                        <small>Setiap pantun adalah hak milik mutlak penulis. Untuk info lebih tentang bagaimana Pantunis menghormati hakcipta penulis pantun, <Link to="/notislesen" onClick={() => {
                            document.querySelector('button#closePantun4KeratModal').click(); // close modal
                        }}>rujuk sini</Link>.</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pantun4Kerat;
