import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import _ from "lodash";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import deleteUser from "~/services/apiDeleteUserService";
import "~/components/ModalCreateUser/ModalCreateUser.scss";
import "./ModalDeleteUser.scss";

function ModalDeleteUser({
  show,
  setShow,
  dataUser,
  fetchListUser,
  setCurrentPage,
}) {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!_.isEmpty(dataUser)) {
      setId(dataUser.id);
      setEmail(dataUser.email);
    }
  }, [dataUser]);

  const handleDeleteUser = async () => {
    const data = await deleteUser(id);

    if (data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      // fetchListUser();
      setCurrentPage(1);
    } else {
      toast.error(data.EM);
    }
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      dialogClassName="delete-user"
    >
      <Modal.Header closeButton>
        <Modal.Title>Delete user</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Are you sure to delete this user , email: {email} ?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleDeleteUser}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDeleteUser;
