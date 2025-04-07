import { z } from 'zod';

export const loginSchema = z.object({
  uid: z.string().min(1, "UID is required"),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
});



export type LoginInput = z.infer<typeof loginSchema>;



//**/.git