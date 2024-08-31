import { useEffect, useState } from "react";
import _ from "lodash";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "~/components/ModalCreateUser/ModalCreateUser.scss";
import "./ModalViewUser.scss";
import avatarDefault from "~/assets/imgs/avatarDefault.svg";

function ViewUser({ show, setShow, dataUser }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if (!_.isEmpty(dataUser)) {
      setEmail(dataUser.email);
      setUsername(dataUser.username);
      setRole(dataUser.role);

      if (dataUser.image) {
        setPreviewImage(`data:image/jpeg;base64,${dataUser.image}`);
      } else {
        setPreviewImage("");
      }
    }
  }, [dataUser]);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>View user</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="container profile-page">
          <div className="row">
            <div className="col-xl-12">
              <div className="card profile-header">
                <div className="body">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className="profile-image float-md-right">
                        {previewImage ? (
                          <img src={previewImage} alt="" className="avatar" />
                        ) : (
                          <img src={avatarDefault} alt="" className="avatar" />
                        )}
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-12 info">
                      <h3 className="mb-3">{username}</h3>
                      <p className="lable-title">
                        <strong>Email: </strong>
                        {email}
                      </p>
                      <p className="lable-title">
                        <strong>Role: </strong>
                        {role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewUser;
