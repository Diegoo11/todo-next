import Image from 'next/image';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';

const userData = async () => {
  const session = await getServerSession(authOptions);
  return session;
};

export default async function Home() {
  const { user } = await userData();
  return (
    <>
      <div className="h-1/4 flex justify-center items-center">
        <h1 className="font-bold text-2xl underline uppercase">About you</h1>
      </div>
      <Image
        src={user?.img || 'https://cdn.discordapp.com/attachments/772232222220615710/1140485216377520128/image.png'}
        alt="profile"
        width={200}
        height={200}
        className="m-3 rounded-full"
      />
      <div className="h-1/6">
        <h1 className="text-2xl font-bold text-center">
          {user?.username}
        </h1>
        <h2 className="text-sm text-center">
          { `@${user?.email.substring(0, user?.email.indexOf('@'))}` }
        </h2>
      </div>
      <ul className="text-base flex flex-col gap-3 ">
        <li>
          <span className="font-bold w-32">Nombres: </span>
          {user?.fullName}
        </li>
        <li>
          <span className="font-bold w-32">Apellidos: </span>
          {user?.fullName}
        </li>
        <li>
          <span className="font-bold w-32">Telefono: </span>
          935761921
        </li>
      </ul>
    </>
  );
}
