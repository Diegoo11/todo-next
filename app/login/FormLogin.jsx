/* eslint-disable consistent-return */

'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import BoxError from '../components/BoxError';

function FormLogin() {
  const [err, setErr] = useState('');
  const router = useRouter();

  const displayError = (msgErr) => {
    setErr(msgErr);
    setTimeout(() => {
      setErr('');
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');

    try {
      const resAuth = await signIn('credentials', {
        username,
        password,
      });

      if (resAuth?.error) displayError(resAuth.error);

      if (resAuth.ok) return router.refresh('/');
    } catch (error) {
      displayError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " placeholder="Username" />
      <input type="password" name="password" className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " placeholder="Password" />
      <button type="submit" className="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]">
        Log in
      </button>
      <BoxError message={err} />
    </form>
  );
}

export default FormLogin;
