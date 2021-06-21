import React, { useState } from "react";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

import {
  FaList,
  FaPoll,
  FaBriefcaseMedical,
  FaChartPie,
  FaCapsules,
} from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { DiEnvato } from "react-icons/di";
import { GiMedicalThermometer } from "react-icons/gi";
import { BiAccessibility } from "react-icons/bi";
import Home from "./home.css";
import { Link } from "react-router-dom";
//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";

const Header = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        <Link to="/home.css"></Link>
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                Dashboard
              </MenuItem>
              <MenuItem icon={<FaBriefcaseMedical />}>Doctor</MenuItem>
              <MenuItem icon={<BiAccessibility />}>Patient</MenuItem>
              <MenuItem icon={<FaList />}>Patient History</MenuItem>
              <MenuItem icon={<GiMedicalThermometer />}>Patient Case</MenuItem>
              <MenuItem icon={<DiEnvato />}>Diet</MenuItem>
              <MenuItem icon={<FaCapsules />}>Disease</MenuItem>
              <MenuItem icon={<FaPoll />}>Insurance Policy</MenuItem>
              <MenuItem icon={<FaChartPie />}>Finance</MenuItem>
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
