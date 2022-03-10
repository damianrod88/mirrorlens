import React from "react";
import { API_HOST } from "./constant";
import { useEffect, useState } from "react";

function ContentRowQuantity() {
    const [lastProduct, setLastProduct] = useState([]);
    const [users, setUsers] = useState([]);
    const [brands, setBrands] = useState([]);

    async function fetchLastProduct() {
        const response = await fetch(`${API_HOST}/api/products/`);
        const data = await response.json();
        setLastProduct(data.data);
    }

    async function fetchUsers() {
        const response = await fetch(`${API_HOST}/api/users/?page=1&limit=100`);
        const data = await response.json();
        setUsers(data.data);
    }

    async function fetchBrands() {
        const response = await fetch(`${API_HOST}/api/products/brands/`);
        const data = await response.json();
        setBrands(data.data);
    }

    useEffect(() => {
        fetchLastProduct();
        fetchUsers();
        fetchBrands();
    }, []);

    return (
        <div className="row">
            <div className="col-md-4 mb-4">
                <div className={`card border-left-primary shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div
                                    className={`text-xs font-weight-bold text-primary text-uppercase mb-1`}
                                >
                                    {"Quantity of products"}
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    {lastProduct.length}
                                </div>
                            </div>
                            <div className="col-auto">
                                <i
                                    className={`fas fa-clipboard-list fa-2x text-gray-300`}
                                ></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className={`card border-left-success shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div
                                    className={`text-xs font-weight-bold text-success text-uppercase mb-1`}
                                >
                                    {"Quantity of brands"}
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    {brands.length}
                                </div>
                            </div>
                            <div className="col-auto">
                                <i
                                    className={`fas fa-award fa-2x text-gray-300`}
                                ></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className={`card border-left-warning shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div
                                    className={`text-xs font-weight-bold text-warning text-uppercase mb-1`}
                                >
                                    {"Quantity of users"}
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    {users.length}
                                </div>
                            </div>
                            <div className="col-auto">
                                <i
                                    className={`fas fa-user-check fa-2x text-gray-300`}
                                ></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentRowQuantity;
