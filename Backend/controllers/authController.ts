import { Request, Response } from 'express';
import { prisma } from '../prisma/client';
import bcrypt from 'bcrypt';
import { loginSchema } from '../Schemas/userSchema';

export const userLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    // Validate request body using Zod
    const parsed = loginSchema.safeParse(req.body);

    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      res.status(400).json({ message: 'Validation error', errors });
      return;
    }

    const { uid, password } = parsed.data;

    // Find the user in the database
    const user = await prisma.user.findUnique({
      where: { uid },
    });

    if (!user) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    // Compare password with the stored hash
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    // Send response with user data (no token in this case)
    res.json({
      user: { uid: user.uid },
      message: "Login successful!" // ✅ This should be included
    });


  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
