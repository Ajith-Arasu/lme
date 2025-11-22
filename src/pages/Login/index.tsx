import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import type { FormEvent } from "react";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/exam-events");
  };

  return (
    <div className={styles.container}>
      <form className={styles.card} onSubmit={handleLogin}>
        <h2 className={styles.title}>LME Login</h2>

        <input type="text" placeholder="User ID" className={styles.input} />
        <input type="password" placeholder="Password" className={styles.input} />

        <button className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;
