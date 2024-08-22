import React, { useState, useEffect } from "react";
import axios from "axios";
import Odometer from "odometer";

// TODO: I don't think we need this
let headers = {
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Origin": "https://pantunis-api.vercel.app/",
  Vary: "Origin",
  "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  "Access-Control-Allow-Headers":
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
};

function PerkembanganTerkini() {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    // TODO: make it real-time
    fetchCount();
  }, []);

  const fetchCount = async () => {
    // Send GET request to 'pantun/jumlah' endpoint
    axios
      .get("https://pantunis-api.vercel.app/api/jumlah", headers)
      .then((response) => {
        // Setup OdomoterJS
        const odometer = new Odometer({
          el: document.querySelector(".pantun-odometer"),
          value: 0,
        });
        // Update the odometer object
        odometer.update(response.data[0]["count(*)"]);
        // Update the pantun count
        // setCount(response.data[0]["count(*)"]);
      })
      .catch((error) =>
        console.error(
          `There was an error retrieving the pantun count: ${error}`
        )
      );
  };

  return (
    <main className="App-main animate__animated animate__fadeIn animate__delay-1s">
      <div>
        <span>
          <big>
            <b className="odometer pantun-odometer">0</b>
          </big>{" "}
          <b>/ 1,000,000</b>
          <p>pantun dalam pangkalan data</p>
        </span>
      </div>
    </main>
  );
}

export default PerkembanganTerkini;
