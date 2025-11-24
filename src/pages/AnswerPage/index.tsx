import { useState } from "react";
import AnswerCard from "../../components/AnswerCard";
import ReevaluateModal from "../../components/ReevaluateModal";
import { Button, Snackbar } from "@mui/material";
import FeedbackModal from "../../components/FeedbackModal";
import ExamDetailCard from "../../components/ExamDetailCard";
import styles from './AnswerPage.module.css'
const AnswerPage = () => {
    const [openReevaluateModal, setOpenReevaluateModal] = useState(false);
    const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
    const [openSnackBar, setOpenSnackBar] = useState(false);

    const [selectedQuestion, setSelectedQuestion] = useState<any>(null);

    const dummyQuestions = [
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
• Smaller mass flow rate

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
• Combustion occurs at subsonic speeds
• Effective up to Mach 3-6

Scramjet
• Combustion occurs at supersonic speeds
• Effective at hypersonic speeds (Mach 6+)`,
            status: "rejected"
        },
        {
            questionNumber: 4,
            score: "4.50 / 5.00",
            questionTitle: "Explain the difference between Impulse and Reaction turbines",
            pageNumber: 3,
            answer: `Impulse Turbine
• Pressure drop occurs only in the nozzle
• Kinetic energy changes across the rotor

Reaction Turbine
• Pressure drop occurs in both nozzle and rotor
• Uses both impulse and reaction forces`,
            status: "approved"
        }
    ];

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

    return (
        <div>
            <ExamDetailCard />

            {dummyQuestions.map((item, index) => (
                <AnswerCard
                    key={index}
                    question={item}
                    onReevaluationClick={() => handleOpenReevaluate(item)}
                    onFeedbackClick={() => handleOpenFeedback(item)}
                />
            ))}
            <div className={styles.submitButton}>
                <Button variant="contained" >Submit</Button>
            </div>
            {/* Reevaluate Modal */}
            <ReevaluateModal
                open={openReevaluateModal}
                onClose={handleCloseReevaluate}
                onSave={applyReevaluate}
                questionDetail={selectedQuestion}
            />

            {/* Feedback Modal (Now works like reevaluate) */}
            <FeedbackModal
                open={openFeedbackModal}
                onClose={handleCloseFeedback}
                onSave={addFeedback}
                questionDetail={selectedQuestion}
            />

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
