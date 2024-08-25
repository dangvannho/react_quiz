import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import ModalCreateUser from "~/components/ModalCreateUser";
import "./ManageUser.scss";

function ManageUser() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="manage-user_container">
      <h2 className="manage-user_title">Manage User</h2>
      <div className="manage-user_content">
        <button
          className="btn btn-secondary"
          onClick={() => setShowModal(true)}
        >
          <FaPlusCircle />
          Add new user
        </button>
        <div className="manage-user_table">table user</div>
        <ModalCreateUser show={showModal} setShow={setShowModal} />
      </div>
    </div>
  );
}

export default ManageUser;
