'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

function ProfileAcctions() {
  const { data } = useSession();

  return (
    <ul className="h-2/6 flex flex-col items-center justify-center text-xl uppercase gap-4">
      { data
        ? (
          <li>
            <Link href="/logout" className="hover:bg-gray-800 px-3 py-1 rounded-md w-full">
              Log Out
            </Link>
          </li>
        )
        : (
          <>
            <li>
              <Link href="/login" className="hover:bg-gray-800 px-3 py-1 rounded-md w-full">
                Log In
              </Link>
            </li>
            <li>
              <Link href="/signup" className="hover:bg-gray-800 px-3 py-1 rounded-md w-full">
                Sign up
              </Link>
            </li>
          </>
        )}
    </ul>
  );
}

export default ProfileAcctions;
