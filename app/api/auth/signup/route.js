/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import { z } from 'zod';
import connectDB from '@/libs/db';

export async function POST(req) {
  console.log('pi');
  const User = z.object({
    username: z.coerce.string({
      invalid_type_error: 'The data type is invalid to this form',
      required_error: 'Need input username',
    }).min(5).max(30),
    password: z.coerce.string().max(200),
    fullName: z.coerce.string().max(50),
    email: z.coerce.string().email().min(8).max(30),
  });

  const {
    fullName, username, email, password,
  } = await req.json();
  console.log('pi');
  try {
    User.parse({
      fullName, username, email, password,
    });
  } catch (err) {
    return NextResponse.json({
      error: JSON.parse(err.message),
    }, {
      status: 400,
    });
  }
  console.log('pi');
  if (!password || password.length < 6) {
    return NextResponse.json({
      error: 'The password must be at least 6 characters',
    }, {
      status: 400,
    });
  }
  console.log('pi');
  try {
    const match = await connectDB({
      query: 'SELECT * FROM user WHERE email = ?',
      values: [email],
    });

    if (match.length) {
      return NextResponse.json({
        error: 'email already exits',
      }, {
        status: 400,
      });
    }

    const saltPassword = await bcryptjs.hash(password, 10);

    await connectDB({
      query: 'INSERT INTO user (fullName, email, username, password) VALUES (?, ?, ?, ?)',
      values: [
        fullName, email, username, saltPassword,
      ],
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      error: err.message,
    }, {
      status: 400,
    });
  }

  return NextResponse.json({
    fullName,
    username,
    email,
    password,
  });
}
