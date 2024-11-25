import express from 'express';
import { studentController } from './student.controler';

const route = express.Router();

// this call controller func
route.post('/create-student', studentController.createStudent);
route.get('/', studentController.allStudents);
route.get('/:studentId', studentController.singleStudent);

export const StudentRoute = route;
