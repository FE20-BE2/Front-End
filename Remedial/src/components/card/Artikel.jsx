import React from "react";
// import "/src/css/SevenSection.css";

function SevenSection(id, title) {
    return (
        <div className="card">
          <h3>Name: {title}</h3>
          <p>ID: {id}</p>
        </div>
      );
}

export default SevenSection;
