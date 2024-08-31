import { useState, useEffect } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcPlus } from "react-icons/fc";

import ModalCreateUser from "~/components/ModalCreateUser";
import ModalUpdateUser from "~/components/ModalUpdateUser";
import TableUser from "~/components/TableUser";
import ModalViewUser from "~/components/ModalViewUser";
import allUserService from "~/services/apiAllUserService";
import ModalDeleteUser from "~/components/ModalDeleteUser";
import "./ManageUser.scss";

function ManageUser() {
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalView, setShowModalView] = useState(false);
  const [dataUser, setDataUser] = useState({});
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    fetchListUser();
  }, []);

  // api
  const fetchListUser = async () => {
    const res = await allUserService();
    if (res.EC === 0) {
      setListUser(res.DT);
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
          <TableUser
            listUser={listUser}
            setShowModalUpdate={setShowModalUpdate}
            setShowModalView={setShowModalView}
            setShowModalDelete={setShowModalDelete}
            setDataUser={setDataUser}
          />
        </div>

        <ModalCreateUser
          show={showModalCreate}
          setShow={setShowModalCreate}
          fetchListUser={fetchListUser}
        />

        <ModalUpdateUser
          show={showModalUpdate}
          setShow={setShowModalUpdate}
          dataUser={dataUser}
          fetchListUser={fetchListUser}
        />

        <ModalDeleteUser
          show={showModalDelete}
          setShow={setShowModalDelete}
          dataUser={dataUser}
          fetchListUser={fetchListUser}
        />

        <ModalViewUser
          dataUser={dataUser}
          show={showModalView}
          setShow={setShowModalView}
        />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}

export default ManageUser;
