import express from 'express';
import bodyParser from 'body-parser';
import * as dotenv from "dotenv";
import cors from 'cors';
import ProfileRouter from './router/ProfileRouter';
import GamesRouter from './router/GamesRouter';
import AuthRouter from './router/AuthRouter';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use('/api', AuthRouter);
app.use('/api', ProfileRouter);
app.use('/api', GamesRouter);

app.use((req: any, res: any) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
