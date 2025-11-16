import AnswerCard from "../../components/AnswerCard";

const AnswerPage = () => {
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
                />
            ))}
        </div>
    );
};

export default AnswerPage;
