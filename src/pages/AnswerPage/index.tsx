import { useState, useEffect } from "react";
import AnswerCard from "../../components/AnswerCard";
import ReevaluateModal from "../../components/ReevaluateModal";
import { Button, Snackbar } from "@mui/material";
import FeedbackModal from "../../components/FeedbackModal";
import ExamDetailCard from "../../components/ExamDetailCard";
import styles from './AnswerPage.module.css';
import { getStudentExamAnswers } from "../../API/services/events.service";
import { useNavigationBlocker } from "../../hook/useBlocker";
import { useNavigate } from "react-router-dom";
import SubmitSuccessModal from "../../components/Modal/SubmitSuccessModal";

const AnswerPage = () => {

    const [openReevaluateModal, setOpenReevaluateModal] = useState(false);
    const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitSuccessOpen, setSubmitSuccessOpen] = useState(false);
    const [openSnackBar, setOpenSnackBar] = useState(false);

    const [selectedQuestion, setSelectedQuestion] = useState<any>(null);

    const [questions, setQuestions] = useState<any[]>([]);

    useNavigationBlocker(!isSubmitted);
    const navigate = useNavigate();


    // ---------------------- Reevaluation ----------------------
    const handleOpenReevaluate = (question: any) => {
        setSelectedQuestion(question);
        setOpenReevaluateModal(true);
    };

    const handleCloseReevaluate = () => {
        setOpenReevaluateModal(false);
        setSelectedQuestion(null);
    };

    const applyReevaluate = () => {
        setOpenSnackBar(true);
        setOpenReevaluateModal(false);
        setTimeout(() => setOpenSnackBar(false), 2000);
    };

    // ---------------------- Feedback Modal ----------------------
    const handleOpenFeedback = (question: any) => {
        setSelectedQuestion(question);
        setOpenFeedbackModal(true);
    };

    const handleCloseFeedback = () => {
        setOpenFeedbackModal(false);
        setSelectedQuestion(null);
    };

    const addFeedback = () => {
        setOpenSnackBar(true);
        setOpenFeedbackModal(false);
        setTimeout(() => setOpenSnackBar(false), 2000);
    };


    //-----------------------------Submit Button--------------------------
    const handleSubmit = () => {
        setSubmitSuccessOpen(true);
    };

    const handleSubmitSuccessClose = () => {
        setIsSubmitted(true);
        navigate(-1);
    };

    // 🔥 Fetch API on mount
    useEffect(() => {
        const fetchAnswers = async () => {
            try {
                const res = await getStudentExamAnswers("3166");
                console.log("Answer result ==>", res);

                if (res?.statusCode === 200 && Array.isArray(res?.data)) {

                    const formatted = res.data.map((item: any, idx: number) => ({
                        questionNumber: idx + 1,
                        questionId: item.question_id,
                        questionTitle: item.question || "Untitled",
                        questionImage: item.question_image || "",
                        pageNumber: item.page_number || 1,
                        answerText: item.answer_text || "",
                        score: item.score ?? "-",
                        status: item.status || "",
                        remarks: item.remarks || "",
                        maxMarks: item.max_marks || null,
                        evaluatorName: item.evaluator_name || null,
                    }));
                    console.log("formatted==>", formatted)
                    setQuestions(formatted);
                }
            } catch (error) {
                console.error("Failed to load exam answers:", error);
            }
        };

        fetchAnswers();
    }, []);



    return (
        <div>
            <ExamDetailCard />

            {questions.map((item, index) => (
                <AnswerCard
                    key={index}
                    question={item}
                    onReevaluationClick={() => handleOpenReevaluate(item)}
                    onFeedbackClick={() => handleOpenFeedback(item)}
                />
            ))}

            <div className={styles.submitButton}>
                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            </div>

            {/* Reevaluate Modal */}
            <ReevaluateModal
                open={openReevaluateModal}
                onClose={handleCloseReevaluate}
                onSave={applyReevaluate}
                questionDetail={selectedQuestion}
            />

            {/* Feedback Modal */}
            <FeedbackModal
                open={openFeedbackModal}
                onClose={handleCloseFeedback}
                onSave={addFeedback}
                questionDetail={selectedQuestion}
            />

            {/* Submitted Modal */}
            <SubmitSuccessModal
                open={submitSuccessOpen}
                onClose={handleSubmitSuccessClose}
            />

            {/* Snackbar */}
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={openSnackBar}
                message="Re-evaluation submitted successfully!"
                ContentProps={{
                    sx: {
                        backgroundColor: "var(--text-blue)",
                        color: "white",
                        fontWeight: "bold"
                    }
                }}
            />
        </div>
    );
};

export default AnswerPage;
