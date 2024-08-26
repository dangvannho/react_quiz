import { useState, useEffect } from "react";
import apiAllUserService from "~/services/apiAllUserService";

import "./TableUser.scss";

function TableUser() {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    fetchListUser();
  }, []);

  // api
  const fetchListUser = async () => {
    const res = await apiAllUserService();
    if (res.EC === 0) {
      setListUser(res.DT);
    }
  };

  return (
    <div className="wapper-table">
      <table className="table table-bordered table-striped table-hover ">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listUser.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td className="group-btn">
                  <button className="btn btn-primary">View</button>
                  <button className="btn btn-warning">Update</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {listUser.length === 0 && <p>Not found data</p>}
    </div>
  );
}

export default TableUser;
