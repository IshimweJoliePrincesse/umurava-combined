import React from "react";
import { Package } from "lucide-react";
import Image from "next/image";

const Experience = () => {
  return (
    <section className="w-full py-9 md:py-24 lg:py-32 bg-lightgrey">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#0A1F44]">
            Experience a New Way of Building{" "}
            <span className="block">Work Experience</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-[42rem] leading-relaxed text-grey2">
            Join Skills Challenges Program to accelerate your career growth and
            become part of Africa's largest workforce of digital professionals.
          </p>
        </div>

        {/* Features Cards */}
        <div className="grid gap-6 max-w-5xl mx-auto">
          {/* Main Feature Card */}
          <div className="w-full p-6 md:p-8 bg-blue-600 rounded-[8px]">
            <div className="w-10 h-10 bg-white rounded-[8px] flex items-center justify-center mb-4">
              <Image
                src="/images/Case.svg"
                width={20}
                height={16}
                alt=""
              ></Image>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Build a Strong Portfolio and Hand-On Experience
            </h3>
            <p className="text-white/90 leading-relaxed">
              Tackle real-world projects through challenges and hackathons that
              mirror real world challenges faced by businesses and
              organizations. Therefore, showcase your skills and accomplishments
              to potential employers and clients through a portfolio of
              completed projects.
            </p>
          </div>

          {/* Two Column Features */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Employment Path Card */}
            <div className="p-6 md:p-8 bg-blue-600 rounded-[8px]">
              <div className="w-10 h-10 bg-white rounded-[8px] flex items-center justify-center mb-4">
                <Image
                  src="/images/Case.svg"
                  width={20}
                  height={16}
                  alt=""
                ></Image>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Enhance Your Employment Path
              </h3>
              <p className="text-white/90 leading-relaxed">
                Develop the in-demand skills and build a strong portfolio to
                increase your chances of landing your dream job or contract.
              </p>
            </div>

            {/* Recognition Card */}
            <div className="p-6 md:p-8 bg-blue-600 rounded-[8px]">
              <div className="w-10 h-10 bg-white rounded-[8px] flex items-center justify-center mb-4">
                <Image
                  src="/images/Case.svg"
                  width={20}
                  height={16}
                  alt=""
                ></Image>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Earn Recognition and Prizes
              </h3>
              <p className="text-white/90 leading-relaxed">
                Earn both Money and Knowledge Prizes by participating in various
                contests and competitions by working on real world projects and
                hackathons from our partner companies & organizations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
