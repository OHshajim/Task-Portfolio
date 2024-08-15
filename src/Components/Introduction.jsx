import SocialMedia  from "@/Shared/SocialMedia";
import Image from "next/image";

const Introduction = () => {
  return (
    <div id="home">
      <div className="hero ">
        <div className="flex  flex-col lg:flex-row-reverse">
          <div className="relative">
            <Image
              src="/My.png"
              className="max-w-md rounded-full"
              alt="MY Photo"
              width={500}
              height={500}
            />
            <div className="absolute top-16 right-[90px]">
              <Image src="/Overlap.png" alt="Overlap" width={310} height={70} />
            </div>
            <div className="my-5 flex justify-center w-full">
              <SocialMedia />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">
              Hi I am <br />
              <span className="text-4xl text-[#FD6F00]">
                Muhammad Umair
              </span>{" "}
            </h3>
            <h1 className="text-8xl font-bold w-full flex flex-col">
              UI & UX <br />
              <span className="text-center"> Designer</span>
            </h1>
            <p className="py-6 text-xl ">
              Welcome to my portfolio! I specialize in creating visually
              stunning and user-friendly websites that help businesses thrive
              online. With a keen eye for detail and a deep understanding of
              design principles, I craft unique digital experiences tailored to
              meet your brands needs.
            </p>
            <button className="btn btn-primary">Hire Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Introduction;
