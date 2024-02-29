import Image from "next/image";

interface ProfileProps {
  image: string;
  greeting: string;
  description: string;
}

const Profile: React.FC<ProfileProps> = ({ image, greeting, description }) => {
  return (
    <div className="w-[854px] h-auto flex flex-row m-5 space-x-15 justify-center content-center items-center self-center">
      <div className="w-9/12">
        <div className="text-[44px] text-black font-heebo font-bold w-4/5 mb-5">
          {greeting}
        </div>
        <div className="text-[16px] text-black font-heebo w-4/5 mb-5">
          {description}
        </div>
        <div className="border-0 bg-red-400 text-white p-2 text-[20px] w-[208px] h-[47px] rounded-sm text-center mb-5">
          <a href="#resume" rel="resume">
            Download Resume
          </a>
        </div>
      </div>
      <div className="relative w-fit">
        <Image className="rounded-full absolute top-[-15px] right-[-10px]" src={image} alt="profile" width={243} height={243} />
        <div className="rounded-full bg-slate-100 w-[243px] h-[243px]"/>
      </div>  
    </div>
  );
};

export default Profile;
