'use client';
import { StudentCreationRequest } from '@/lib/validators/student';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from './ui/Button';
import useCreateProfiles from '@/hooks/useCreateProfiles';

interface CreateStudentProps {}

const CreateStudent: React.FC<CreateStudentProps> = ({}) => {
  const { createStudentProfile } = useCreateProfiles();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<StudentCreationRequest>();

  const onSubmit = (data: StudentCreationRequest) => {
    createStudentProfile.mutate(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto p-4 ">
        <div className="mb-4">
          <label className="block mb-2">National ID Number</label>
          <Controller
            name="nationalIdNumber"
            control={control}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  className="border border-gray-400 p-2 rounded w-full"
                />
                <span className="text-red-500">
                  {errors.nationalIdNumber?.message}
                </span>
              </>
            )}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  className="border border-gray-400 p-2 rounded w-full"
                />
                <span className="text-red-500">{errors.name?.message}</span>
              </>
            )}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Surname</label>
          <Controller
            name="surname"
            control={control}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  className="border border-gray-400 p-2 rounded w-full"
                />
                <span className="text-red-500">{errors.surname?.message}</span>
              </>
            )}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Date of Birth</label>
          <Controller
            name="dateOfBirth"
            control={control}
            render={({ field }) => (
              <>
                {/* @ts-ignore */}
                <input
                  type="date"
                  {...field}
                  className="border border-gray-400 p-2 rounded w-full"
                />
                <span className="text-red-500">
                  {errors.dateOfBirth?.message}
                </span>
              </>
            )}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Student Number</label>
          <Controller
            name="studentNumber"
            control={control}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  className="border border-gray-400 p-2 rounded w-full"
                />
                <span className="text-red-500">
                  {errors.studentNumber?.message}
                </span>
              </>
            )}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">ID (Optional)</label>
          <Controller
            name="id"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                className="border border-gray-400 p-2 rounded w-full"
              />
            )}
          />
        </div>

        <Button isLoading={createStudentProfile.isLoading} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateStudent;
