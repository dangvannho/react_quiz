import { useEffect, useState } from "react";
import _ from "lodash";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "~/components/ModalCreateUser/ModalCreateUser.scss";
import createNewUser from "~/services/apiCreateService";

function ModalUpdateUser({ show, setShow, fetchListUser, dataUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  // Xử lý rò rỉ bộ nhớ
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(previewImage);
    };
  }, [previewImage]);

  useEffect(() => {
    if (!_.isEmpty(dataUser)) {
      setEmail(dataUser.email);
      setUsername(dataUser.username);
      setRole(dataUser.role);
      setImage("");

      if (dataUser.image) {
        setPreviewImage(`data:image/jpeg;base64,${dataUser.image}`);
      }
    }
  }, [dataUser]);

  const handleUploadImage = (e) => {
    if (e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    }
  };

  const handleClose = () => {
    setShow(false);
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmitCreareUSer = async () => {
    // validate
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Invalid email!");
      return;
    }
    if (!password) {
      toast.error("Invalid password!");
      return;
    }

    // call api
    const data = await createNewUser(email, password, username, role, image);

    if (data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      fetchListUser();
    } else {
      toast.error(data.EM);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} size="xl" backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Update user</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form>
          <div className="form-row ">
            <div className="form-group col-md-6">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                disabled
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                disabled
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group col-md-4">
              <label>Role</label>
              <select
                className="form-control"
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
          </div>

          <div className="form-group col-md-12 upload">
            <label htmlFor="label-upload-2" className="label-upload">
              <FcPlus />
              Upload File Image
            </label>
            <input
              type="file"
              hidden
              id="label-upload-2"
              onChange={(e) => handleUploadImage(e)}
            />
          </div>

          <div className="form-group col-md-12 img-preview">
            {previewImage ? (
              <img src={previewImage} alt="" />
            ) : (
              <span>Preview Image</span>
            )}
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmitCreareUSer}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalUpdateUser;
