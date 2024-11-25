import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentsFormDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentsFormDB = async (id: number) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const studentService = {
  createStudentIntoDB,
  getAllStudentsFormDB,
  getSingleStudentsFormDB,
};
