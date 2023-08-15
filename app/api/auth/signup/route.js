/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import connectDB from '@/libs/db';

export async function POST(req) {
  const {
    fullName, username, email, password,
  } = await req.json();

  if (!password || password.length < 6) {
    return NextResponse.json({
      error: 'The password must be at least 6 characters',
    }, {
      status: 400,
    });
  }

  const match = await connectDB({
    query: 'SELECT * FROM user WHERE email = ?',
    values: [email],
  });

  if (match.length) {
    return NextResponse.json({
      error: 'the email is used',
    }, {
      status: 400,
    });
  }

  const saltPassword = await bcryptjs.hash(password, 10);

  try {
    await connectDB({
      query: 'INSERT INTO user (fullName, email, username, password) VALUES (?, ?, ?, ?)',
      values: [
        fullName, email, username, saltPassword,
      ],
    });
  } catch (err) {
    return NextResponse.json({
      error: err.message,
    }, {
      status: 400,
    });
  }

  return NextResponse.json({
    message: 'signup',
    fullName,
    username,
    email,
    password,
  });
}
