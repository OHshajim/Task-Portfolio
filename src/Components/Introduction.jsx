import Image from "next/image";
import React from "react";

export const Introduction = () => {
  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="relative border ">
            <Image
              src="/My.png"
              className="max-w-md rounded-full"
              alt="MY Photo"
              width={500}
              height={500}
            />
            <div className="absolute top-16 ">
              <Image
                src="/Overlap.png"
                className="max-w-sm"
                alt="Overlap"
                width={300}
                height={83}
              />
            </div>
          </div>
          <div>
            <h3>
              Hi I am <span>Muhammad Umair</span>{" "}
            </h3>
            <h1 className="text-5xl font-bold">UI & UX Designer</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Hire Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};
