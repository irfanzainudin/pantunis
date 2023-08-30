function HubungiKami() {
  return (
    <main className="App-main">
      <div>
        <h1>Hubungi Kami</h1>
        {/* <p>🚧 Under Construction 🚧</p> */}
        <form>
          <div class="mb-3">
            <label for="emel" class="form-label">
              Emel
            </label>
            <input
              type="email"
              class="form-control"
              id="emel"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="tajuk" class="form-label">
              Tajuk
            </label>
            <input type="text" class="form-control" id="tajuk" />
          </div>
          <div class="mb-3">
            <label for="isi" class="form-label">
              Isi kandungan
            </label>
            <textarea class="form-control" id="isi" rows="3"></textarea>
          </div>
          <input type="submit" className="btn btn-primary" value="Hantar" />
        </form>
      </div>
    </main>
  );
}

export default HubungiKami;
