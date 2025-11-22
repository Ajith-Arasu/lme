import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    TextField,
    Button
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./CommentModal.module.css";

interface CommentModalProps {
    open: boolean;
    onClose: () => void;
    questionNumber: number | null;
    onSave: any
}

const CommentModal: React.FC<CommentModalProps> = ({
    open,
    onClose,
    questionNumber,
    onSave
}) => {
    const [comment, setComment] = useState("");

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth classes={{ paper: styles.dialogPaper }}>
            <DialogTitle className={styles.dialogTitle}>
                Re-evaluation Application                
                <IconButton onClick={onClose} className={styles.dialogCloseButton}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent>
                <div className={styles.questionNumber}>
                    Question Number : {questionNumber}
                </div>

                <TextField
                    multiline
                    minRows={4}
                    fullWidth
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Enter your comment..."
                    className={styles.textField}
                    InputProps={{
                        classes: {
                            root: styles.textFieldRoot
                        }
                    }}
                />

                <div className={styles.buttonContainer}>
                    <Button
                        variant="outlined"
                        onClick={onClose}
                        className={styles.cancelButton}
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="outlined"
                        className={styles.saveButton}
                        onClick={onSave}
                    >
                        Save
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CommentModal;
