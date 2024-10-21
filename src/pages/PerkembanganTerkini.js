import React, { useEffect } from "react";
import axios from "axios";
import Odometer from "odometer";

function PerkembanganTerkini() {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    // TODO: make it real-time
    fetchCount();
  }, []);

  const fetchCount = async () => {
    // Send GET request to 'pantun/jumlah' endpoint
    axios
      .get("https://api.pantunis.com/jumlah")
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
