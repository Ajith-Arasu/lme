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
      <h1>Mark List - Report</h1>

      <div className={styles.card}>
        <h3>Academic Transcript</h3>

        <div className={styles.profile}>
          <img src="https://i.pravatar.cc/150" alt="student" />

          <div>
            <p><b>Student Name :</b> Seetha Lakshmi</p>
            <p><b>DOB :</b> 17-12-1995</p>
            <p><b>Roll No :</b> UME450987</p>
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
