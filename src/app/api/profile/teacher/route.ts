import { z } from 'zod';
import { uuid } from 'uuidv4';
import { teacherData } from '@/lib/mockData';
import {
  TeacherCreationRequest,
  TeacherValidator,
} from '@/lib/validators/teacher';

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const {
      dateOfBirth,
      name,
      nationalIdNumber,
      surname,
      teacherNumber,
      title,
      salary,
    } = TeacherValidator.parse(body);

    const teacher: TeacherCreationRequest = {
      id: uuid(),
      dateOfBirth,
      name,
      nationalIdNumber,
      surname,
      teacherNumber,
      title,
      salary,
    };

    teacherData.push(teacher);

    return new Response(JSON.stringify(teacher));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response('Invalid request data passed', { status: 422 });
    }

    return new Response('Could not create teacher', {
      status: 500,
    });
  }
}
