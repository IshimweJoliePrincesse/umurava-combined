import Image from "next/image";

export default function SkillsBenefits() {
  const benefits = [
    {
      icon: (
        <Image
          src="/images/Case2.svg"
          alt="Briefcase business"
          width={20}
          height={20}
        />
      ),
      title: "Enhance Your Employment Path",
      description:
        "Network with other talented individuals and learn from their experiences",
    },
    {
      icon: (
        <Image src="/images/Diploma.svg" alt="Diploma" width={20} height={20} />
      ),
      title: "Earn Recognition and Prizes",
      description:
        "Gain valuable experience and knowledge to advance your career in the digital economy",
    },
    {
      icon: (
        <Image
          src="/images/Graph.svg"
          alt="Graph growth"
          width={20}
          height={20}
        />
      ),
      title: "Personal Growth",
      description:
        "Challenge yourself, learn new skills, and expand your professional network",
    },
    {
      icon: (
        <Image src="/images/ribbon.svg" alt="Medal " width={20} height={20} />
      ),
      title: "Learn from Industry Experts",
      description:
        "Access valuable insights and guidance from experienced professionals in the digital careers field and spaces",
    },
  ];

  return (
    <div className="bg-[#F9FAFB] p-8 rounded-lg shadow-sm w-full">
      <h2 className="text-2xl font-bold text-center mb-2">
        What else can I gain from participating in Skills Challenges?
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
        Join Skills Challenges Program to accelerate your career growth and
        become part of Africa's largest workforce of digital professionals.
      </p>

      <div className="grid md:grid-cols-2 gap-x-36 gap-y-12 items-center px-8 left-10 ml-80">
        <div className="grid grid-cols-2 gap-x-40 gap-y-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-blue-600 p-3 rounded-lg mb-3">
                {benefit.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm text-left">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute rounded-3xl float-right" />
          <div className="relative">
            <Image
              src="/images/banner.png"
              alt="Skill section banner"
              width={400}
              height={300}
              className="rounded-2x h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
