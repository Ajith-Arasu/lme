import { useNavigate } from "react-router-dom";
import StudentDetailCard from "../../components/StudentDetailCard";
import styles from "./Marklist.module.css";
import ArticleIcon from '@mui/icons-material/Article';

interface MarkItem {
  sn: string;
  subject: string;
  date: string;
  questionPaper: string;
  answerKeys: string;
  view: string;
  marks: string;
}

const Marklist = () => {
  const navigate = useNavigate();
  const rows: MarkItem[] = [
    {
      sn: "01",
      subject: "Advanced Propulsion System [AAE 4043]",
      date: "03-Dec-2024",
      questionPaper: "QP_4043.pdf",
      answerKeys: "Key_4043.pdf",
      view: "View",
      marks: "30.00 / 50.00",
    },
    {
      sn: "02",
      subject: "Aircraft Design Project [AAE 4045]",
      date: "06-Dec-2024",
      questionPaper: "QP_4045.pdf",
      answerKeys: "Key_4045.pdf",
      view: "View",
      marks: "30.00 / 50.00",
    },
    {
      sn: "03",
      subject: "Flight Mechanics – II [AAE 4032]",
      date: "10-Dec-2024",
      questionPaper: "QP_4032.pdf",
      answerKeys: "Key_4032.pdf",
      view: "View",
      marks: "42.50 / 50.00",
    },
    {
      sn: "04",
      subject: "Aerospace Structures [AAE 4021]",
      date: "12-Dec-2024",
      questionPaper: "QP_4021.pdf",
      answerKeys: "Key_4021.pdf",
      view: "View",
      marks: "46.00 / 50.00",
    },
    {
      sn: "05",
      subject: "Gas Dynamics [AAE 4012]",
      date: "14-Dec-2024",
      questionPaper: "QP_4012.pdf",
      answerKeys: "Key_4012.pdf",
      view: "View",
      marks: "38.50 / 50.00",
    },
    {
      sn: "06",
      subject: "Aircraft Performance [AAE 4035]",
      date: "15-Dec-2024",
      questionPaper: "QP_4035.pdf",
      answerKeys: "Key_4035.pdf",
      view: "View",
      marks: "44.00 / 50.00",
    },
    {
      sn: "07",
      subject: "Avionics Systems [AAE 4051]",
      date: "16-Dec-2024",
      questionPaper: "QP_4051.pdf",
      answerKeys: "Key_4051.pdf",
      view: "View",
      marks: "41.00 / 50.00",
    },
    {
      sn: "08",
      subject: "Rocket Propulsion [AAE 4048]",
      date: "17-Dec-2024",
      questionPaper: "QP_4048.pdf",
      answerKeys: "Key_4048.pdf",
      view: "View",
      marks: "39.50 / 50.00",
    },
    {
      sn: "09",
      subject: "Aircraft Stability & Control [AAE 4029]",
      date: "18-Dec-2024",
      questionPaper: "QP_4029.pdf",
      answerKeys: "Key_4029.pdf",
      view: "View",
      marks: "47.00 / 50.00",
    },
    {
      sn: "10",
      subject: "Computational Fluid Dynamics [AAE 4060]",
      date: "19-Dec-2024",
      questionPaper: "QP_4060.pdf",
      answerKeys: "Key_4060.pdf",
      view: "View",
      marks: "36.00 / 50.00",
    },
    {
      sn: "11",
      subject: "Aerodynamics – II [AAE 4025]",
      date: "20-Dec-2024",
      questionPaper: "QP_4025.pdf",
      answerKeys: "Key_4025.pdf",
      view: "View",
      marks: "43.50 / 50.00",
    },
    {
      sn: "12",
      subject: "Aircraft Systems Engineering [AAE 4053]",
      date: "21-Dec-2024",
      questionPaper: "QP_4053.pdf",
      answerKeys: "Key_4053.pdf",
      view: "View",
      marks: "40.00 / 50.00",
    },
    {
      sn: "13",
      subject: "Vibration & Aeroelasticity [AAE 4038]",
      date: "22-Dec-2024",
      questionPaper: "QP_4038.pdf",
      answerKeys: "Key_4038.pdf",
      view: "View",
      marks: "37.50 / 50.00",
    },
    {
      sn: "14",
      subject: "Space Flight Dynamics [AAE 4065]",
      date: "23-Dec-2024",
      questionPaper: "QP_4065.pdf",
      answerKeys: "Key_4065.pdf",
      view: "View",
      marks: "45.00 / 50.00",
    },
    {
      sn: "15",
      subject: "Aircraft Materials & Manufacturing [AAE 4015]",
      date: "24-Dec-2024",
      questionPaper: "QP_4015.pdf",
      answerKeys: "Key_4015.pdf",
      view: "View",
      marks: "34.00 / 50.00",
    },
  ];


  return (
    <div className={styles.container}>

      <StudentDetailCard />

      <div className={styles.marklistcard}>
        <div className={styles.title}>
          <h4>Exam Event Name : End Semester Exam – Dec 2024</h4>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Subject [Code]</th>
              <th>Date</th>
              <th>Question Paper</th>
              <th>Answer Keys</th>
              <th>View</th>
              <th>Marks</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((item) => (
              <tr key={item.sn}>
                <td>{item.sn}</td>
                <td>{item.subject}</td>
                <td>{item.date}</td>
                <td>{item.questionPaper}</td>
                <td>{item.answerKeys}</td>
                <td><div className={styles.tableSheetView} onClick={() => { navigate("/answer-page") }}><ArticleIcon sx={{ fontSize: "14px" }} />{item.view}</div></td>
                <td>{item.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div >
  );
};

export default Marklist;
