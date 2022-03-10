import React from "react";

function UserRow(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.direction}</td>
    </tr>
  );
}

export default UserRow;
