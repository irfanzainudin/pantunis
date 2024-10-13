import React from "react"

function Pantun2Kerat() {
    return (
        // <!-- Modal Pantun 2-Kerat -->
        <div
        class="modal fade"
        id="pantun2kerat"
        tabindex="-1"
        aria-labelledby="pantun2keratLabel"
        aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="pantun2keratLabel">
                        <i class="bi bi-pencil-square text-primary"></i> Sumbang
                        </h1>
                        <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <form method="post" action="{% url 'sumbang_pantun' %}">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="bayang1"> Bayang 1 </span>
                                <input
                                type="text"
                                class="form-control"
                                placeholder="cth. Cempedak di luar pagar,"
                                aria-label="Bayang 1"
                                aria-describedby="bayang1"
                                name="bayang1"
                                required
                                />
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="maksud1"> Maksud 1 </span>
                                <input
                                type="text"
                                class="form-control"
                                placeholder="cth. Saya budak baharu belajar,"
                                aria-label="Maksud 1"
                                aria-describedby="maksud1"
                                name="maksud1"
                                required
                                />
                            </div>
                            {/* <div class="input-group input-group-sm mb-3">
                                <span class="input-group-text" id="maksud2"> License </span>
                                <select
                                class="form-select form-select-sm"
                                aria-label="License for pantun"
                                >
                                <option value="fu" selected>Free use for all</option>
                                <option value="fp">Free for personal use only</option>
                                <option value="rr">All rights reserved</option>
                                <option value="nl">No license</option>
                                </select>
                            </div> */}
                            <input type="number" value="2" name="jenis" hidden />
                            <input type="number" value="5" name="sumber" hidden />
                            <input type="submit" class="btn btn-primary" value="Sumbang" />
                        </form>
                    </div>
                    <div class="modal-footer">
                        {/* <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        ></button> */}
                        <small>Every pantun will be licensed as "<i className="bi bi-c-circle"></i> All rights reserved" meaning you, the writer(s), the pemantun(s), own(s) the pantun. In a future update, we will allow the change of license to other licenses such as <a href="https://fairuse.stanford.edu/overview/public-domain/welcome/">the public domain</a> or <a href="https://creativecommons.org/licenses/by/4.0/deed.en">CC-BY 4.0</a> if you ever wish to change it.</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pantun2Kerat;
