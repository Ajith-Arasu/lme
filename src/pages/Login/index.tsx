import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import LMELOGO from "../../assets/img/lme-logo.jpg";
import { loginService } from "../../API/services/auth.service";

interface LoginFormValues {
  username: string;
  password: string;
}

// Yup schema
const schema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
}).required();

const Login = () => {
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    setLoginError("");
    setCaptchaError("");

    // Check recaptcha
    if (!captchaToken) {
      setCaptchaError("Please complete the reCAPTCHA.");
      return;
    }

    try {
      const res = await loginService({
        student_login_id: data.username,
        student_password: data.password,
      });

      if (res?.statusCode === 200) {
        navigate("/exam-events");
      } else {
        setLoginError("Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      setLoginError("Login failed. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.card} onSubmit={handleSubmit(onSubmit)}>
        <img src={LMELOGO} alt="logo" className={styles.logo} />

        {/* Username */}
        <input
          type="text"
          placeholder="User ID"
          className={styles.input}
          {...register("username")}
        />
        {errors.username && (
          <p className={styles.error}>{errors.username.message}</p>
        )}

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          {...register("password")}
        />
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}

        {/* reCAPTCHA */}
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
          onChange={(token) => {
            setCaptchaToken(token);
            setCaptchaError("");
          }}
        />

        {/* Captcha error */}
        {captchaError && <p className={styles.error}>{captchaError}</p>}

        {/* Login error */}
        {loginError && <p className={styles.error}>{loginError}</p>}

        {/* Submit button */}
        <button
          type="submit"
          className={styles.button}
          disabled={!captchaToken}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
