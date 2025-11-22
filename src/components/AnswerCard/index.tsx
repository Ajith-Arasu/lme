import styles from "./AnswerCard.module.css";
import ReEvaluationColorIcon from "../../assets/img/reavluation-arraow-color.png";

interface AnswerCardProps {
    questionNumber: number;
    score: string;
    questionTitle: string;
    pageNumber: number;
    answer: string;
    onCommentClick: (questionNumber: number) => void;
}

const AnswerCard: React.FC<AnswerCardProps> = ({
    questionNumber,
    score,
    questionTitle,
    pageNumber,
    answer,
    onCommentClick
}) => {

    return (
        <div className={styles.card}>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.questionNumber}>
                    <span className={styles.qNumber}>Question Number : {questionNumber}</span>

                    <span
                        className={styles.addComment}
                        onClick={() => onCommentClick(questionNumber)}
                    >
                        <img src={ReEvaluationColorIcon} alt="re-evaluation icon" className={styles.icon}/>
                        Apply For Re-evaluation
                    </span>
                </div>

                <span className={styles.score}>Score : {score}</span>
            </div>

            {/* Question Title */}
            <div className={styles.title}>{questionTitle}</div>

            {/* Page No */}
            <div className={styles.page}>Page : {pageNumber}</div>

            {/* Answer Area */}
            <div className={styles.answerBox}>
                <p className={styles.answerText}>{answer}</p>
            </div>
        </div>
    );
};

export default AnswerCard;
