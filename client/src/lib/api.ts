import axios from "axios";
import { LoginInput } from "./schema";
import { LoginResponse } from "../types/auth";

export const login = async (data: LoginInput): Promise<LoginResponse> => {
  const response = await axios.post("http://localhost:5000/api/auth/login", data); // Change URL to match your backend
  return response.data;
};
