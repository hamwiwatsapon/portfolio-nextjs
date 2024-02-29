import Image from "next/image";

interface ProfileProps {
  image: string;
  greeting: string;
  description: string;
}

const Profile: React.FC<ProfileProps> = ({ image, greeting, description }) => {
  return (
    <div className="w-full h-auto flex flex-row justify-center content-center">
      <div className="flex flex-col pl-20 pt-20 pb-20 m-5">
        <div className="text-5xl text-black font-heebo mb-10">
          {greeting}
        </div>
        <div className="text-2xl text-black font-heebo mb-10">
          {description}
        </div>
        <div className="border-0 bg-red-400 text-white w-fit p-2">
          <a href="#resume" rel="resume">
            Download Resume
          </a>
        </div>
      </div>
      <div className="m-10 mr-20">
        <Image className="rounded-full" src={image} alt="profile" width={350} height={350} />
      </div>
    </div>
  );
};

export default Profile;
