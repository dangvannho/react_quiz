import ReactPaginate from "react-paginate";
import { useState } from "react";
import "./TableUserPaginate.scss";

function TableUserPaginate({
  listUser,
  setShowModalUpdate,
  setShowModalView,
  setShowModalDelete,
  setDataUser,
  fetchListUserWithPaginate,
  pageCount,
}) {
  const handlePageClick = (event) => {
    fetchListUserWithPaginate(+event.selected + 1);
    console.log(`User requested page number ${event.selected}`);
  };
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
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      setShowModalDelete(true);
                      setDataUser(item);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {listUser.length === 0 && <p>Not found data</p>}

      <ReactPaginate
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< Prev"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default TableUserPaginate;
