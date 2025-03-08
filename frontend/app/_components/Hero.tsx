import Image from "next/image";
import React from "react";
import "./talent_counter";
import { TalentCounter } from "./talent_counter";

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section flex items-center justify-between p-8 space-x-32 relative">
      <div className="text-column w-1/2">
        <h1 className="text-4xl font-bold text-[#2B71F0] ml-20">
          Build Work Experience through Skills Challenges Program
        </h1>
        <p className="mt-4 text-lg text-[#2B3338] ml-20">
          Enhance your Employability and Accelerate your Career Growth by
          working on Hands-on project & hackathons from various businesses &
          organizations.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition ml-20">
          Get Started
        </button>
      </div>

      <div className="relative w-full max-w-md lg:max-w-5xl">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1 aspect-[3/4] bg-blue-500 rounded-[2rem] overflow-hidden ">
            <div className="absolute top-0 left-0 w-32 h-32">
              <Image
                src="/images/Ellipse1.png"
                alt="Decorative element"
                width={200}
                height={100}
                className="object contain"
              />
            </div>
            <div className="relative z-10 w-full h-full">
              <Image
                src={`/images/people.png`}
                alt="Team members"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-50 bg-white rounded-full shadow-2xl w-16 h-16">
            <Image
              src="/images/new.png"
              alt="Reactions"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="relative flex-1 aspect-[3/4] bg-blue-500 rounded-[2rem] overflow-hidden z-10">
            <div className="absolute top-0 right-0 w-36 h-36">
              <Image
                src="/images/Ellipse4.png"
                alt="Decorative element"
                width={200}
                height={100}
                className="object-contain"
              />
            </div>

            <div className="relative z-10 w-full h-full">
              <Image
                src={`/images/man.png`}
                alt="Person with Laptop"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-blue-500 via-transparent opacity-50"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-3 -left-5 z-50 -translate-x-1/2 animate-bounce flex items-center">
          <div className="bg-white rounded-full px-4 py-2 shadow-lg flex items-center">
            <TalentCounter />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
