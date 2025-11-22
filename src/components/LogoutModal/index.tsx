import React from "react";
import styles from "./ExamScheduleTable.module.css";

const examData = [
  { sNo: "01", subject: "Advanced Propulsion System", subjectCode: "AAE 4043", examDate: "03- Dec-2024 (03:00 PM - 04:00 PM)" },
  { sNo: "02", subject: "Aircraft Design Project", subjectCode: "AAE 4045", examDate: "06- Dec-2024 (03:00 PM - 04:00 PM)" },
  { sNo: "03", subject: "Aerodynamics - II", subjectCode: "AAE 4041", examDate: "10- Dec-2024 (03:00 PM - 04:00 PM)" },
  { sNo: "04", subject: "Aircraft Structures - II", subjectCode: "AAE 4042", examDate: "15- Dec-2024 (03:00 PM - 04:00 PM)" },
  { sNo: "05", subject: "Flight Dynamics and Control", subjectCode: "AAE 4044", examDate: "18- Dec-2024 (03:00 PM - 04:00 PM)" },
];

const ExamScheduleTable = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.cardContainer}>
        <div className={styles.header}>LM Testing All Type Questions</div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th className={`${styles.th} ${styles.sno}`}>S.No</th>
              <th className={`${styles.th} ${styles.subject}`}>Subject</th>
              <th className={`${styles.th} ${styles.code}`}>Subject Code</th>
              <th className={`${styles.th} ${styles.date}`}>Exam Date</th>
            </tr>
          </thead>

          <tbody>
            {examData.map((item, index) => (
              <tr key={index} className={styles.row}>
                <td className={styles.tdCenter}>{item.sNo}</td>
                <td className={styles.tdLeft}>{item.subject}</td>
                <td className={styles.tdCenter}>{item.subjectCode}</td>
                <td className={styles.tdCenter}>
                  <div className={styles.dateBold}>
                    {item.examDate.split(" ")[0]} {item.examDate.split(" ")[1]}
                  </div>
                  <div className={styles.dateSub}>
                    {item.examDate.split(" ").slice(2).join(" ")}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExamScheduleTable;
