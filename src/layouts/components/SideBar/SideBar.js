import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";
import { DiReact } from "react-icons/di";
import { Link } from "react-router-dom";

import config from "~/config";
import sidebarBg from "~/assets/imgs/bg2.jpg";
import "./SideBar.scss";

function SideBar({ collapsed, toggled, handleToggleSidebar }) {
  return (
    <ProSidebar
      image={sidebarBg}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <DiReact size={"3em"} />
          <span style={{ fontSize: "18px" }}>Admin</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<FaTachometerAlt />}>
            <Link to={config.routes.admin}>Dashboard</Link>
          </MenuItem>
          <SubMenu icon={<FaGem />} title="Features">
            <MenuItem>
              <Link to={config.routes.manageUser}>Quản lý User</Link>
            </MenuItem>
            <MenuItem>
              <Link to={config.routes.manageQuiz}>Quản lý Bài Quiz</Link>
            </MenuItem>
            <MenuItem>
              <Link to={config.routes.manageQuestion}>Quản lý Câu Hỏi</Link>
            </MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 55px",
          }}
        >
          <a
            href="https://github.com/dangvannho/react_quiz"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <span
              style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              &copy; viewSource
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
}

export default SideBar;
