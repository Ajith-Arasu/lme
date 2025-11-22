import styles from "./ExamDetailCard.module.css";

const ExamDetailCard = () => {
    return (<div className={styles.studentcard}>
        <div className={styles.title}>
            <h4>Academic Transcript</h4>
        </div>

        <div className={styles.cardContent}>
            {/* <div className={styles.profile}>
                <img src="https://avatar.iran.liara.run/public" alt="student" />
            </div> */}

            {/* <div className={styles.infoBlock}>
                <p>Student Name : <span className={styles.label}>Seetha Lakshmi</span></p>
                <p>DOB : <span className={styles.label}>17-12-1995</span></p>
                <p>Roll No : <span className={styles.label}>UME450987</span></p>
            </div> */}

            <div className={styles.infoBlock}>
                <p>Course : <span className={styles.label}>Aeronautical Engineering</span></p>
                <p>Year / Semester : <span className={styles.label}>Semester 7</span></p>
                <p>Subject Name : <span className={styles.label}>Advanced Propulsion System [AAE 4043]</span></p>
            </div>

             <div className={styles.infoBlock}>
               <p>Exam Date : <span className={styles.label}>12-Aug-2026</span></p>
                <p>Start & End Time: <span className={styles.label}>9.00AM to 12:30PM</span></p>
                <p>Total Writing Duration : <span className={styles.label}>3hours 30minutes</span></p>
            </div>

            <div className={styles.markCard}>
                <div>30.00</div>
                <div className={styles.line}></div>
                <div>50.00</div>
            </div>

        </div>
    </div>)
}
export default ExamDetailCard;