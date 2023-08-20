import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { z } from 'zod';
import { authOptions } from '../../auth/[...nextauth]/route';
import connectDB from '@/libs/db';

export async function POST(req) {
  const Req = await req.json();

  const { name, description, state } = Req;

  const { user } = await getServerSession(authOptions);

  if (!user?.id) return NextResponse.redirect(new URL('/', 'login'));

  const Task = z.object({
    name: z.coerce.string().min(0).max(50),
    description: z.coerce.string().min(0).max(200),
    state: z.coerce.boolean(),
  });

  try {
    Task.parse({ name, description, state });

    const row = await connectDB({
      query: 'INSERT INTO task (name, description, state, user_id) VALUES (?, ?, ?, ?)',
      values: [name, description, state, user.id],
    });

    return NextResponse.json({
      row,
    });
  } catch (err) {
    return NextResponse.json({
      error: JSON.parse(err.message),
    });
  }
}
