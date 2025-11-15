import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import bigLogo from "../../assets/img/big-logo.png";
import smallLogo from "../../assets/img/small-logo.png";

import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
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

      {/* Arrow (half outside sidebar) */}
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
        <NavLink to="/marklist-report" className={styles.menuItem}>
          <DashboardIcon className={styles.icon} />
          {open && <span className={styles.menuItemText}>Marklist Report</span>}
        </NavLink>

        <NavLink to="/comments" className={styles.menuItem}>
          <ChatIcon className={styles.icon} />
          {open && <span className={styles.menuItemText}>Comments</span>}
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
        <NavLink to="/logout" className={styles.menuItem}>
          <LogoutIcon className={styles.icon} />
          {open && <span className={styles.menuItemText}>Logout</span>}
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
