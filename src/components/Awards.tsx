import { Award, Trophy } from "lucide-react";
import { awards } from "../data/portfolioData";
import { SectionTitle } from "./About";

interface AwardsProps {
  isEnglish: boolean;
}

export default function Awards({ isEnglish }: AwardsProps) {
  return (
    <section id="awards" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          icon={<Trophy size={24} />}
          title={isEnglish ? "Awards & Honors" : "荣誉奖项"}
          subtitle
        />

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-accent-200 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                  <Award size={24} />
                </div>
                <div className="flex-1">
                  <span className="inline-block px-2 py-0.5 bg-accent-100 text-accent-700 text-xs font-medium rounded mb-2">
                    {award.year}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-gray-900 mb-1 group-hover:text-accent-700 transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {award.organization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
