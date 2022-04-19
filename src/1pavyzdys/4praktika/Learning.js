import React from "react";
import { useState } from "react";

function Learning({ key, language, img, status }) {
  const [postStatus, setPostStatus] = useState({ key, language, img, status });

  function changedStatus() {
    setPostStatus((previuosStatus) => {
      return { ...previuosStatus, status: "Išmokau" };
    });
  }

  return (
    
      <div className="col-3">
      <div className="card" style={{ width: 14 + "rem" }}>
        <img src={img} className="card-img-top p-2" alt="img" />
        <div className="card-body">
          <p className="card-text">{language}</p>
          <p>{postStatus.status}</p>
          <button className="btn btn-primary" onClick={changedStatus}>
            OK
          </button>
        </div>
      </div>
      </div>
    
  );
}

export default Learning;