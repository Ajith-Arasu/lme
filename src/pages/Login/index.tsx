import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from 'react'
import LMELOGO from '../../assets/img/lme-logo.jpg'
import { loginService } from "../../API/services/auth.service";
interface LoginFormValues {
  username: string;
  password: string;
}

// Yup schema for required fields
const schema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
}).required();

const Login = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const res = await loginService({
        student_login_id: data.username,
        student_password: data.password,
      });
      console.log("res===>",res)
      if (res?.statusCode === 200) {
        // Redirect to page
        navigate("/exam-events");
      } else {
        setLoginError("Invalid credentials");
      }
    } catch (err: any) {
      console.error(err);
      setLoginError("Login failed. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.card} onSubmit={handleSubmit(onSubmit)}>
        <img src={LMELOGO} alt="lmn-logo" className={styles.logo} />

        {/* Username Field */}
        <input
          type="text"
          placeholder="User ID"
          className={styles.input}
          {...register("username")}
        />
        {errors.username && (
          <p className={styles.error}>{errors.username.message}</p>
        )}

        {/* Password Field */}
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          {...register("password")}
        />
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}

        {/* Invalid credentials */}
        {loginError && <p className={styles.error}>{loginError}</p>}

        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
