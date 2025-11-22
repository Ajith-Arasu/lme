import React, { useState } from "react";
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
import styles from "./CommentModal.module.css";

interface CommentModalProps {
    open: boolean;
    onClose: () => void;
    questionDetail: any;
    onSave: any;
}

const CommentModal: React.FC<CommentModalProps> = ({
    open,
    onClose,
    questionDetail,
    onSave,
}) => {
    const [comment, setComment] = useState("");
    console.log("questionDetail==>", questionDetail)
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

                <TextField
                    multiline
                    minRows={5}
                    fullWidth
                    value={questionDetail?.questionTitle || ""}
                    className={styles.textField}
                    InputProps={{
                        readOnly: true,
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
                        Apply
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CommentModal;