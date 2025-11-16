import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    TextField,
    Button
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

interface CommentModalProps {
    open: boolean;
    onClose: () => void;
    questionNumber: number | null;
}

const CommentModal: React.FC<CommentModalProps> = ({
    open,
    onClose,
    questionNumber
}) => {

    const [comment, setComment] = useState("");

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle
                sx={{ display: "flex", justifyContent: "space-between", fontWeight: 700 }}
            >
                Question Comments
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent>
                <div style={{ marginBottom: "12px", fontWeight: 600 }}>
                    Question Number : {questionNumber}
                </div>

                <TextField
                    multiline
                    minRows={4}
                    fullWidth
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Enter your comment..."
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "12px",
                            padding: "8px",
                        },
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "20px",
                        gap: "20px",
                    }}
                >
                    <Button variant="outlined" onClick={onClose}>
                        Cancel
                    </Button>

                    <Button variant="contained" color="primary">
                        Save
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CommentModal;
