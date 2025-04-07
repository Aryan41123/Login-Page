import { useMutation } from "@tanstack/react-query";
import { login } from "../lib/api";

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};
