import React from "react";
import { API_HOST } from "./constant";
import { useEffect, useState } from "react";
import UserRow from "./UserRow";

function Users() {
    const [users, setUsers] = useState([]);
    async function fetchLastFive() {
        const response = await fetch(`${API_HOST}/api/users/lastfive`);
        const data = await response.json();
        setUsers(data.data);
    }
    useEffect(() => {
        fetchLastFive();
    }, []);

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                    Last Users added to Data Base
                </h5>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table
                        className="table table-bordered"
                        id="dataTable"
                        width="100%"
                        cellSpacing="0"
                    >
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Direction</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Id</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Direction</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {users.map((row, i) => {
                                return <UserRow {...row} key={i} />;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Users;
