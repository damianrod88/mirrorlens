import React from "react";
function Brand(props) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card bg-secondary text-white shadow">
        <div className="card-body">{props.brand}</div>
      </div>
    </div>
  );
}
export default Brand;
