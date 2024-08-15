import Image from "next/image";

const About = () => {
  return (
    <div id="about">
      <div className="hero ">
        <div className="flex  flex-col lg:flex-row">
          <div className="relative">
            <Image
              src="/Mamun.png"
              className="max-w-lg rounded-full"
              alt="MY Photo"
              width={600}
              height={600}
            />
            <div className="absolute top-16 right-[125px]">
              <Image src="/Overlap.png" alt="Overlap" width={310} height={70} />
            </div>
          </div>
          <div>
            <h2 className="text-6xl font-semibold">About Me</h2>
            <p className="py-6 text-xl ">
              Web designer passionate about creating beautiful, functional
              websites. I specialize in responsive design and intuitive user
              experiences. My goal is to bring your vision to life with
              creativity and precision. Lets build something amazing together!
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <div class=" text-2xl font-semibold ">
                 UX
                </div>
                <progress
                  className="progress progress-error w-full "
                  value="90"
                  max="100"
                ></progress>
              </div>
              <div>
                <div class=" text-2xl font-semibold ">
                Website Design
                </div>
                <progress
                  className="progress progress-error w-full "
                  value="85"
                  max="100"
                ></progress>
              </div>
              <div>
                <div class=" text-2xl font-semibold ">
                App Design 
                </div>
                <progress
                  className="progress progress-error w-full "
                  value="95"
                  max="100"
                ></progress>
              </div>
              <div>
                <div class=" text-2xl font-semibold ">
                Graphic Design 
                </div>
                <progress
                  className="progress progress-error w-full "
                  value="90"
                  max="100"
                ></progress>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
