'use client';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { Button } from './ui/Button';
import { TeacherCreationRequest } from '@/lib/validators/teacher';
import useCreateProfiles from '@/hooks/useCreateProfiles';

interface CreateTeacherProps {}

const CreateTeacher: React.FC<CreateTeacherProps> = ({}) => {
  const { createTeacherProfile } = useCreateProfiles();
  const {
    handleSubmit,
    control,
    formState: { errors },
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
          <label className="block mb-2">Title</label>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <select
                {...field}
                className="border border-gray-400 p-2 rounded w-full"
              >
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
                <option value="Prof">Prof</option>
              </select>
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
          <label className="block mb-2">Teacher Number</label>
          <Controller
            name="teacherNumber"
            control={control}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  className="border border-gray-400 p-2 rounded w-full"
                />
                <span className="text-red-500">
                  {errors.teacherNumber?.message}
                </span>
              </>
            )}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Salary (Optional)</label>
          <Controller
            name="salary"
            control={control}
            render={({ field }) => (
              <input
                type="number"
                {...field}
                className="border border-gray-400 p-2 rounded w-full"
              />
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

        <Button isLoading={createTeacherProfile.isLoading} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateTeacher;
