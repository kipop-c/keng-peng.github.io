import { BookOpen, FileText, ExternalLink } from "lucide-react";
import { publications } from "../data/portfolioData";
import { SectionTitle } from "./About";

interface PublicationsProps {
  isEnglish: boolean;
}

export default function Publications({ isEnglish }: PublicationsProps) {
  const typeLabels = {
    journal: isEnglish ? "Journal" : "期刊",
    conference: isEnglish ? "Conference" : "会议",
    preprint: isEnglish ? "Preprint" : "预印本",
  };

  const typeColors = {
    journal: "bg-emerald-100 text-emerald-700",
    conference: "bg-blue-100 text-blue-700",
    preprint: "bg-gray-100 text-gray-600",
  };

  const groupedByYear = publications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<string, typeof publications>);

  const sortedYears = Object.keys(groupedByYear).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          icon={<BookOpen size={24} />}
          title={isEnglish ? "Publications" : "研究成果"}
          subtitle
        />

        <div className="max-w-4xl mx-auto space-y-12">
          {sortedYears.map((year) => (
            <div key={year}>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-serif text-2xl font-bold text-primary-700">
                  {year}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-primary-200 to-transparent" />
              </div>

              <div className="space-y-4">
                {groupedByYear[year].map((pub, index) => (
                  <div
                    key={index}
                    className="group bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-accent-300 hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600 group-hover:bg-accent-100 group-hover:text-accent-600 transition-colors">
                        <FileText size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="font-serif text-lg font-semibold text-gray-900 group-hover:text-primary-700 transition-colors leading-snug">
                            {pub.title}
                          </h3>
                          <span className={`flex-shrink-0 px-2 py-0.5 text-xs font-medium rounded ${typeColors[pub.type]}`}>
                            {typeLabels[pub.type]}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">
                          {pub.authors}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-primary-600 text-sm italic">
                            {pub.venue}
                          </p>
                          {pub.link && (
                            <a
                              href={pub.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm text-accent-600 hover:text-accent-700 font-medium transition-colors"
                            >
                              PDF
                              <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12 p-6 bg-primary-50 rounded-xl border border-primary-100 text-center">
          <p className="text-gray-600">
            {isEnglish
              ? "More publications coming soon. You can also find my papers on "
              : "更多论文即将更新。你也可以在 "
            }
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-700 font-medium hover:underline inline-flex items-center gap-1"
            >
              Google Scholar
              <ExternalLink size={14} />
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
