import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ExamEvents.module.css";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import { getActiveExamEvents } from "../../API/services/events.service";

interface MarkItem {
    sn: string;
    shedule: string;
    link: string;
}

const StudentDashboard = () => {
    const navigate = useNavigate();
    const [rows, setRows] = useState<MarkItem[]>([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [pendingLink, setPendingLink] = useState("");

    const DIALOG_DECLARATION =
        "I understand that the marks awarded during the revaluation shall be deemed final.";

    // 🔥 Fetch API on mount
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await getActiveExamEvents("5003");

                if (res?.statusCode === 200 && Array.isArray(res?.data)) {
                    const formatted = res.data.map((item: any, index: number) => ({
                        sn: (index + 1).toString().padStart(2, "0"),
                        shedule: item.exam_event_name,
                        link: "/exam-event/" + item.exam_event_id, // change based on your route
                    }));

                    setRows(formatted);
                }
            } catch (error) {
                console.error("Failed to load exam events:", error);
            }
        };

        fetchEvents();
    }, []);

    const handleLinkClick = (item: MarkItem) => {
        if (item.shedule.toLowerCase().includes("score")) {
            setPendingLink(item.link);
            setIsDialogOpen(true);
        } else {
            navigate(item.link);
        }
    };

    const handleAcceptAndContinue = () => {
        setIsDialogOpen(false);
        if (pendingLink) navigate(pendingLink);
        setPendingLink("");
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
        setPendingLink("");
    };

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
                        {rows.length === 0 ? (
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center", padding: "20px" }}>
                                    Loading exam events...
                                </td>
                            </tr>
                        ) : (
                            rows.map((item) => (
                                <tr key={item.sn}>
                                    <td>{item.sn}</td>
                                    <td>
                                        <div
                                            className={styles.tableSheetView}
                                            onClick={() => handleLinkClick(item)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            {item.shedule}
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Dialog */}
            <Dialog
                open={isDialogOpen}
                onClose={handleCloseDialog}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>Revaluation Marks Declaration</DialogTitle>

                <DialogContent>
                    <DialogContentText>{DIALOG_DECLARATION}</DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleCloseDialog} color="secondary">
                        Close
                    </Button>
                    <Button
                        onClick={handleAcceptAndContinue}
                        variant="contained"
                        color="primary"
                    >
                        Accept & Continue
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default StudentDashboard;
