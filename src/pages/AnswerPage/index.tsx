import { useState, useEffect } from "react";
import AnswerCard from "../../components/AnswerCard";
import ReevaluateModal from "../../components/ReevaluateModal";
import { Button, Snackbar } from "@mui/material";
import FeedbackModal from "../../components/FeedbackModal";
import ExamDetailCard from "../../components/ExamDetailCard";
import styles from './AnswerPage.module.css';
import { getStudentExamAnswers } from "../../API/services/events.service";

const AnswerPage = () => {
    const [openReevaluateModal, setOpenReevaluateModal] = useState(false);
    const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
    const [openSnackBar, setOpenSnackBar] = useState(false);

    const [selectedQuestion, setSelectedQuestion] = useState<any>(null);

    // ✔ Must be a state (not const array)
    const [questions, setQuestions] = useState<any[]>([
        {
            questionNumber: 1,
            score: "3.50 / 5.00",
            questionTitle: "What makes jet engines incapable of interplanetary missions?",
            pageNumber: 1,
            answer: `Jet engines require oxygen for combustion.
They cannot operate in the absence of an atmosphere.`,
            status: ""
        },
        {
            questionNumber: 2,
            score: "2.50 / 5.00",
            questionTitle: "Distinguish between turboprop and turbofan systems",
            pageNumber: 1,
            answer: `Turboprop
Propeller is driven by turbine
Smaller mass flow rate

Fan is driven by turbine
Larger mass flow rate`,
            status: "applied"
        },
        {
            questionNumber: 3,
            score: "3.00 / 5.00",
            questionTitle: "Differentiate between Ramjet and Scramjet engines",
            pageNumber: 2,
            answer: `Ramjet
Combustion at subsonic speeds
Effective up to Mach 3-6

Scramjet
Combustion at supersonic speeds
Effective above Mach 6`,
            status: "rejected"
        },
        {
            questionNumber: 4,
            score: "4.50 / 5.00",
            questionTitle: "Explain the difference between Impulse and Reaction turbines",
            pageNumber: 3,
            answer: `Impulse Turbine
Pressure drop occurs only in nozzle
Kinetic energy changes across rotor

Reaction Turbine
Pressure drop occurs in both nozzle and rotor`,
            status: "approved"
        }
    ]);


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


    // 🔥 Fetch API on mount
    useEffect(() => {
        const fetchAnswers = async () => {
            try {
                const res = await getStudentExamAnswers("34178", "3166");
                console.log("Answer result ==>", res)
                if (res?.statusCode === 200 && Array.isArray(res?.data)) {

                    // Convert API response into your component format
                    const formatted = res.data.map((item: any, idx: number) => ({
                        questionNumber: idx + 1,
                        score: item.score || "-",
                        questionTitle: item.question_title || "Untitled",
                        pageNumber: item.page_number || 1,
                        answer: item.answer_text || "",
                        status: item.status || "",
                    }));
                    if (formatted.length) {
                        setQuestions(formatted);
                    }

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
                <Button variant="contained">Submit</Button>
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
