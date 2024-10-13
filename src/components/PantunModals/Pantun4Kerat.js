import React from "react"

function Pantun4Kerat() {
    return (
        // <!-- Modal Pantun 4-Kerat -->
        <div
        class="modal fade"
        id="pantun4kerat"
        tabindex="-1"
        aria-labelledby="pantun4keratLabel"
        aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="pantun4keratLabel">
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
                                <span class="input-group-text" id="bayang2"> Bayang 2 </span>
                                <input
                                type="text"
                                class="form-control"
                                placeholder="cth. Tarik galah tolong jolokkan;"
                                aria-label="Bayang 2"
                                aria-describedby="bayang2"
                                name="bayang2"
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
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="maksud2"> Maksud 2 </span>
                                <input
                                type="text"
                                class="form-control"
                                placeholder="cth. Kalau salah tolong tunjukkan."
                                aria-label="Maksud 2"
                                aria-describedby="maksud2"
                                name="maksud2"
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
                            <input type="number" value="4" name="jenis" hidden />
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
                        {/* <small>Every contributed pantun will be licensed as "All rights reserved <i className="bi bi-c-circle"></i>" meaning you, the writer(s), the pemantun(s), own(s) the pantun. In a future update, we will allow the change of license to other licenses such <a href="https://fairuse.stanford.edu/overview/public-domain/welcome/">the public domain</a> or <a href="https://creativecommons.org/licenses/by/4.0/deed.en">CC-BY 4.0</a> if you ever wish to change it.</small> */}
                        <small>Setiap pantun yang diderma akan dilesenkan sebagai "Hakcipta Terpelihara <i className="bi bi-c-circle"></i>" yang bermaksud pantun tersebut hak milik mutlak penulis. Ke depan, kami akan membuka ruang untuk penukaran lesen kepada <a href="https://ms.wikipedia.org/wiki/Domain_awam">domain awam</a> atau <a href="https://ms.wikipedia.org/wiki/Lesen_Creative_Commons">Lesen Creative Commons</a> jika anda mahu.</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pantun4Kerat;
