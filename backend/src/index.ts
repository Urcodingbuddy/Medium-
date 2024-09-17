import { Hono } from 'hono'
import { sign, verify } from 'hono/jwt'
import { userRouter } from './routes/user';
import { postRouter } from './routes/post';
import { cors } from 'hono/cors';



const app = new Hono<{
    Bindings: {
      DATABASE_URL: string,
      JWT_SECRET: string
    }
}>();

app.use('/*', cors())
app.route('/api/v1/user', userRouter);
app.route('/api/v1/post', postRouter);

app.get('*', async (c) => {
  const response = await fetch('dist/index.html'); // Fetch the file
  return c.html(await response.text()); // Return the file content
});

export default app






