import React from "react";
import styles from "./SubjectRegistration.module.css";

interface ExamItem {
  sNo: string;
  subject: string;
  subjectCode: string;
  examDate: string;
}

const examData: ExamItem[] = [];

const SubjectRegistration: React.FC = () => {
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
            {examData.map((item, index) => {
              const dateParts = item.examDate.split(" ");
              const dateMain = `${dateParts[0]} ${dateParts[1]}`;
              const dateTime = dateParts.slice(2).join(" ");

              return (
                <tr key={index} className={styles.row}>
                  <td className={styles.tdCenter}>{item.sNo}</td>
                  <td className={styles.tdLeft}>{item.subject}</td>
                  <td className={styles.tdCenter}>{item.subjectCode}</td>
                  <td className={styles.tdCenter}>
                    <div className={styles.dateBold}>{dateMain}</div>
                    <div className={styles.dateSub}>{dateTime}</div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default SubjectRegistration;
