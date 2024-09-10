import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { FcPlus } from "react-icons/fc";

import ModalCreateUser from "~/components/ModalCreateUser";
import ModalUpdateUser from "~/components/ModalUpdateUser";
import ModalViewUser from "~/components/ModalViewUser";
import allUserService from "~/services/apiAllUserService";
import { userWithPaginate } from "~/services/apiAllUserService";
import ModalDeleteUser from "~/components/ModalDeleteUser";
import TableUserPaginate from "~/components/TableUserPaginate";
import "./ManageUser.scss";

function ManageUser() {
  const LIMIT_USER = 10;
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalView, setShowModalView] = useState(false);
  const [dataUser, setDataUser] = useState({});
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    // fetchListUser();
    fetchListUserWithPaginate(currentPage);
  }, [currentPage]);

  // api
  const fetchListUser = async () => {
    const res = await allUserService();
    if (res.EC === 0) {
      setListUser(res.DT);
    }
  };

  const fetchListUserWithPaginate = async (page) => {
    const res = await userWithPaginate(page, LIMIT_USER);
    if (res.EC === 0) {
      setListUser(res.DT.users);
      setPageCount(res.DT.totalPages);
    }
  };
  return (
    <div className="manage-user_container">
      <h2 className="manage-user_title">Manage User</h2>
      <div className="manage-user_content">
        <button
          className="btn btn-primary"
          onClick={() => setShowModalCreate(true)}
        >
          <FcPlus />
          Add new user
        </button>
        <div className="manage-user_table">
          {/*  <TableUser
            listUser={listUser}
            setShowModalUpdate={setShowModalUpdate}
            setShowModalView={setShowModalView}
            setShowModalDelete={setShowModalDelete}
            setDataUser={setDataUser}
          /> */}

          <TableUserPaginate
            listUser={listUser}
            setShowModalUpdate={setShowModalUpdate}
            setShowModalView={setShowModalView}
            setShowModalDelete={setShowModalDelete}
            setDataUser={setDataUser}
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <ModalCreateUser
          show={showModalCreate}
          setShow={setShowModalCreate}
          fetchListUser={fetchListUser}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          fetchListUserWithPaginate={fetchListUserWithPaginate}
        />

        <ModalUpdateUser
          show={showModalUpdate}
          setShow={setShowModalUpdate}
          dataUser={dataUser}
          fetchListUser={fetchListUser}
          currentPage={currentPage}
          fetchListUserWithPaginate={fetchListUserWithPaginate}
        />

        <ModalDeleteUser
          show={showModalDelete}
          setShow={setShowModalDelete}
          dataUser={dataUser}
          fetchListUser={fetchListUser}
          fetchListUserWithPaginate={fetchListUserWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <ModalViewUser
          dataUser={dataUser}
          show={showModalView}
          setShow={setShowModalView}
        />
      </div>
    </div>
  );
}

export default ManageUser;
