import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {useState} from 'react'
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

  const onSubmit: any = (data:any) => {
    const { username, password } = data;

    // Dummy login check
    if (username === "demouser" && password === "demo@123") {
      setLoginError("");
      navigate("/exam-events");
    } else {
      setLoginError("Invalid username or password.");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.card} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.title}>LME Login</h2>

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
