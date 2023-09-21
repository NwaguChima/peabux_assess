import { StudentCreationRequest } from './validators/student';
import { TeacherCreationRequest } from './validators/teacher';

export let studentData: StudentCreationRequest[] = [
  {
    name: 'John',
    surname: 'Doe',
    dateOfBirth: new Date('1990-01-01'),
    nationalIdNumber: '1234567890',
    studentNumber: '1234567890',
    id: '1',
  },
];

export const teacherData: TeacherCreationRequest[] = [];
