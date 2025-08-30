import {z} from 'zod';

export const signupInput = z.object({
    email: z.email(),
    password: z.string().min(6),       
    name: z.string().min(2).max(100)
});

export const signinInput = z.object({
    email: z.email(),
    password: z.string().min(6),       
});

export const createBlogInput = z.object({
    title: z.string().min(2).max(100),
    content: z.string().min(10),
});

export const updateBlogInput = z.object({
    title: z.string().min(2).max(100).optional(),
    content: z.string().min(10).optional(),
});

export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type CreateBlogInput = z.infer<typeof createBlogInput>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;

