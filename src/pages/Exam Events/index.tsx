import { useState } from "react";
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

interface MarkItem {
    sn: string;
    shedule: string;
    link: string;
}

const rows: MarkItem[] = [
    {
        sn: "01",
        shedule: "Click here to view Subject Registration Details",
        link: "/subject-registration-details",
    },
    {
        sn: "02",
        shedule: "Click here to View Score card For Semester 7",
        link: "/exam-event",
    },
    {
        sn: "03",
        shedule: "Click here to View Score card For Semester 6",
        link: "/exam-event",
    },
];

const StudentDashboard = () => {
    const navigate = useNavigate();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [pendingLink, setPendingLink] = useState("");

    const DIALOG_DECLARATION =
        "I understand that the marks awarded during the revaluation shall be deemed final.";


    const handleLinkClick = (item: MarkItem) => {
        if (item.shedule.includes("Score card")) {
            setPendingLink(item.link);
            setIsDialogOpen(true);
        } else {
            navigate(item.link);
        }
    };

    const handleAcceptAndContinue = () => {
        setIsDialogOpen(false);
        if (pendingLink) {
            navigate(pendingLink);
        }
        setPendingLink(""); // Clear the pending link
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
                        {rows.map((item) => (
                            <tr key={item.sn}>
                                <td>{item.sn}</td>
                                <td>
                                    <div
                                        className={styles.tableSheetView}
                                        onClick={() => {
                                            handleLinkClick(item);
                                        }}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {item.shedule}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* MUI Confirmation Dialog */}
            <Dialog
                open={isDialogOpen}
                onClose={handleCloseDialog}
                aria-labelledby="confirmation-dialog-title"
                aria-describedby="confirmation-dialog-description"
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle id="confirmation-dialog-title">
                    {"Revaluation Marks Declaration"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="confirmation-dialog-description">
                        {DIALOG_DECLARATION}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleCloseDialog()} color="secondary">
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