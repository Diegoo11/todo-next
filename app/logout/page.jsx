'use client';

import Image from 'next/image';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Animate from '../components/Animate';
import logoutIco from '@/public/logoutIco.png';
import Button from '../components/Button';

function Logout() {
  const router = useRouter();
  const logOut = async () => {
    await signOut();
    return router.push('/', {});
  };

  return (
    <div className="flex justify-center items-center absolute w-screen h-screen backdrop-blur-sm top-0 left-0 bg-gray-900/20">
      <Animate className="w-11/12 max-w-sm p-5 rounded-md bg-downy-200">
        <div className="max-w-[280px] mx-auto text-black">
          <div className="flex flex-col items-center my-8">
            <h2 className="mb-5 text-gray-900 font-mono font-bold text-3xl">
              Log out
            </h2>
            <Image
              height={250}
              src={logoutIco}
              alt="Icono"
              className="p-10 bg-downy-100 rounded-lg"
            />
            <h1 className="text-2xl font-semibold text-center my-9 mx-1">
              Oh no! You are leaving...
              <br />
              Are you sure?
            </h1>
            <Link
              href="/"
              className="
                flex justify-center items-center max-w-xs w-11/12 bg-downy-100 rounded-md
                py-2 px-6 font-semibold text-xl m-4
              "
            >
              Naah, Just Kidding
            </Link>
            <Button
              onClick={logOut}
              className="
                flex justify-center items-center max-w-xs w-11/12 bg-downy-100 rounded-md
                py-2 px-6 font-semibold text-xl
              "
            >
              Yes, Log Me Out
            </Button>
          </div>
        </div>
      </Animate>
    </div>
  );
}

export default Logout;
