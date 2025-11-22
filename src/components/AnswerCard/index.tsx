import styles from "./AnswerCard.module.css";
import ReEvaluationColorIcon from "../../assets/img/reavluation-arraow-color.png";

interface AnswerCardProps {
    question: any;
    onCommentClick: (questionNumber: number) => void;
}

const AnswerCard: React.FC<AnswerCardProps> = ({
    question,
    onCommentClick
}) => {

    return (
        <div className={styles.card}>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.questionNumber}>
                    <span className={styles.qNumber}>Question Number : {question?.questionNumber}</span>

                    <span
                        className={styles.addComment}
                        onClick={() => onCommentClick(question?.questionNumber)}
                    >
                        <img src={ReEvaluationColorIcon} alt="re-evaluation icon" className={styles.icon} />
                        Apply For Re-evaluation
                    </span>
                </div>

                <span className={styles.score}>Score : {question?.score}</span>
            </div>

            {/* Question Title */}
            <div className={styles.title}>{question?.questionTitle}</div>

            {/* Page No */}
            <div className={styles.page}>Page : {question?.pageNumber}</div>

            {/* Answer Area */}
            <div className={styles.answerBox}>
                <p className={styles.answerText}>{question?.answer}</p>
            </div>
        </div>
    );
};

export default AnswerCard;
