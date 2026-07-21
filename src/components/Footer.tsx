import { Heart } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

interface FooterProps {
  isEnglish: boolean;
}

export default function Footer({ isEnglish }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl font-semibold mb-1">
              {personalInfo.name.chinese} · {personalInfo.name.english}
            </h3>
            <p className="text-white/60 text-sm">
              {personalInfo.institution}
            </p>
          </div>

          <div className="flex items-center gap-1 text-white/60 text-sm">
            <span>© {currentYear}</span>
            <span>{isEnglish ? "Made with" : "用"}</span>
            <Heart size={14} className="text-red-400 fill-red-400" />
            <span>{isEnglish ? "by" : "制作"}</span>
            <span className="text-white/80 font-medium">
              {personalInfo.name.english}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
