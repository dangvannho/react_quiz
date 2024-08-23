import { useState } from "react";
import { FaBars } from "react-icons/fa";
import SideBar from "../components/SideBar";
import "./AdminLayout.scss";

function AdminLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="admin-container">
      <SideBar collapsed={collapsed} />
      <div className="content">
        <FaBars onClick={() => setCollapsed(!collapsed)} />
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;
