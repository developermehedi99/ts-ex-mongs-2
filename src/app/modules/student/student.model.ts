import { Schema, model, connect } from 'mongoose';
import { Parent, Student, UserName } from './student.interface';

const userNameSehema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String },
});

const guardianSchema = new Schema<Parent>({
  fatherName: String,
  fatherOccupation: String,
  fatherContact: String,
  presentAddress: String,
  age: Number,
});

const studentSchema = new Schema<Student>({
  id: { type: Number, required: true },
  name: userNameSehema,
  age: Number,
  email: { type: String, required: true },
  gender: ['male', 'female'],
  contract: String,
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  address: String,
  guardian: guardianSchema,
});

// 3. Create a Model.
export const StudentModel = model<Student>('Student', studentSchema);
