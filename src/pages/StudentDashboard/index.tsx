import { useNavigate } from "react-router-dom";
import styles from "./StudentDashboard.module.css";

interface MarkItem {
    sn: string;
    shedule: string;
    link: string

}

const StudentDashboard = () => {
    const navigate = useNavigate();
    const rows: MarkItem[] = [
        {
            sn: "01",
            shedule: "Click here to view Subject Registration Details",
            link: "/marklist-report"
        },
        {
            sn: "02",
            shedule: "Click here to View Score card For Semester 7",
            link: "/marklist-report"
        },
        {
            sn: "03",
            shedule: "Click here to View Score card For Semester 6",
            link: "/marklist-report"
        },

    ];


    return (
        <div className={styles.container}>

            <div className={styles.StudentDashboardcard}>
               
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Exam Schedule Details & Scoreboard</th>
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map((item) => (
                            <tr key={item.sn}>
                                <td>{item.sn}</td>
                                <td><div className={styles.tableSheetView} onClick={() => { navigate(item.link) }}>{item.shedule}</div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div >
    );
};

export default StudentDashboard;
