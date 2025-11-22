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
import ReEvaluationColorIcon from "../../assets/img/reavluation-arraow-color.png";
import styles from "./ReevaluateModal.module.css";

interface ReevaluateModalProps {
    open: boolean;
    onClose: () => void;
    questionDetail: any;
    onSave: any;
}

const ReevaluateModal: React.FC<ReevaluateModalProps> = ({
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
                    <img src={ReEvaluationColorIcon} alt="re-evaluation icon" className={styles.icon} />
                    <span>Re-evaluation Application</span>
                </div>

                <IconButton onClick={onClose} className={styles.closeButton} size="small">
                    <CloseIcon fontSize="small" />
                </IconButton>
            </DialogTitle>

            <DialogContent className={styles.dialogContent}>
                <div className={styles.questionNumber}>
                    Question Number : {questionDetail?.questionNumber}
                </div>

                <div className={styles.questionText}>
                    {questionDetail?.questionTitle || ""}
                </div>


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
                        Apply
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ReevaluateModal;