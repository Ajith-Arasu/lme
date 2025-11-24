import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ExamEvents.module.css"; // Keep your existing CSS for the table
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    useTheme, // Optional: for using the theme's colors/spacing
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
    const theme = useTheme(); // Use theme for potential custom styling (optional)

    // State to control the visibility of the MUI dialog
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    // State to store the link that should be navigated to upon acceptance
    const [pendingLink, setPendingLink] = useState("");

    const DIALOG_DECLARATION =
        "I understand that the marks awarded during the revaluation shall be deemed final.";

    // --- Handlers ---

    // Handler for the table link click
    const handleLinkClick = (item: MarkItem) => {
        // Only show dialog for Score Card links
        if (item.shedule.includes("Score card")) {
            setPendingLink(item.link);
            setIsDialogOpen(true);
        } else {
            // For other links (like subject registration), navigate directly
            navigate(item.link);
        }
    };

    // Handler for the "Accept & Continue" button
    const handleAcceptAndContinue = () => {
        // Close the dialog and navigate to the stored link
        setIsDialogOpen(false);
        if (pendingLink) {
            navigate(pendingLink);
        }
        setPendingLink(""); // Clear the pending link
    };

    // Handler for closing the dialog (Cancel/Close button, or backdrop click)
    const handleCloseDialog = (event?: {}, reason?: "backdropClick" | "escapeKeyDown") => {
        // You can conditionally prevent closing on backdrop/escape if needed,
        // but generally, allowing it is good UX for alerts like this.
        if (reason === "backdropClick" || reason === "escapeKeyDown") {
            // If you want to ONLY allow closing via the button, you'd return here.
            // For this case, we allow closing but don't navigate.
        }
        setIsDialogOpen(false);
        setPendingLink(""); // Always clear the link if not accepted
    };


    // --- Component Rendering ---

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
                                        // Optional: Add a subtle pointer style if your CSS doesn't cover it
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
                    {/* Button to just close the popup */}
                    <Button onClick={() => handleCloseDialog()} color="secondary">
                        Close
                    </Button>
                    
                    {/* Button to accept and redirect */}
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