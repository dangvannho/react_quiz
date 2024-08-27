import { useState, useEffect } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcPlus } from "react-icons/fc";
import ModalCreateUser from "~/components/ModalCreateUser";
import TableUser from "~/components/TableUser";
import apiAllUserService from "~/services/apiAllUserService";
import "./ManageUser.scss";

function ManageUser() {
  const [showModal, setShowModal] = useState(false);

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
    <div className="manage-user_container">
      <h2 className="manage-user_title">Manage User</h2>
      <div className="manage-user_content">
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          <FcPlus />
          Add new user
        </button>
        <div className="manage-user_table">
          <TableUser listUser={listUser} />
        </div>
        <ModalCreateUser
          show={showModal}
          setShow={setShowModal}
          fetchListUser={fetchListUser}
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
