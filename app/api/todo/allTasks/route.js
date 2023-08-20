import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import connectDB from '@/libs/db';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function POST() {
  try {
    const { user } = await getServerSession(authOptions);
    const rows = await connectDB({
      query: 'SELECT * FROM task WHERE user_id = ? LIMIT 9',
      values: [user.id],
    });
    return NextResponse.json({
      data: rows,
    });
  } catch (err) {
    return NextResponse.json({
      err: 'ocurrio un error, alltask',
    });
  }
}
