import { z } from "zod";

export const loginSchema = z.object({
  uid: z
    .string()
    .min(4, { message: "UID must be at least 4 characters" })
    .nonempty({ message: "UID is required" }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .nonempty({ message: "Password is required" }),
});

export type LoginInput = z.infer<typeof loginSchema>;
