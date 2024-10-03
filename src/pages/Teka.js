// Teka
import {Link} from "react-router-dom";

function Teka() {
  return (
    <main className="mt-3 animate__animated animate__fadeIn">
        <hgroup>
            <h1>
                <i className="bi bi-patch-question"></i> Teka
            </h1>
            <p>Adakah anda seorang pemantun?</p>
        </hgroup>
        {/* <div className="under-construction-super-container">
          <div className="under-construction-container"> */}
            <p className="under-construction fs-1"><i className="bi bi-exclamation-octagon"></i> Masih sedang dibina <i className="bi bi-cone-striped"></i></p>
          {/* </div>
        </div> */}
        <section className="side-by-side">
          <Link to="/teka/kata" className="btn btn-lg btn-primary">
              <i className="bi bi-braces"></i> Kata
          </Link>
          <Link to="/login" className="btn btn-lg btn-primary ms-3">
              <i className="bi bi-card-text"></i> Baris
          </Link>
        </section>
    </main>
  );
}

export default Teka;
