import { User, Sparkles } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

interface SectionTitleProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: boolean;
}

function SectionTitle({ icon, title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700 mb-4">
        {icon}
      </div>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        {title}
      </h2>
      {subtitle && (
        <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full" />
      )}
    </div>
  );
}

interface AboutProps {
  isEnglish: boolean;
}

export default function About({ isEnglish }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          icon={<User size={24} />}
          title={isEnglish ? "About Me" : "关于我"}
          subtitle
        />

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-balance">
              {personalInfo.bio}
            </p>

            <div className="mt-8">
              <h3 className="flex items-center gap-2 font-serif text-xl font-semibold text-gray-900 mb-4">
                <Sparkles size={20} className="text-accent-500" />
                {isEnglish ? "Research Interests" : "研究兴趣"}
              </h3>
              <div className="flex flex-wrap gap-3">
                {personalInfo.researchInterests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-100 hover:bg-primary-100 hover:border-primary-200 transition-all cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { SectionTitle };
