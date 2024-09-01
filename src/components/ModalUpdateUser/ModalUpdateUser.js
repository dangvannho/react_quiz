import { useEffect, useState } from "react";
import _ from "lodash";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "~/components/ModalCreateUser/ModalCreateUser.scss";
import updateUser from "~/services/apiUpdateUserService";

function ModalUpdateUser({
  show,
  setShow,
  fetchListUser,
  dataUser,
  currentPage,
  fetchListUserWithPaginate,
}) {
  const [id, setId] = useState("");
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
      setId(dataUser.id);
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

  const handleUploadImage = (e) => {
    if (e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    }
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmitUpdateUSer = async () => {
    // call api
    const data = await updateUser(id, username, role, image);
    if (data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      fetchListUserWithPaginate(currentPage);
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
                value={role}
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
        <Button variant="primary" onClick={handleSubmitUpdateUSer}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalUpdateUser;
