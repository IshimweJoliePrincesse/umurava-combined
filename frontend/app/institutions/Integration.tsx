export default function IntegrationSection() {
  const integrationMethods = [
    {
      number: 1,
      title: "As Career Development and Job Readiness",
      subtitle: "Program",
    },
    {
      number: 2,
      title: "As Skills Assessments Method after a",
      subtitle: "course or a term",
    },
    {
      number: 3,
      title: "As extracurricular activities to",
      subtitle: "complement academic courses",
    },
    {
      number: 4,
      title: "As the portfolio of the Students",
      subtitle: "",
    },
    {
      number: 5,
      title: "As part of Capstone Projects or final-year ",
      subtitle: "assignments",
    },
  ];

  return (
    <div className="bg-[#F9FAFB]">
      <div className="py-16 px-4 max-w-7xl  mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center max-w-4xl mx-auto mb-16">
          How Skills Challenges Program can Be Integrated into your Learning
          Institution
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Integration methods */}
          <div className="space-y-8">
            {integrationMethods.map((method) => (
              <div key={method.number} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center border-2 border-[#0E225A] justify-center font-semibold">
                  {method.number}
                </div>
                <div className="flex flex-col">
                  <p className="text-lg font-medium text-[#0E225A]">
                    {method.title}
                  </p>
                  <p className="text-lg text-[#0E225A]">{method.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - UI Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-3xl -z-10" />
            <img
              src={`/images/banner2.png`}
              alt="Skills Challenges Program Interface"
              className="w-full h-auto relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
