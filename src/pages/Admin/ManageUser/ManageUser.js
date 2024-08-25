import { useState } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcPlus } from "react-icons/fc";
import ModalCreateUser from "~/components/ModalCreateUser";
import "./ManageUser.scss";

function ManageUser() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="manage-user_container">
      <h2 className="manage-user_title">Manage User</h2>
      <div className="manage-user_content">
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          <FcPlus />
          Add new user
        </button>
        <div className="manage-user_table">table user</div>
        <ModalCreateUser show={showModal} setShow={setShowModal} />
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
