import React from "react";
import styles from "./WorkingOnIt.module.css";
import workingImg from "../../assets/img/wip-image.png";

const WorkingOnIt: React.FC = () => {
    return (
        <div className={styles.container}>
            <img src={workingImg} alt="Working on it" className={styles.image} />

            {/* <h2 className={styles.title}>We’re working on it</h2>
            <p className={styles.subtitle}>Please check back soon</p> */}
        </div>
    );
};

export default WorkingOnIt;
