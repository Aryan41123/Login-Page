import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginInput } from "../lib/schema";
import { useLogin } from "../hooks/useLogin";
import styles from "./LoginForm.module.css";

export const LoginForm = () => {
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isPending } = useLogin();

  const onSubmit = (data: LoginInput) => {
    setServerError("");
    setSuccessMessage("");

    mutate(data, {
      onSuccess: (response) => {
        console.log("✅ Login Response:", response);
        setSuccessMessage("Login successful! 🎉");
        setTimeout(() => setSuccessMessage(""), 3000);
      },
      onError: (error: any) => {
        if (error.response?.data?.message) {
          setServerError(error.response.data.message);
        } else {
          setServerError("Something went wrong. Please try again.");
        }
        setTimeout(() => setServerError(""), 3000);
      },
    });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
        <h1 className={styles.heading}>Welcome back!</h1>

        <input {...register("uid")} placeholder="UID" className={styles.input} />
        {errors.uid && <p className={styles.error}>{errors.uid.message}</p>}

        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className={styles.input}
        />
        {errors.password && <p className={styles.error}>{errors.password.message}</p>}

        {successMessage && <p className={styles.success}>{successMessage}</p>}
        {serverError && <p className={styles.error}>{serverError}</p>}

        <button type="submit" disabled={isPending} className={styles.button}>
          {isPending ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};
