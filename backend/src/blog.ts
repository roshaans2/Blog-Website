import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import { createBlogInput, updateBlogInput } from '@robertsdev/medium-common';

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_ACCELERATE_URL: string;
    JWT_SECRET: string;
  },
  Variables: {
    userId: string;
  };
}>();

blogRouter.use('/*', async (c, next) => {
  const authHeader = c.req.header('Authorization') || "";
  const token = authHeader.split(' ')[1];
  const user = await verify(token, c.env.JWT_SECRET);
  try {
    if (user) {
        c.set('userId', user.id as string);
        await next(); 
    }
    else {
        return c.json({ error: 'You are not logged in' }, 401);
    } 
  } catch (error) {
    return c.json({ error: 'You are not logged in' }, 401);
  }
})

blogRouter.get('/bulk', async(c) => {
    const env = c.env;
    const prisma = new PrismaClient({
        datasourceUrl: env.DATABASE_ACCELERATE_URL,
    }).$extends(withAccelerate());
    try {
        const blogs = await prisma.post.findMany({
          select: {
            id: true,
            title: true,
            content: true,
            published: true,
            author: {
              select: {
                name: true
              }
            }
          }
        });
        return c.json(blogs);
    } catch (error) {
        return c.json({ error: 'Error fetching blogs' });
    }
})

blogRouter.get('/:id', async(c) => { 
  const env = c.env;
  const prisma = new PrismaClient({
    datasourceUrl: env.DATABASE_ACCELERATE_URL,
  }).$extends(withAccelerate());
	const id = c.req.param('id')
    try {
        const blog = await prisma.post.findFirst({
            where : {
                id: id
            },
            select: {
              id: true,
              title: true,
              content: true,
              published: true,
              author: {
                select: {
                  name: true
                }
              }
            }
                
        })
        return c.json(blog);
    } catch (error) {
        return c.json({ error: 'Error fetching blog' });
    }

})

blogRouter.post('/', async(c) => {
  const env = c.env;
  const prisma = new PrismaClient({
    datasourceUrl: env.DATABASE_ACCELERATE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
    const { success } = createBlogInput.safeParse(body);
    if(!success) {
      c.status(400);
      return c.json({ error: "Invalid input" });
    }
  const authorId = c.get('userId');
  try {
    const blog = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: authorId
        }
    })
    return c.json(blog);
  } catch (error) {
    return c.json({ error: 'Failed to create blog'});
  }
})

blogRouter.put('/:blogId', async(c) => {
  const env = c.env;
  const prisma = new PrismaClient({
    datasourceUrl: env.DATABASE_ACCELERATE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const { success } = updateBlogInput.safeParse(body);
  if(!success) {
    c.status(400);
    return c.json({ error: "Invalid input" });
 }
  try {
    const blog = await prisma.post.update({
        where: {
            id: c.req.param('blogId')
        },
        data: {
            title: body.title,
            content: body.content
        }
    })
    return c.json(blog);
  } catch (error) {
    return c.json({ error: 'Failed to update blog' });
  }
})