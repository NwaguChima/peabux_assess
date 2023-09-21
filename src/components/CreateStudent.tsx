import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/Button';
import { StudentCreationRequest } from '@/lib/validators/student';
import useCreateProfiles from '@/hooks/useCreateProfiles';

interface CreateStudentProps {}

const CreateStudent: React.FC<CreateStudentProps> = ({}) => {
  const { createStudentProfile } = useCreateProfiles();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<StudentCreationRequest>();

  const onSubmit = (data: StudentCreationRequest) => {
    createStudentProfile.mutate(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto p-4">
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
          <label className="block mb-2">Student Number</label>
          <input
            {...register('studentNumber', {
              required: 'Student Number is required',
            })}
            className="border border-gray-400 p-2 rounded w-full"
          />
          <span className="text-red-500">{errors.studentNumber?.message}</span>
        </div>
        <Button isLoading={createStudentProfile.isLoading} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateStudent;
