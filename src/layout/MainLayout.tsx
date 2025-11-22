import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";

import styles from "./MainLayout.module.css";
import LogoutModal from "../components/LogoutModal";

const MainLayout = () => {
  const [logoutOpen, setLogoutOpen] = useState(false);

  const openLogout = () => setLogoutOpen(true);
  const closeLogout = () => setLogoutOpen(false);

  const confirmLogout = () => {
    console.log("User logged out");
    window.location.href = "/";
  };

  return (
    <div className={styles.container}>
      
      {/* SEND TRIGGER TO SIDEBAR */}
      <Sidebar onLogoutClick={openLogout} />

      <div className={styles.content}>
        
        {/* SEND TRIGGER TO NAVBAR */}
        <Navbar onLogoutClick={openLogout} />

        <main className={styles.main}>
          <Outlet />
        </main>
      </div>

      {/* LOGOUT MODAL HERE */}
      <LogoutModal
        open={logoutOpen}
        onClose={closeLogout}
        onConfirm={confirmLogout}
      />
    </div>
  );
};

export default MainLayout;
