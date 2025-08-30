import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import { userRouter } from './user';


const app = new Hono<{
  Bindings: {
    DATABASE_ACCELERATE_URL: string;
    JWT_SECRET: string;
  }
}>();

app.route('/api/v1', userRouter);
app.route('/api/v1/blog', userRouter);

export default app
 