import { useState } from "react";
import AnswerCard from "../../components/AnswerCard";
import CommentModal from "../../components/CommentModel";

const AnswerPage = () => {
    const [open, setOpen] = useState(false);
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
    ];

    const handleOpen = (questionNumber: number) => {
        setSelectedQuestion(questionNumber);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedQuestion(null);
    };

    return (
        <div style={{ padding: "20px" }}>
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
                questionNumber={selectedQuestion}
            />
        </div>
    );
};

export default AnswerPage;
