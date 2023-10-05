import React from "react";
import "react-pro-sidebar/dist/css/styles.css";
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
import sidebarBg from "../../assets/bg2.jpg";
import { DiReact } from "react-icons/di";
import { MdDashboard } from "react-icons/md";
import "./sidebar.css";
import { Link, useNavigate } from "react-router-dom";

const SideBar = (props) => {
  const navigate = useNavigate();
  const { image, collapsed, toggled, handleToggleSidebar } = props;

  return (
    <>
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
            <div onClick={() => navigate("/")}>
              <DiReact size={"3em"} color={"00bfff"} />
              <span>Timmy Pro vip</span>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<MdDashboard />}>
              Dashboard
              <Link to="/admin"></Link>
            </MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu icon={<FaGem />} title="Features">
              <MenuItem>
                Quản lý Users <Link to="manage-user"></Link>
              </MenuItem>
              <MenuItem>
                {" "}
                <Link to="manage-quiz"> Quản lý Bài Quiz</Link>
              </MenuItem>
              <MenuItem>
                {" "}
                Quản lý Câu Hỏi <Link to="manage-questions"></Link>
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <a
              href="/"
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
                &#169; Timmy @22
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
};

export default SideBar;
