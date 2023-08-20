/* eslint-disable eqeqeq */
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../../auth/[...nextauth]/route';
import connectDB from '@/libs/db';

export async function POST(req) {
  const { task_id } = await req.json();

  const session = await getServerSession(authOptions);

  const [task] = await connectDB({
    query: 'SELECT * FROM task WHERE task_id = ?',
    values: [task_id],
  });

  if (task.user_id != session.user.id || !task) {
    return NextResponse.json({
      error: 'WRONG CREDENTIALS',
      msg: { user_id: task.user_id, session, task },
    });
  }

  try {
    const row = await connectDB({
      query: 'DELETE FROM task WHERE task_id = ?',
      values: [task_id],
    });
    return NextResponse.json(row);
  } catch (err) {
    return NextResponse.json({ error: err });
  }
}
