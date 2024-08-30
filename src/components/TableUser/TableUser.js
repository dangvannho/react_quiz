import "./TableUser.scss";

function TableUser({
  listUser,
  setShowModalUpdate,
  setShowModalView,
  setDataUser,
}) {
  return (
    <div className="wapper-table">
      <table className="table table-bordered table-striped table-hover ">
        <thead>
          <tr>
            <th scope="col">Id</th>
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
                <th scope="row">{item.id}</th>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td className="group-btn">
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      setShowModalView(true);
                      setDataUser(item);
                    }}
                  >
                    View
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      setShowModalUpdate(true);
                      setDataUser(item);
                    }}
                  >
                    Update
                  </button>
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
