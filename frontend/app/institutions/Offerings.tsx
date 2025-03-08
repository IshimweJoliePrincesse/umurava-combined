import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  BookOpen,
  Users,
  UserPlus,
  ClipboardCheck,
} from "lucide-react";

const benefits = [
  {
    icon: GraduationCap,
    title: "Employability and Career Development Opportunities",
    description:
      "Students gain hands-on experience working on real-world challenges and help them build professional networks and credibility. These chances and readiness of landing job opportunities and this lead to career advancement and long-term success.",
  },
  {
    icon: BookOpen,
    title: "Practical Application of Classroom Knowledge",
    description:
      "The Skills Challenges bridge the gap between theoretical learning and practical application, reinforcing what students learn in their academic courses.",
  },
  {
    icon: Users,
    title: "Students & Trainees Engagement",
    description:
      "Embed and incorporate Skills Challenges into your courses to give students and trainees hands-on projects to aid students gain work experience and skills mastery. Competitive and project-based challenges keep students motivated and actively engaged in their learning journey.",
  },
  {
    icon: UserPlus,
    title: "Access to the Industry Experts & Mentors",
    description:
      "Skills Challenges expose students to industry experts and mentors who offer guidance, support, and insights on the trends of digital careers. This can help students gain a deep understanding of their chosen field.",
  },
  {
    icon: ClipboardCheck,
    title: "Skills Assessments",
    description:
      "Embed our projects based tests and skills assessments directly into your curriculum.",
  },
];

export default function BenefitsGrid() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-20 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Key Offerings & Benefits:
        </h2>

        <div className="grid gap-6 auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`bg-blue-600 text-white p-6 ${
                index === 3 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-white rounded-[8px] flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-blue-600 stroke-[1.5]" />
                </div>
                <h3 className="font-semibold text-lg">{benefit.title}</h3>
                <p className="text-sm text-white">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
