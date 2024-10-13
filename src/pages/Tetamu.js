import React from "react";
import Pantun2Kerat from "../components/PantunModals/Pantun2Kerat";
import Pantun4Kerat from "../components/PantunModals/Pantun4Kerat";

function Tetamu() {
    return (
        <main className="mt-3">
            <h1><i className="bi bi-person"></i> Tetamu</h1>
            <hr/>
            <div className="">
                <button
                    type="button"
                    class="btn btn-primary mx-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#pantun2kerat"
                >
                    Pantun <i class="bi bi-2-circle"></i> Kerat
                </button>
                <hr/>
                <button
                    type="button"
                    class="btn btn-primary mx-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#pantun4kerat"
                >
                    Pantun <i class="bi bi-4-circle"></i> Kerat
                </button>
                {/* <hr/>
                <button
                    type="button"
                    class="btn btn-primary mx-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#jenisPantun"
                >
                    <i class="bi bi-pencil-square"></i> DLL
                </button> */}
                <hr/>
                {/* <button className="btn btn-primary">Pantun 6 Kerat</button>
                <hr/>
                <button className="btn btn-primary">Pantun 8 Kerat</button>
                <hr/>
                <button className="btn btn-primary">Pantun 10 Kerat</button>
                <hr/> */}
                <button
                type="button"
                class="btn btn-primary m-1"
                data-bs-toggle="modal"
                data-bs-target="#pantun6kerat"
                disabled
                >
                Pantun 6-Kerat <span class="badge bg-secondary">Akan Datang</span>
                </button>
                <button
                type="button"
                class="btn btn-primary m-1"
                data-bs-toggle="modal"
                data-bs-target="#pantun8kerat"
                disabled
                >
                Pantun 8-Kerat <span class="badge bg-secondary">Akan Datang</span>
                </button>
                <button
                type="button"
                class="btn btn-primary m-1"
                data-bs-toggle="modal"
                data-bs-target="#pantun10kerat"
                disabled
                >
                Pantun 10-Kerat <span class="badge bg-secondary">Akan Datang</span>
                </button>
                <button
                type="button"
                class="btn btn-primary m-1"
                data-bs-toggle="modal"
                data-bs-target="#pantun12kerat"
                disabled
                >
                Pantun 12-Kerat <span class="badge bg-secondary">Akan Datang</span>
                </button>
                <button
                type="button"
                class="btn btn-primary m-1"
                data-bs-toggle="modal"
                data-bs-target="#pantun14kerat"
                disabled
                >
                Pantun 14-Kerat <span class="badge bg-secondary">Akan Datang</span>
                </button>
                <button
                type="button"
                class="btn btn-primary m-1"
                data-bs-toggle="modal"
                data-bs-target="#pantun16kerat"
                disabled
                >
                Pantun 16-Kerat <span class="badge bg-secondary">Akan Datang</span>
                </button>
                <button
                type="button"
                class="btn btn-primary m-1"
                data-bs-toggle="modal"
                data-bs-target="#pantunberkait"
                disabled
                >
                Pantun Berkait <span class="badge bg-secondary">Akan Datang</span>
                </button>

                {/* <!-- Buka Modal Petik Pantun Daripada Gambar --> */}
                <button
                type="button"
                class="btn btn-primary mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#petikPantun"
                disabled
                >
                <i class="bi bi-images"></i> Petik Pantun Daripada
                Gambar
                <span class="badge bg-secondary">Akan Datang</span>
                </button>
            </div>
            <Pantun2Kerat/>
            <Pantun4Kerat/>
        </main>
    )
}

export default Tetamu;