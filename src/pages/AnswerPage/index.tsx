import { useState } from "react";
import AnswerCard from "../../components/AnswerCard";
import CommentModal from "../../components/CommentModel";
import { Snackbar } from "@mui/material";
import StudentDetailCard from "../../components/StudentDetailCard";

const AnswerPage = () => {
    const [open, setOpen] = useState(false);
    const [openSnackBar, setOpenSnackBar] = useState(false);

    const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

    const dummyQuestions = [
        {
            questionNumber: 1,
            score: "3.50 / 5.00",
            questionTitle: "What makes jet engines incapable of interplanetary missions?",
            pageNumber: 1,
            answer: `Jet engines require oxygen for combustion.
They cannot operate in the absence of an atmosphere.`,
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
        }
    ];

    const handleOpen = (questionNumber: number) => {
        setSelectedQuestion(questionNumber);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedQuestion(null);
    };

    const commentSave = () => {
        setOpenSnackBar(true);
        setOpen(false)
        setTimeout(() => {
            setOpenSnackBar(false);
        }, 1000);
    };


    return (
        <div >
            <StudentDetailCard />
            {dummyQuestions.map((item, index) => (
                <AnswerCard
                    key={index}
                    questionNumber={item.questionNumber}
                    score={item.score}
                    questionTitle={item.questionTitle}
                    pageNumber={item.pageNumber}
                    answer={item.answer}
                    onCommentClick={handleOpen}
                />
            ))}

            {/* Modal */}
            <CommentModal
                open={open}
                onClose={handleClose}
                onSave={commentSave}
                questionNumber={selectedQuestion}
            />

            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={openSnackBar}
                message="Comment Added Successfully!"
                ContentProps={{
                    sx: {
                        backgroundColor: "var(--text-blue)",
                        color: 'white',
                        fontWeight: 'bold'
                    }
                }}
            />

        </div>
    );
};

export default AnswerPage;
