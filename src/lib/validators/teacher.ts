import { z } from 'zod';

export const TeacherValidator = z.object({
  nationalIdNumber: z
    .string()
    .min(11, { message: 'National ID number must be 11 characters long.' })
    .max(11, { message: 'National ID number must be 11 characters long.' }),
  title: z.enum(['Mr', 'Mrs', 'Miss', 'Dr', 'Prof']),
  name: z.string().min(2).max(255),
  surname: z.string().min(2).max(255),
  dateOfBirth: z.date().refine(
    (date) => {
      const age = Math.floor(
        (new Date().getTime() - date.getTime()) / 31557600000
      );
      return age >= 21;
    },
    { message: 'Teacher must not be younger than 21 years old.' }
  ),
  teacherNumber: z.string(),
  salary: z.number().optional(),
  id: z.string().optional(),
});

export type TeacherCreationRequest = z.infer<typeof TeacherValidator>;
