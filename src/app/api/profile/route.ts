import { studentData, teacherData } from '@/lib/mockData';
import { z } from 'zod';

export async function GET(req: Request) {
  const url = new URL(req.url);

  try {
    const { profile } = z
      .object({
        profile: z.string(),
      })
      .parse({
        profile: url.searchParams.get('profile'),
      });

    if (profile === 'teacher') {
      return new Response(JSON.stringify(teacherData));
    } else if (profile === 'student') {
      return new Response(JSON.stringify(studentData));
    } else {
      return new Response('Invalid profile param passed', { status: 422 });
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response('Invalid request data passed', { status: 422 });
    }

    return new Response('Could not get profiles', {
      status: 500,
    });
  }
}
