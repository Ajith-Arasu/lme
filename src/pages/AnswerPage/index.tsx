import { useState } from "react";
import AnswerCard from "../../components/AnswerCard";
import ReevaluateModal from "../../components/ReevaluateModal";
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
            status: "reevaluation applied"
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
            status: "approved"
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


    const handleOpen = (questionDetail: any) => {
        setSelectedQuestion(questionDetail);
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
        }, 2000);
    };


    return (
        <div >
            <StudentDetailCard />
            {dummyQuestions.map((item, index) => (
                <AnswerCard
                    key={index}
                    question={item}
                    onCommentClick={()=>{handleOpen(item)}}
                />
            ))}

            {/* Modal */}
            <ReevaluateModal
                open={open}
                onClose={handleClose}
                onSave={commentSave}
                questionDetail={selectedQuestion}
            />

            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={openSnackBar}
                message="Re-evaluation submitted successfully!"
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
