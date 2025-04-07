import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


import authRouter from '../Routes/authRoutes';


dotenv.config();
const app = express();

app.use(cors({
    credentials: true
}));
app.use(express.json());

app.use('/api/auth', authRouter);




app.listen(5000, () => console.log('Server running on port 5000'));
