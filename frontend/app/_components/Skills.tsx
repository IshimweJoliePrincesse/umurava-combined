// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";

// export default function SkillsChallenges() {
//   const skills = [
//     { name: "UI/UX Design", active: true },
//     { name: "Data Science", active: false },
//     { name: "Graphic Design", active: false },
//     { name: "Data Analysis & Research", active: false },
//     { name: "Animation", active: false },
//     { name: "Videography & Photography", active: false },
//     { name: "AI & Machine Learning", active: false },
//     { name: "Web3", active: false },
//     { name: "Digital Marketing & Communication", active: false },
//   ];

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12">
//       {/* Title Section */}
//       <div className="text-center mb-12">
//         <h2 className="text-2xl md:text-3xl font-bold mb-2">
//           Skills Challenges Cover various in-demand skills
//           <br className="hidden md:block" />
//           and Careers for the digital economy
//         </h2>
//         <p className="text-gray-600">
//           Explore the projects that various talents are working on.
//         </p>
//       </div>

//       {/* Skills Buttons */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-12">
//         {skills.map((skill, index) => (
//           <Button
//             key={index}
//             variant={skill.active ? "default" : "secondary"}
//             className={`rounded-full w-full py-2 text-sm transition ${
//               skill.active
//                 ? "bg-blue-500 hover:bg-blue-600 text-white"
//                 : "bg-gray-100 hover:bg-gray-200 text-gray-800"
//             }`}
//           >
//             {skill.name}
//           </Button>
//         ))}
//       </div>

//       {/* Featured Project Section */}
//       <Card className="p-6 rounded-lg bg-[#F1F1F1]">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Left Section - Text */}
//           <div className="space-y-4">
//             <div className="h-8 w-8 bg-gray-900 rounded-full flex items-center justify-center">
//               <span className="text-white text-sm">
//                 <span className="text-[#228B22]">s</span>f.
//               </span>
//             </div>
//             <p className="text-lg text-gray-800">
//               The Embedded Finance Platform and Payroll Management Software
//               Solutions for your organization and Workforce
//             </p>
//             <Button
//               variant="link"
//               className="text-blue-500 hover:text-blue-600 p-0 h-auto font-semibold"
//             >
//               Learn more →
//             </Button>
//           </div>

//           {/* Right Section - Image */}
//           <div className="relative w-full flex justify-center">
//             <Image
//               src="/images/dashboard.png"
//               alt="Dashboard preview"
//               width={500}
//               height={300}
//               className="rounded-md shadow-lg w-full max-w-[500px]"
//             />
//           </div>
//         </div>
//       </Card>

//       {/* Pagination Dots */}
//       <div className="flex justify-center gap-2 mt-8">
//         {[0, 1, 2, 3].map((dot, index) => (
//           <div
//             key={index}
//             className={`h-2 w-2 rounded-full transition ${
//               index === 2 ? "bg-blue-500 scale-125" : "bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

interface SkillsProps {
  className?: string;
}
const Skills: React.FC<SkillsProps> = ({ className }) => {
  return (
    <section className={`py-12 bg-white ${className}`}>
      <div className="container mx-auto text-center">
        <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
          Skills Challenges Cover Various In-Demand Skills
          <br /> and Careers for the Digital Economy
        </h2>
        <p className="text-gray-400 mb-8 text-sm sm:text-base md:text-lg">
          Explore the projects that various talents are working on.
        </p>
        <div className="flex flex-col items-center">
          {/* First Row */}
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-blue-500 cursor-default hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                UI/UX Design
              </span>
            </div>
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-blue-500 cursor-default hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                Data Science
              </span>
            </div>
          </div>
          {/* Second Row */}
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-blue-500 cursor-default hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                Graphic Design
              </span>
            </div>
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-blue-500 cursor-default hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                Data Analysis & Research
              </span>
            </div>
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-blue-500 cursor-default hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                Animation
              </span>
            </div>
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-blue-500 cursor-default hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                Videography & Photography
              </span>
            </div>
          </div>
          {/* Third Row */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-blue-500 cursor-default hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                AI & Machine Learning
              </span>
            </div>
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-blue-500 cursor-default hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                Digital Marketing & Communications
              </span>
            </div>
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-blue-500 cursor-default hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                Web Development
              </span>
            </div>
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-blue-500 cursor-default hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                Cloud Computing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
