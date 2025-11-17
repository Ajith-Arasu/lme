import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const [dateTime, setDateTime] = useState<string>("");
    const navigate = useNavigate();
    const location = useLocation(); 

    // Route → Title mapping
    const pageTitles: Record<string, string> = {
        "/marklist-report": "Mark List - Report",
        "/answer-page": "Answer Page",
        "/comments": "Comments",
        "/settings": "Settings",
        "/help": "Help",
        "/profile": "My Profile",
    };

    // Compute title based on current URL
    const pageTitle = pageTitles[location.pathname] || "Dashboard";

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setDateTime(now.toLocaleString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Also update browser tab title
    useEffect(() => {
        document.title = pageTitle;
    }, [pageTitle]);

    return (
        <header className={styles.navbar}>
            {/* LEFT SIDE TITLE DYNAMIC */}
            <div className={styles.left}>{pageTitle}</div>

            {/* RIGHT SIDE */}
            <div className={styles.right}>
                <div className={styles.datetime}>
                    <span><CalendarMonthIcon /></span>
                    <span>{dateTime}</span>
                </div>

                {/* PROFILE HOVER WRAPPER */}
                <div className={styles.profileWrapper}>
                    <img
                        src="https://avatar.iran.liara.run/public"
                        alt="profile"
                        className={styles.profileImg}
                    />
                    <div className={styles.infoColumn}>
                        <span className={styles.name}>Seetha Lakshmi</span>
                        <span className={styles.email}>seetha@example.com</span>
                    </div>

                    <div>
                        <ExpandMoreIcon className={styles.icon} />
                    </div>

                    {/* HOVER DROPDOWN */}
                    <div className={styles.dropdown}>
                        <button onClick={() => navigate('/profile')}>My Profile</button>
                        <button onClick={() => navigate('/settings')}>Account Settings</button>
                        <button onClick={() => navigate('/')}>Logout</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
