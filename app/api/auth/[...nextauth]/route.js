/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import bcryptjs from 'bcryptjs';
import connectDB from '@/libs/db';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'text' },
      },
      async authorize(credentials) {
        const users = await connectDB({
          query: 'SELECT * FROM user WHERE username = ?',
          values: [credentials.username],
        });

        if (!users.length) return null;

        const [user] = users;

        const match = await bcryptjs.compare(credentials.password, user?.password);

        if (!match) return null;

        return user;
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    jwt({
      token, user,
    }) {
      if (user) token.user = user;
      return token;
    },
    session({ token, session }) {
      const {
        username, user_id: id, email, fullName,
      } = token.user;
      session.user = {
        username, id, email, fullName,
      };
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
