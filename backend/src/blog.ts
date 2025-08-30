import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_ACCELERATE_URL: string;
    JWT_SECRET: string;
  }
}>();



blogRouter.get('/:id', (c) => {
	const id = c.req.param('id')
	console.log(id);
	return c.text('get blog route')
})

blogRouter.get('/bulk', (c) => {
	return c.text('get bulk blog route')
})

blogRouter.post('/', (c) => {

	return c.text('create blog route')
})

blogRouter.put('/:blogId', (c) => {
	return c.text('update blog route')
})