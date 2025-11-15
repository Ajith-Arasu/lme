import styles from "./Marklist.module.css";

interface MarkItem {
  sn: string;
  subject: string;
  date: string;
  marks: string;
}

const Marklist = () => {
  const rows: MarkItem[] = [
    {
      sn: "01",
      subject: "Advanced Propulsion System [AAE 4043]",
      date: "03-Dec-2024",
      marks: "30.00 / 50.00",
    },
    {
      sn: "02",
      subject: "Aircraft Design Project [AAE 4045]",
      date: "06-Dec-2024",
      marks: "30.00 / 50.00",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title}>
          <h4>Academic Transcript</h4>
        </div>

        <div className={styles.cardContent}>
          <div className={styles.profile}>
            <img src="https://avatar.iran.liara.run/public" alt="student" />
          </div>

          <div className={styles.infoBlock}>
            <p>Student Name : <span className={styles.label}>Seetha Lakshmi</span></p>
            <p>DOB :<span className={styles.label}> 17-12-1995</span></p>
            <p>Roll No :<span className={styles.label}> UME450987</span></p>
          </div>

          <div className={styles.infoBlock}>
            <p>Course :<span className={styles.label}> Aeronautical</span></p>
            <p>Batch :<span className={styles.label}> Aeronautical</span></p>
            <p>Year / Semester :<span className={styles.label}> Semester 7</span></p>
          </div>
        </div>

      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Marks</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((item) => (
            <tr key={item.sn}>
              <td>{item.sn}</td>
              <td>{item.subject}</td>
              <td>{item.date}</td>
              <td>{item.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Marklist;
