import api from "../Instance";
import { LOGIN_URL } from "../urlConfig";

export interface LoginRequest {
  student_login_id: string;
  student_password: string;
}

export interface StudentInfo {
  school_id: string;
  uty_id: string;
  stud_name: string;
  roll_num: string;
  stud_photo: string;
  stud_id: string;
}

export interface LoginResponse {
  statusCode: number;
  data: {
    student: StudentInfo;
    access_token: string;
    refresh_token: string;
  };
  message: string;
  appCode: number;
}

/**
 * Login API
 */
export const loginService = async (
  payload: LoginRequest
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>(LOGIN_URL, payload);

  // Save tokens
  // if (response?.data?.data?.access_token) {
  //   localStorage.setItem("access_token", response.data.data.access_token);
  // }
  // if (response.data.data.refresh_token) {
  //   localStorage.setItem("refresh_token", response.data.data.refresh_token);
  // }

  // // Save student info (optional)
  // localStorage.setItem("student", JSON.stringify(response.data.data.student));

  return response.data;
};
