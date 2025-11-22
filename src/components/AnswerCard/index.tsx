import React from "react";
import { Button } from "@mui/material";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

import styles from "./AnswerCard.module.css";

interface AnswerCardProps {
    question: any;
    onReevaluationClick: (questionNumber: number) => void;
    onFeedbackClick?: (questionNumber: number) => void;
}

const AnswerCard: React.FC<AnswerCardProps> = ({
    question,
    onReevaluationClick,
    onFeedbackClick
}) => {
    return (
        <div className={styles.cardContainer}>

            {/* Header */}
            <div className={styles.header}>
                <div className={styles.questionNumberGroup}>
                    <span className={styles.qNumberText}>
                        Question Number : {question?.questionNumber}
                    </span>
                </div>

                {/* Buttons */}
                <div className={styles.actionButtonsGroup}>
                    <Button
                        variant="contained"
                        startIcon={<SpeakerNotesIcon />}
                        onClick={() => onFeedbackClick && onFeedbackClick(question?.questionNumber)}
                        className={`${styles.actionButton} ${styles.feedbackButton}`}
                    >
                        Request Feedback
                    </Button>

                    <Button
                        variant="contained"
                        startIcon={<CompareArrowsIcon />}
                        onClick={() => onReevaluationClick(question?.questionNumber)}
                        className={`${styles.actionButton} ${styles.reEvaluateButton}`}
                    >
                        Re-evaluate
                    </Button>
                    <span className={styles.scoreText}>Score : {question?.score}</span>
                </div>


            </div>

            {/* Content */}
            <div className={styles.questionTitle}>{question?.questionTitle}</div>

            <div className={styles.pageNumber}>Page : {question?.pageNumber}</div>

            <div className={styles.answerBox}>
                <p className={styles.answerText}>{question?.answer}</p>
            </div>
        </div>
    );
};

export default AnswerCard;
