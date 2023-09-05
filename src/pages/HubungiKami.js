function HubungiKami() {
  return (
    <main className="App-main">
      <div>
        <h1>Hubungi Kami</h1>
        {/* <p>🚧 Under Construction 🚧</p> */}
        <form>
          <div className="mb-3">
            <label htmlFor="emel" className="form-label">
              Emel
            </label>
            <input
              type="email"
              className="form-control"
              id="emel"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tajuk" className="form-label">
              Tajuk
            </label>
            <input type="text" className="form-control" id="tajuk" />
          </div>
          <div className="mb-3">
            <label htmlFor="isi" className="form-label">
              Isi kandungan
            </label>
            <textarea className="form-control" id="isi" rows="3"></textarea>
          </div>
          <input type="submit" className="btn btn-primary" value="Hantar" />
        </form>
      </div>
    </main>
  );
}

export default HubungiKami;
