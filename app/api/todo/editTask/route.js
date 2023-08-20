import { NextResponse } from 'next/server';
import connectDB from '@/libs/db';

export async function POST(req) {
  console.log('pin');
  const {
    name, description, state, task_id,
  } = await req.json();

  try {
    await connectDB({
      query: 'UPDATE task SET name = ?, description = ?, state = ? WHERE task_id = ?',
      values: [name, description, state, task_id],
    });
    return NextResponse.json({ data: 'ok' });
  } catch (err) {
    return NextResponse.json(
      { err },
      { status: 400 },
    );
  }
}
