import { Mail, MapPin, GraduationCap } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

interface HeroProps {
  isEnglish: boolean;
}

export default function Hero({ isEnglish }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(201, 162, 39, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(65, 115, 181, 0.3) 0%, transparent 50%),
            linear-gradient(135deg, #162c48 0%, #1e3a5f 50%, #0e1d30 100%)
          `,
        }}
      />

      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="opacity-0-init animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/20 border border-accent-400/30 text-accent-300 text-sm mb-6">
                <GraduationCap size={16} />
                <span>{personalInfo.institution}</span>
              </div>
            </div>

            <h1 className="opacity-0-init animate-fade-in-up animation-delay-100 font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              {personalInfo.name.chinese}
            </h1>

            <h2 className="opacity-0-init animate-fade-in-up animation-delay-200 font-serif text-2xl md:text-3xl text-accent-300 font-medium mb-6">
              {personalInfo.name.english}
            </h2>

            <p className="opacity-0-init animate-fade-in-up animation-delay-300 text-xl text-white/80 mb-8 font-light">
              {personalInfo.title}
            </p>

            <div className="opacity-0-init animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-accent-500/25 -translate-y-0.5"
              >
                <Mail size={18} />
                {isEnglish ? "Contact Me" : "联系我"}
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/30 text-white rounded-lg font-medium transition-all hover:bg-white/10 hover:border-white/50"
              >
                {isEnglish ? "Learn More" : "了解更多"}
              </a>
            </div>

            <div className="opacity-0-init animate-fade-in-up animation-delay-500 flex items-center gap-2 mt-8 text-white/60 justify-center lg:justify-start">
              <MapPin size={16} />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <div className="flex-shrink-0 opacity-0-init animate-fade-in animation-delay-300">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 p-1">
                <div className="w-full h-full rounded-full bg-primary-800 flex items-center justify-center overflow-hidden">
                  <div className="text-8xl md:text-9xl font-serif font-bold text-white/20 select-none">
                    K
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-500/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary-400/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
