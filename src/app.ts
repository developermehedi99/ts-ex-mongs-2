import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoute } from './app/modules/student/student.route';
const app: Application = express();

// parser as middleware
app.use(express.json());
app.use(cors());

// application router
app.use('/api/v1/students', StudentRoute);

app.get('/', (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
});

console.log(process.cwd());

export default app;
