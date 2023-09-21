import {
  StudentCreationRequest,
  StudentValidator,
} from '@/lib/validators/student';
import { z } from 'zod';
import { uuid } from 'uuidv4';
import { studentData } from '@/lib/mockData';

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const { dateOfBirth, name, surname, nationalIdNumber, studentNumber } =
      StudentValidator.parse(body);

    const student: StudentCreationRequest = {
      id: uuid(),
      dateOfBirth,
      name,
      surname,
      nationalIdNumber,
      studentNumber,
    };

    studentData.push(student);

    return new Response(JSON.stringify(student));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response('Invalid request data passed', { status: 422 });
    }

    return new Response('Could not create student', {
      status: 500,
    });
  }
}
