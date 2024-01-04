import React, { useState, useEffect } from "react";
import axios from "axios";

function CurrentProgress() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // TODO: make it real-time
    fetchCount();
  }, []);

  const fetchCount = async () => {
    // Send GET request to 'pantun/jumlah' endpoint
    axios
      .get("https://pantunis-api.vercel.app/api/jumlah")
      .then((response) => {
        // Update the pantun count
        setCount(response.data[0]["count(*)"]);
      })
      .catch((error) =>
        console.error(
          `There was an error retrieving the pantun count: ${error}`
        )
      );
  };

  return (
    <main className="App-main">
      <div>
        <span>
          <big>
            <b>{count > 0 ? count : 0}</b>
          </big>{" "}
          {/* <p> */}
          <b>/ 1,000,000</b>
          {/* </p> */}
          <p>pantun dalam pangkalan data</p>
        </span>
      </div>
    </main>
  );
}

export default CurrentProgress;
