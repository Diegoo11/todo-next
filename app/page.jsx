import Image from 'next/image';

export default function About() {
  return (
    <div className="flex justify-center items-center h-full flex-col">
      <div className="flex justify-center items-center flex-col">
        <h1 className="font-bold text-5xl  uppercase mb-[-25px]">
          Ten un
        </h1>
        <h1 className="font-bold text-[66px] uppercase mb-[-58px]">
          buen
        </h1>
        <h1 className="font-bold text-[100px] uppercase">
          dia
        </h1>
      </div>
      <Image
        src="https://cdn.discordapp.com/attachments/772232222220615710/1141585059502100570/image.png"
        alt="profile"
        width={200}
        height={200}
        className="m-10"
      />
    </div>
  );
}
