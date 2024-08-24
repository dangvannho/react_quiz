import { useState } from "react";
import { FaBars } from "react-icons/fa";
import SideBar from "../components/SideBar";
import "./AdminLayout.scss";

function AdminLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="admin-container">
      <SideBar collapsed={collapsed} />
      <FaBars onClick={() => setCollapsed(!collapsed)} />
      <div className="content">{children}</div>
    </div>
  );
}

export default AdminLayout;
