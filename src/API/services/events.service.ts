import api from "../Instance";
import {
  EVENTS_URL,
  STUDENT_EXAM_EVENTS_URL,
  STUDENT_EXAMS_URL,
} from "../urlConfig";

/**
 * ------------------------------------------------------
 * 1. GET ACTIVE EXAM EVENTS
 * ------------------------------------------------------
 * Endpoint:
 * /api/exam-events?university_id=5003
 */
export const getActiveExamEvents = async (university_id: string) => {
  const response = await api.get(EVENTS_URL, {
    params: { university_id },
  });

  return response.data;
};

/**
 * ------------------------------------------------------
 * 2. GET STUDENT EXAM EVENTS
 * ------------------------------------------------------
 * Endpoint:
 * /api/student/exam-events?student_id=34186&exam_event_id=332
 */
export const getStudentExamEvents = async (
  student_id: string,
  exam_event_id: string,
  count?: number | string,
  page?: number | string
) => {
  const params: Record<string, any> = { student_id, exam_event_id };

  if (count !== undefined && count !== "") params.count = count;
  if (page !== undefined && page !== "") params.page = page;

  const response = await api.get(STUDENT_EXAM_EVENTS_URL, {
    params,
  });

  return response.data;
};

/**
 * ------------------------------------------------------
 * 3. GET STUDENT EXAMS
 * ------------------------------------------------------
 * Endpoint:
 * /api/student/exams?student_id=34178&exam_id=3166
 */
export const getStudentExams = async (
  student_id: string,
  exam_id: string,
  count?: number | string,
  page?: number | string
) => {
  const params: Record<string, any> = { student_id, exam_id };

  if (count !== undefined && count !== "") params.count = count;
  if (page !== undefined && page !== "") params.page = page;

  const response = await api.get(STUDENT_EXAMS_URL, {
    params,
  });

  return response.data;
};
