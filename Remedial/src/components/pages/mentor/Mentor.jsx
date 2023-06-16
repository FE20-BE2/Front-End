import React, { useState } from "react";
import axios from "axios";

const Mentor = () => {
  const [mentor, setMentor] = useState([]);

  async function getMentor() {
    try {
      const response = await axios.get(
        "https://api-remedial-production-ecd6.up.railway.app/api/mentor"
      );
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default Mentor;
