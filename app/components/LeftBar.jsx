import Link from 'next/link';
import ProfileAcctions from './ProfileAcctions';
// import Profile from './Profile';

function LeftBar() {
  return (
    <nav className="h-screen flex flex-col items-center w-full
      max-w-xs bg-gray-900 text-gray-100 rounded-r-md"
    >
      <div className="h-1/6 flex flex-col justify-end items-center">
        <h1 className="text-6xl uppercase font-extrabold">
          Todo
        </h1>
        <h1 className="text-3xl uppercase font-extrabold">
          with Next
        </h1>
      </div>
      <ul className="h-3/6 flex flex-col items-center justify-center text-xl gap-4">
        <li className="w-full">
          <Link href="/" className="hover:bg-gray-800 px-3 py-1 rounded-md flex justify-center items-center w-full">
            Home
          </Link>
        </li>
        <li className="w-full">
          <Link href="/profile" className="hover:bg-gray-800 flex justify-center items-center px-3 py-1 rounded-md w-full">
            Profile
          </Link>
        </li>
        <li>
          <Link href="/addTask" className="hover:bg-gray-800 px-3 py-1 rounded-md w-full flex justify-center items-center h-9">
            Add Tasks
          </Link>
        </li>
      </ul>
      <ProfileAcctions />
    </nav>
  );
}

export default LeftBar;
