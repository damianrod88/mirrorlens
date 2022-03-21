import React from "react";
import { useState, useEffect, useRef } from "react";
import { API_HOST } from "./constant";

function SearchProducts() {
    const [products, setProducts] = useState([]);

    const [keyword, setKeyword] = useState("REEF");

    function onSearch(event) {
        event.preventDefault();
        setKeyword(searchInput.current.value);
        searchInput.current.value = "";
    }

    function getProducts() {
        fetch(`${API_HOST}/api/products/search?search=${keyword}`)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.data ? data.data : []);
            })
            .catch((error) => console.log(error));
    }
    const searchInput = useRef();
    useEffect(() => {
        getProducts();
    });

    return (
        <div className="container-fluid">
            <>
                <div className="row my-4">
                    <div className="col-12 col-md-6">
                        {/* Buscador */}
                        <form method="GET" onSubmit={onSearch}>
                            <div className="form-group">
                                <label htmlFor="">Buscar por nombre:</label>
                                <input
                                    ref={searchInput}
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <button className="btn btn-info">Search</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2>Productos para la palabra: {keyword}</h2>
                    </div>
                    {/* Listado de películas */}
                    {products.length > 0 &&
                        products.map((product, i) => {
                            return (
                                <div className="col-sm-6 col-md-3 my-4" key={i}>
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            <h5 className="m-1 font-weight-bold text-gray-800">
                                                {product.name}
                                            </h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="text-center">
                                                <img
                                                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                                    src={
                                                        require(`../assets${
                                                            product.imageProducts &&
                                                            product
                                                                .imageProducts
                                                                .image1
                                                        }`).default
                                                    }
                                                    alt={product.name}
                                                    style={{
                                                        width: "90%",
                                                        height: "110px",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            </div>
                                            <p>Precio: ${product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
                {products.length === 0 && (
                    <div className="alert alert-warning text-center">
                        No se encontraron productos
                    </div>
                )}
            </>
        </div>
    );
}

export default SearchProducts;
