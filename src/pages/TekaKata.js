import React from 'react';

// importing our own components
import Kata from '../components/TekaKataComponent';

function TekaKata() {
    return (
      <main className="container mt-3 animate__animated animate__fadeIn">
        <hgroup>
            <h1>
                <i className="bi bi-braces"></i> Teka Kata
            </h1>
            <p>Isi tempat kosong dengan menggunakan perkataan<br/>yang betul daripada pangkalan data Pantunis.</p>
        </hgroup>
        <Kata />
      </main>
    )
}

export default TekaKata;
