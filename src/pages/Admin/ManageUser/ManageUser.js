import ModalCreateUser from "~/components/ModalCreateUser";

function ManageUser() {
  return (
    <div className="manage-user_container">
      <h2 className="manage-user_title">Manage User</h2>
      <div className="manage-user_content">
        <ModalCreateUser />
        <div className="manage-user_table">table user</div>
      </div>
    </div>
  );
}

export default ManageUser;
