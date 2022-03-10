import React from "react";
import LastProductInDb from "./LastProductInDb";
import BrandsInDb from "./BrandsInDb";

function ContentRowCenter() {
  return (
    <div className="row">
      <LastProductInDb />
      <BrandsInDb />
    </div>
  );
}

export default ContentRowCenter;
