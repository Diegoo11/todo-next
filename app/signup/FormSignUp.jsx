'use client';

import axios from 'axios';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import BoxError from '../components/BoxError';

function FormSignUp() {
  const [err, setErr] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get('username');
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const res = await axios.post('/api/auth/signup', {
        username, fullName, email, password,
      });

      const resAuth = await signIn('credentials', {
        username: res.data.username,
        password: formData.get('password'),
      });
      if (resAuth?.ok) {
        router.refresh();
      }
    } catch (error) {
      console.error(error);
      setErr(error.message);
      setTimeout(() => {
        setErr('');
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " placeholder="Username" />
      <input type="text" name="fullName" className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " placeholder="Full Name" />
      <input type="text" name="email" className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " placeholder="Email" />
      <input type="password" name="password" className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " placeholder="Password" />
      <button type="submit" className="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]">
        Register
      </button>
      <BoxError message={err} />
    </form>
  );
}

export default FormSignUp;
