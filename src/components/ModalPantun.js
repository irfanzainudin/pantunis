function ModalPantun(props) {
  const pantun = props.pantun;

  function RenderedPantunBasedOnKerat() {
    if (pantun.jenis === 2) {
      return (
        <span>
          <h3>{pantun.bayang1}</h3>
          <h3>&nbsp;&nbsp;{pantun.maksud1}</h3>
        </span>
      );
    }
    return (
      <span>
        <h3>{pantun.bayang1}</h3>
        <h3>&nbsp;&nbsp;{pantun.bayang2}</h3>
        <h3>{pantun.maksud1}</h3>
        <h3>&nbsp;&nbsp;{pantun.maksud2}</h3>
      </span>
    );
  }

  return (
    <div
      className="modal fade"
      id={"pantunModal" + pantun.id}
      tabIndex="-1"
      aria-labelledby={"pantunModalLabel" + pantun.id}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1
              className="modal-title fs-5"
              id={"pantunModalLabel" + pantun.id}
            >
              {/* NOTE FOR FUTURE ME: This might be dangerous/harmful as I'm exposing the pantun ID in the database, or it might be not. */}
              Pantun #{pantun.id}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <RenderedPantunBasedOnKerat />
            {/* <h3>{pantun.bayang1}</h3>
            <h3>&nbsp;&nbsp;{pantun.bayang2}</h3>
            <h3>{pantun.maksud1}</h3>
            <h3>&nbsp;&nbsp;{pantun.maksud2}</h3> */}
            <table className="table mt-4">
              <tbody>
                <tr>
                  <th scope="row">Pemuisi</th>
                  <td>{pantun.pengkarya}</td>
                </tr>
                <tr>
                  <th scope="row">Sumber</th>
                  <td>{pantun.tajuk}</td>
                </tr>
                <tr>
                  <th scope="row">Lesen</th>
                  <td>
                    N/A <span class="badge bg-secondary">Akan Datang</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalPantun;
