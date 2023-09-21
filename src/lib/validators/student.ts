import {z} from 'zod'

export const StudentValidator = z.object({
    nationalIdNumber: z.string().min(11, {message: 'National ID number must be 11 characters long.'}).max(11, {message: 'National ID number must be 11 characters long.'}),
    name: z.string().min(2).max(255),
    surname: z.string().min(2).max(255),
    dateOfBirth: z.date().refine((date) => {
        const age = Math.floor((new Date().getTime() - date.getTime()) / 31557600000)
        return age <= 22
    }, {message: 'Student must not be older than 22 years old.'}),
    studentNumber: z.string().min(8).max(8),
})


export type StudentCreationRequest = z.infer<typeof StudentValidator>;