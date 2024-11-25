import { Schema, model, connect } from 'mongoose';

export type Parent = {
  fatherName: string;
  fatherOccupation: string;
  fatherContact: string;
  presentAddress: string;
  age: number;
};

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Student = {
  id: number;
  name: UserName;
  age: number;
  email: string;
  gender: 'male' | 'female';
  contract: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  address: string;
  guardian: Parent;
};
