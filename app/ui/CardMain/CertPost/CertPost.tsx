import Post from "@/app/ui/CardMain/CertPost/Post/Post"


const CertPost = () => {
  return (
    <div className="bg-slate-100 w-auto h-auto p-5 justify-center items-center content-center">
      <div className="w-full font-heebo text-black justify-center items-center content-center">
        <div className="flex flex-row space-x-10 justify-center items-center content-center mb-5">
          <h1 className="text-[22px] text-slate-800 w-[418px]">Certificate</h1>
          <a className="w-[418px] text-end hover:underline text-cyan-500 text-[16px]" href="#viewall">View all</a>
        </div>
        <div className="flex flex-row space-x-10 justify-center items-center content-center">
            <Post title="Making a design system from scratch" link="#test" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." detail="Design & Develop" date="12 Feb 2020" />
            <Post title="Making a design system from scratch" link="#test" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." detail="Design & Develop" date="12 Feb 2020" />
        </div>
      </div>
    </div>
  );
};

export default CertPost;
