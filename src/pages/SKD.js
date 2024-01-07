// Soalan Kerap Ditanya (SKD)
import "./SKD.css";

function SKD() {
  return (
    <main className="skd">
      <h1>Soalan Kerap Ditanya (SKD)</h1>
      <ol>
        <li>
          "Pantun X takde dalam pangkalan data."
          <ul>
            <li>
              Boleh contact saya kat{" "}
              <a
                className="text-muted"
                href="https://twitter.com/irfan__zainudin"
              >
                sini <i className="bi bi-twitter"></i>
              </a>{" "}
              untuk cadangkan.
            </li>
            <li>
              Apa-apa cadangan, penambahbaikan, aduan, ketidakpuashatian dsb.
              cara paling mudah ialah saluran DM Twitter saya. Saya cuba balas
              secepat mungkin.
            </li>
          </ul>
        </li>
        <li>
          "Boleh saya tambah sendiri pantun/data?"
          <ul>
            <li>
              <p>
                Buat masa ni, pendekatan saya ialah ambil pantun daripada sumber
                yang "established" cth. budaya orang Melayu sendiri (saya
                dibesarkan dalam budaya orang Melayu jadi tahu beberapa pantun),
                buku koleksi pantun, laman web yang berautoriti dsb.
              </p>
              <p>
                Ke depan baru pantun yang "user-generated", cara asal pantun
                dicipta.
              </p>
            </li>
            <li>
              Boleh "follow"{" "}
              <a
                className="text-muted"
                href="https://twitter.com/irfan__zainudin"
              >
                saya <i className="bi bi-twitter"></i>
              </a>{" "}
              di Twitter (sekarang: X) untuk ikuti perkembangan terkini untuk
              projek Pantunis.
            </li>
            <li>
              Ke depan, saya akan buat akaun rasmi media sosial untuk Pantunis.
            </li>
          </ul>
        </li>
      </ol>
    </main>
  );
}

export default SKD;
