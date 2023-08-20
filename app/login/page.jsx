'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import googleIco from '@/public/googleIco.png';
import FormSignUp from './FormLogin';
import Animate from '../components/Animate';

function Signup() {
  const router = useRouter();
  const { data } = useSession();

  useEffect(() => {
    if (data) {
      router.push('/');
    }
  }, [data, router]);

  return (
    <div className="flex justify-center items-center absolute w-screen h-screen backdrop-blur-sm top-0 left-0 bg-gray-900/20">
      <Animate className="w-11/12 max-w-sm p-5 rounded-md bg-downy-200">
        <div className="max-w-[280px] mx-auto">
          <div className="flex flex-col items-center my-8">
            <h2 className="mb-5 text-gray-900 font-mono font-bold text-3xl">Log in</h2>
            <button onClick={() => signIn('google')} type="button" className="flex items-center mb-2 justify-center transition ease-in-out delay-50 px-3 py-2.5 space-x-2 bg-white border border-slate-600 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:ring-opacity-50">
              <Image
                src={googleIco}
                height={30}
                width={30}
                alt="icono google"
              />
              <span className="text-gray-700 font-medium">Continue with Google</span>
            </button>
            <span className="mb-2 text-gray-900">Or</span>
            <FormSignUp />
            <p className="text-center mt-3 text-[14px]">
              Already have an account?
              {' '}
              <Link href="/login" className="text-gray-600 hover:text-gray-900">Log in</Link>
            </p>
            <p>
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Go back?
              </Link>
            </p>
          </div>
        </div>
      </Animate>
    </div>
  );
}

export default Signup;
