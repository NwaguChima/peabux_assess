import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from './use-toast';
import { TeacherCreationRequest } from '@/lib/validators/teacher';
import { StudentCreationRequest } from '@/lib/validators/student';

const useCreateProfiles = () => {
  const queryClient = useQueryClient();

  const createStudentProfile = useMutation({
    mutationFn: async (payload: StudentCreationRequest) => {
      const { data } = await axios.post(`/api/profile/student`, payload);
      return data;
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Student profile created',
      });
    },
    onError: (error: any) => {
      if (error.response?.status === 422) {
        return toast({
          title: 'Unable to create student profile',
          description: error.response?.data,
          variant: 'destructive',
        });
      }

      toast({
        title: 'Unable to create student profile',
        description: 'An error has occurred',
        variant: 'destructive',
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries(['studentProfiles']);
    },
  });

  const createTeacherProfile = useMutation({
    mutationFn: async (payload: TeacherCreationRequest) => {
      const { data } = await axios.post(`/api/profile/teacher`, payload);
      return data;
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Teacher profile created',
      });
    },
    onError: (error: any) => {
      if (error.response?.status === 422) {
        return toast({
          title: 'Unable to create teacher profile',
          description: error.response?.data,
          variant: 'destructive',
        });
      }

      toast({
        title: 'Unable to create teacher profile',
        description: 'An error has occurred',
        variant: 'destructive',
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries(['teacherProfiles']);
    },
  });

  return {
    createStudentProfile,
    createTeacherProfile,
  };
};

export default useCreateProfiles;
