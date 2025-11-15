import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const Navbar = () => {
    const [dateTime, setDateTime] = useState<string>("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setDateTime(now.toLocaleString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className={styles.navbar}>
            {/* LEFT SIDE TITLE */}
            <div className={styles.left}>Mark List - Report</div>

            {/* RIGHT SIDE */}
            <div className={styles.right}>
                <div className={styles.datetime}>
                    <span><CalendarMonthIcon /></span>
                    <span >{dateTime}</span>
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
                        <button>My Profile</button>
                        <button>Account Settings</button>
                        <button>Logout</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
