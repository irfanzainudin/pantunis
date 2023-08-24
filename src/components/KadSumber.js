function KadSumber({ tajuk, penulis, pautan, imej }) {
  return (
    <div class="card mb-3 sumber">
      <div class="row g-0">
        <div class="col-md-4">
          <img src={imej} class="img-fluid rounded-start" alt={imej} />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{tajuk}</h5>
            <p class="card-text">{penulis}</p>
            <p class="card-text">
              <small class="text-body-secondary">
                Pautan utama: <a src={pautan}>{pautan}</a>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KadSumber;
