function HalamanUtama() {
  return (
    <main className="App-main">
      <form>
        <div className="mb-3">
          <label htmlFor="cari" className="form-label">
            Terokai pangkalan data pantun terbesar di Internet
          </label>
          <input
            type="text"
            className="form-control"
            id="cari"
            aria-describedby="cari"
            autoFocus
          />
          <div id="cari" className="form-text">
            Cari pantun guna perkataan.
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Cari
        </button>
      </form>
    </main>
  );
}

export default HalamanUtama;
