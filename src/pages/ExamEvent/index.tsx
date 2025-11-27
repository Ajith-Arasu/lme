import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import StudentDetailCard from "../../components/StudentDetailCard";
import styles from "./Marklist.module.css";
import ArticleIcon from '@mui/icons-material/Article';
import { getStudentExamEvents } from "../../API/services/events.service";

interface MarkItem {
  sn: string;
  subjectCode?: string;
  date?: string;
  questionPaper?: string;
  answerKeys?: string;
  view?: string;
  marks?: string;
  shedule?: string;
  link?: string;
}

const Marklist = () => {
  const navigate = useNavigate();

  const [rows, setRows] = useState<MarkItem[]>([]);

  // 🔥 Fetch API on mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await getStudentExamEvents("332");
        if (res?.statusCode === 200 && Array.isArray(res?.data)) {
          const formatted = res.data.map((item: any, index: number) => ({
            sn: (index + 1).toString().padStart(2, "0"),
            subjectCode: item?.subject_code,
            date:"-",
            questionPaper:"-",
            answerKeys:"-"
          }));
          if (formatted.length) {
            setRows(formatted);
          }
        }
      } catch (error) {
        console.error("Failed to load exam events:", error);
      }
    };

    fetchEvents();
  }, []);

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
                <td>{item.subjectCode}</td>
                <td>{item.date}</td>
                <td>{item.questionPaper}</td>
                <td>{item.answerKeys}</td>

                <td>
                  <div
                    className={styles.tableSheetView}
                    onClick={() => navigate("/answer-page")}
                  >
                    <ArticleIcon sx={{ fontSize: "14px" }} />
                    {item.view}
                  </div>
                </td>

                <td>{item.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Marklist;
