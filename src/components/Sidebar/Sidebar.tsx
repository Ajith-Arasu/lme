import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

import bigLogo from "../../assets/img/big-logo.png";
import smallLogo from "../../assets/img/small-logo.png";

import styles from "./Sidebar.module.css";

interface SidebarProps {
  onLogoutClick: () => void;  
}

const Sidebar: React.FC<SidebarProps> = ({ onLogoutClick }) => { 
  const [open, setOpen] = useState(true);

  return (
    <div className={`${styles.sidebar} ${open ? styles.open : styles.closed}`}>

      {/* Logo Section */}
      <div className={styles.topSection}>
        <img
          src={open ? bigLogo : smallLogo}
          alt="Logo"
          className={open ? styles.bigLogo : styles.smallLogo}
        />
      </div>

      {/* Arrow */}
      <div className={styles.toggleWrapper}>
        <button className={styles.toggleBtn} onClick={() => setOpen(!open)}>
          <KeyboardArrowRightIcon
            sx={{ fontSize: 16, width: 20, height: 20 }}
            className={open ? styles.arrowOpen : styles.arrowClosed}
          />
        </button>
      </div>

      {/* Menu Items */}
      <nav className={styles.menu}>
        <NavLink to="/exam-events" className={styles.menuItem}>
          <DashboardIcon className={styles.icon} />
          {open && <span className={styles.menuItemText}>Exam Events</span>}
        </NavLink>

        <NavLink to="/re-evaluation" className={styles.menuItem}>
          <SwapHorizIcon className={styles.icon} />
          {open && <span className={styles.menuItemText}>My Re-evaluations</span>}
        </NavLink>

        <NavLink to="/settings" className={styles.menuItem}>
          <SettingsIcon className={styles.icon} />
          {open && <span className={styles.menuItemText}>Settings</span>}
        </NavLink>

        <NavLink to="/help" className={styles.menuItem}>
          <HelpOutlineIcon className={styles.icon} />
          {open && <span className={styles.menuItemText}>Help</span>}
        </NavLink>
      </nav>

      {/* Logout at Bottom */}
      <div className={styles.logoutSection}>
        <button className={styles.logoutButton} onClick={onLogoutClick}>
          <LogoutIcon className={styles.icon} />
          {open && <span className={styles.logoutButtonText}>Logout</span>}
        </button>
      </div>

    </div>
  );
};

export default Sidebar;
