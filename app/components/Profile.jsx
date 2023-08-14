import Image from 'next/image';
import Button from './Button';

function Profile() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <Image
          src="https://cdn.discordapp.com/attachments/772232222220615710/1140485216377520128/image.png"
          alt="profile"
          width={70}
          height={70}
          className="m-3 rounded-full"
        />
        <span className="text-2xl text-gray-100 m-1">
          Diegoo
        </span>
      </div>
      <div className="flex justify-center items-center">
        <Button className="w-32 text-lg">
          View more
        </Button>
        <Button className="w-32 text-lg">
          Log out
        </Button>
      </div>
    </div>
  );
}

export default Profile;
