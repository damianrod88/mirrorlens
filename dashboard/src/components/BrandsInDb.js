import React from "react";
import { API_HOST } from "./constant";
import { useEffect, useState } from "react";
import Brand from "./Brand";

function BrandsInDb() {
    const [brands, setBrands] = useState([]);
    async function fetchBrands() {
        const response = await fetch(`${API_HOST}/api/products/brands/`);
        const data = await response.json();
        setBrands(data.data);
    }
    useEffect(() => {
        fetchBrands();
    }, []);

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">
                        Brands in Data Base
                    </h5>
                </div>
                <div className="card-body" id="color">
                    <div className="row">
                        {brands.map((brand, index) => {
                            return <Brand {...brand} key={index} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandsInDb;
