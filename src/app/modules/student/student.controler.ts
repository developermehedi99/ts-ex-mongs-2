import { Request, Response } from 'express';
import { studentService } from './student.servic';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await studentService.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: 'student create successfully done',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const allStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentsFormDB();
    res.status(200).json({
      success: true,
      message: 'student all find',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const singleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.getSingleStudentsFormDB(studentId);
    res.status(200).json({
      success: true,
      message: 'single student find',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentController = {
  createStudent,
  allStudents,
  singleStudent,
};
