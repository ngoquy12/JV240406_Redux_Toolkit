import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUser, removeUser } from "../services/userService";

export default function UserList() {
  const { status, data, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUser());
  }, []);

  const handleDelete = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <>
      <div>{status === "pending" && <div>Loading...</div>}</div>

      <h3>List User</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>DateOfBirth</th>
            <th>Email</th>
            <th>Address</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.dateOfBirth}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>
                <button>Sửa</button>
                <button onClick={() => handleDelete(user.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
