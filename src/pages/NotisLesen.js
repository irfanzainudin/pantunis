import React from "react";

function NotisLesen()
{
    return (
        <main className="container mt-3 animate__animated animate__fadeIn">
            <hgroup>
                <h1>Lesen</h1>
                <p>Rujuk kod sumber di <a href="https://github.com/irfanzainudin/pantunis">repositori <i className="bi bi-github"></i> Github rasmi Pantunis</a>.</p>
            </hgroup>
            <article id="lesen" className="container w-75">
                <span>
                    {/* <small>Every contributed pantun will be licensed as "All rights reserved" meaning you, the writer(s), the pemantun(s), own(s) the pantun. In a future update, we will allow the change of license to other licenses such <a href="https://fairuse.stanford.edu/overview/public-domain/welcome/">the public domain</a> or <a href="https://creativecommons.org/licenses/by/4.0/deed.en">CC-BY 4.0</a> if you ever wish to change it.</small> */}
                    {/* <small>Setiap pantun yang diderma akan dilesenkan sebagai "Hakcipta Terpelihara" yang bermaksud pantun tersebut hak milik mutlak penulis. Ke depan, kami akan membuka ruang untuk penukaran lesen kepada <a href="https://ms.wikipedia.org/wiki/Domain_awam">domain awam</a> atau <a href="https://ms.wikipedia.org/wiki/Lesen_Creative_Commons">Lesen Creative Commons</a> jika anda berhajat menukarnya.</small> */}
                    <p>Setiap pantun yang diderma akan dilesenkan sebagai "Hakcipta Terpelihara" yang bermaksud pantun tersebut hak milik mutlak penulis. Untuk pantun yang penulisnya tidak bernama, ia akan menjadi harta intelek di bawah penjagaan Pantunis. Jika anda ingin menuntutnya, tuntutan boleh dibuat kepada <a href="https://x.com/irfan__zainudin">Irfan</a> melalui Twitter (saluran yang lebih formal akan ditubuhkan, saluran ini untuk kemudahan semua orang). Ke depan, kami akan membuka ruang untuk penukaran lesen kepada <a href="https://ms.wikipedia.org/wiki/Domain_awam">domain awam</a> atau <a href="https://ms.wikipedia.org/wiki/Lesen_Creative_Commons">Lesen Creative Commons</a> jika anda berhajat menukarnya.</p>
                </span>
            </article>
        </main>
    );
  }

export default NotisLesen;