import Image from 'next/image';
// import Task from './components/Task';

export default function Home() {
  return (
    <>
      <div className="h-1/4 flex justify-center items-center">
        <h1 className="font-bold text-2xl underline uppercase">About you</h1>
      </div>
      <Image
        src="https://cdn.discordapp.com/attachments/772232222220615710/1140485216377520128/image.png"
        alt="profile"
        width={200}
        height={200}
        className="m-3 rounded-full"
      />
      <div className="h-1/6">
        <h1 className="text-2xl font-bold">
          Diegoo11
        </h1>
        <h2 className="text-sm">
          @ynoacamino
        </h2>
      </div>
      <ul className="text-base flex flex-col gap-3 ">
        <li>
          <span className="font-bold w-32">Nombres: </span>
          Yenaro Joel
        </li>
        <li>
          <span className="font-bold w-32">Apellidos: </span>
          Noa Camino
        </li>
        <li>
          <span className="font-bold w-32">Telefono: </span>
          935761921
        </li>
      </ul>
    </>
  );
}
