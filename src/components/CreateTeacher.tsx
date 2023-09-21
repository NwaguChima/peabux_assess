import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/Button';
import { TeacherCreationRequest } from '@/lib/validators/teacher';
import useCreateProfiles from '@/hooks/useCreateProfiles';

interface CreateTeacherProps {}

const CreateTeacher: React.FC<CreateTeacherProps> = ({}) => {
  const { createTeacherProfile } = useCreateProfiles();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<TeacherCreationRequest>();

  const onSubmit = (data: TeacherCreationRequest) => {
    createTeacherProfile.mutate(data);
  };

  return (
    <div>
      <h2>Teacher Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto  p-4">
        <div className="mb-4">
          <label className="block mb-2">National ID Number</label>
          <input
            {...register('nationalIdNumber', {
              required: 'National ID number is required',
              minLength: {
                value: 11,
                message: 'National ID number must be 11 characters long',
              },
              maxLength: {
                value: 11,
                message: 'National ID number must be 11 characters long',
              },
            })}
            className="border border-gray-400 p-2 rounded w-full"
          />
          <span className="text-red-500">
            {errors.nationalIdNumber?.message}
          </span>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <select
            {...register('title', { required: 'Title is required' })}
            className="border border-gray-400 p-2 rounded w-full"
          >
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
            <option value="Prof">Prof</option>
          </select>
          <span className="text-red-500">{errors.title?.message}</span>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters long',
              },
              maxLength: {
                value: 255,
                message: 'Name must not exceed 255 characters',
              },
            })}
            className="border border-gray-400 p-2 rounded w-full"
          />
          <span className="text-red-500">{errors.name?.message}</span>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Surname</label>
          <input
            {...register('surname', {
              required: 'Surname is required',
            })}
            className="border border-gray-400 p-2 rounded w-full"
          />
          <span className="text-red-500">{errors.surname?.message}</span>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Date of Birth</label>
          <input
            type="date"
            {...register('dateOfBirth', {
              required: 'Date of Birth is required',
            })}
            className="border border-gray-400 p-2 rounded w-full"
          />
          <span className="text-red-500">{errors.dateOfBirth?.message}</span>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Teacher Number</label>
          <input
            {...register('teacherNumber', {
              required: 'Teacher Number is required',
            })}
            className="border border-gray-400 p-2 rounded w-full"
          />
          <span className="text-red-500">{errors.teacherNumber?.message}</span>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Salary (Optional)</label>
          <input
            type="number"
            {...register('salary')}
            className="border border-gray-400 p-2 rounded w-full"
          />
        </div>

        <Button isLoading={createTeacherProfile.isLoading} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateTeacher;
