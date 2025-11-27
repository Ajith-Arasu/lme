import React from "react";
import { Button } from "@mui/material";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import ReEvaluationColorIcon from "../../assets/img/reavluation-arraow-color.png";
import InfoIcon from '@mui/icons-material/Info';
import styles from "./AnswerCard.module.css";
import LaunchIcon from '@mui/icons-material/Launch';

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

    const getReevaluationStatus = (status: string) => {
        switch (status) {
            case "applied":
                return <span
                    className={styles.reeveluationStatus}
                >
                    <img src={ReEvaluationColorIcon} alt="re-evaluation icon" className={styles.icon} />
                    <span className={styles.applied}>Re-evaluation Submitted</span>
                </span>
            case "rejected":
                return <span
                    className={styles.reeveluationStatus}
                >
                    <img src={ReEvaluationColorIcon} alt="re-evaluation icon" className={styles.icon} />
                    <span className={styles.rejected}>Re-evaluation Rejected</span>
                </span>
            case "approved":
                return <span
                    className={styles.reeveluationStatus}
                >
                    <img src={ReEvaluationColorIcon} alt="re-evaluation icon" className={styles.icon} />
                    <span className={styles.approved}>Re-evaluation Approved</span>
                </span>
            default:
                return <></>
        }
    }

    return (
        <div className={styles.cardContainer}>

            {/* Header */}
            <div className={styles.header}>
                <div className={styles.questionNumberGroup}>
                    <span className={styles.qNumberText}>
                        Question Number : {question?.questionNumber}
                    </span>
                    {getReevaluationStatus(question?.status)}
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

                    {question?.status === "" && <Button
                        variant="contained"
                        startIcon={<CompareArrowsIcon />}
                        onClick={() => onReevaluationClick(question?.questionNumber)}
                        className={`${styles.actionButton} ${styles.reEvaluateButton}`}
                    >
                        Re-evaluate
                    </Button>}
                    <div className={styles.scoreValue}>
                        {question?.status === "approved" && <InfoIcon className={styles.infoIcon} />}
                        <span className={styles.scoreText}>Score : {question?.score}</span>
                    </div>
                </div>


            </div>

            {/* Content */}
            <div className={styles.contentContainer}>
                <div className={styles.questionName}>
                    <div
                        className={styles.questionTitle}
                        dangerouslySetInnerHTML={{ __html: question?.questionTitle || "" }}
                    ></div>

                    <LaunchIcon className={styles.launchIcon} />
                </div>

                <div className={styles.pageNumber}>Page : {question?.pageNumber}</div>
                <div className={styles.answerBox}>
                    <img
                        src="https://via.placeholder.com/400x300?text=Sample+Image"
                        alt="Sample Answer"
                        className={styles.answerImage}
                    />
                </div>
            </div>

        </div>
    );
};

export default AnswerCard;
