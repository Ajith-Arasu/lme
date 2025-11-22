import React from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    TextField,
    Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import styles from "./FeedbackModal.module.css";

interface FeedbackModalProps {
    open: boolean;
    onClose: () => void;
    questionDetail: any;
    onSave: any;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({
    open,
    onClose,
    questionDetail,
    onSave,
}) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            classes={{ paper: styles.dialogPaper }}
        >
            <DialogTitle className={styles.dialogTitle}>
                <div className={styles.titleContent}>
                    {/* Added the icon with a reddish color typical for comparison/swap */}
                    <SpeakerNotesIcon className={styles.icon} />
                    <span>FeedBack</span>
                </div>

                <IconButton onClick={onClose} className={styles.closeButton} size="small">
                    <CloseIcon fontSize="small" />
                </IconButton>
            </DialogTitle>

            <DialogContent className={styles.dialogContent}>
                <div className={styles.questionNumber}>
                    Question Number : {questionDetail?.questionNumber}
                </div>

                <TextField
                    multiline
                    minRows={5}
                    fullWidth
                    placeholder="Enter your Feedback..."
                    className={styles.textField}
                    InputProps={{
                        classes: {
                            root: styles.textFieldRoot,
                            notchedOutline: styles.noBorder,
                        },
                    }}
                />

                <div className={styles.buttonContainer}>
                    <Button
                        onClick={onClose}
                        className={styles.cancelButton}
                    >
                        Cancel
                    </Button>

                    <Button
                        className={styles.applyButton}
                        onClick={onSave}
                    >
                        Request Feedback
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default FeedbackModal;