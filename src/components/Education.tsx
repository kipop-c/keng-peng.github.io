import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolioData";
import { SectionTitle } from "./About";

interface EducationProps {
  isEnglish: boolean;
}

export default function Education({ isEnglish }: EducationProps) {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          icon={<GraduationCap size={24} />}
          title={isEnglish ? "Education" : "教育背景"}
          subtitle
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200 md:-translate-x-1/2" />

            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-start mb-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent-500 rounded-full border-4 border-white shadow-md -translate-x-1/2 z-10" />

                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:pl-8" : "md:ml-auto md:pr-8"}`}>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary-200 transition-all duration-300 group">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-3">
                      {edu.year}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-primary-600 font-medium mb-2">
                      {edu.institution}
                    </p>
                    {edu.description && (
                      <p className="text-gray-600 text-sm">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
