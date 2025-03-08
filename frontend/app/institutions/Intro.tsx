import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Intro() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="space-y-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-blue-600 leading-tight">
              Accelerate Your Students and Traineess Employability and Career
              Growth through Project-based Learning Solution
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              We partner with Universities, Schools, and Training Institutions
              to build the work experience of their students and trainees
              through project based learning challenges and hackathons
            </p>
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 rounded-[8px] text-white px-8"
            >
              Partner with us
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/students.png"
                alt="Students working on computers in a classroom"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
