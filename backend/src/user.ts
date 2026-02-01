import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { signinInput, signupInput } from '@robertsdev/medium-common'
import { sign } from 'hono/jwt'

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_ACCELERATE_URL: string;
    JWT_SECRET: string;
  }
}>();

userRouter.post('/signup', async(c) => {
  console.log('Signup route called');
  const env = c.env;
  const prisma = new PrismaClient({
    datasourceUrl: env.DATABASE_ACCELERATE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);
  if(!success) {
    return c.json({ error: "Invalid input", status: 400 });
  }
  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: body.password
      }
    })
   const token = await sign({ id: user.id }, env.JWT_SECRET);
    return c.json({ jwt: token });
  } catch (error) {
    return c.json({ error: "User already exists", status: 403 });
  }
})

userRouter.post('/signin', async(c) => {
  const env = c.env;
  const prisma = new PrismaClient({
    datasourceUrl: env.DATABASE_ACCELERATE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);
  if(!success) {
    c.status(400);
    return c.json({ error: "Invalid input" });
  }
  const user  = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password
    }
  })
  if(!user) {
    c.status(403);
    return c.json({ error: "user not found" });
  }
  const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
	return c.json({ jwt });
})