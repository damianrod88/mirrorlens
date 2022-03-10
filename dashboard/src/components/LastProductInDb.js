import { API_HOST } from "./constant";
import foto from "../assets/images/user-1646777066613.jpg";
import { useEffect, useState } from "react";

function LastProductInDb() {
    const [lastProduct, setLastProduct] = useState([]);
    async function fetchLastProduct() {
        const response = await fetch(`${API_HOST}/api/products/last`);
        const data = await response.json();
        setLastProduct(data.data);
    }
    useEffect(() => {
        fetchLastProduct();
    }, []);

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">
                        Last Product
                    </h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            style={{ width: "40em" }}
                            src={foto}
                            alt={lastProduct.name}
                        />
                    </div>

                    <h2>{lastProduct.name}</h2>
                    <p>{lastProduct.brands && lastProduct.brands.brand}</p>
                    <p>{lastProduct.description}</p>
                    <p>Precio: ${lastProduct.price}</p>
                    <a
                        className="btn btn-danger"
                        target="_blank"
                        rel="nofollow"
                        href="/"
                    >
                        Detail
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LastProductInDb;
