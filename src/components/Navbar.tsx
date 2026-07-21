import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/portfolioData";

interface NavbarProps {
  isEnglish: boolean;
  setIsEnglish: (value: boolean) => void;
}

export default function Navbar({ isEnglish, setIsEnglish }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`font-serif text-xl font-semibold transition-colors ${
            isScrolled ? "text-primary-700" : "text-white"
          }`}
        >
          Keng Peng
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium transition-colors hover:text-accent-500 ${
                isScrolled
                  ? activeSection === link.id
                    ? "text-accent-500"
                    : "text-gray-700"
                  : activeSection === link.id
                  ? "text-accent-300"
                  : "text-white/90"
              }`}
            >
              {isEnglish ? link.labelEn : link.label}
            </button>
          ))}
          <button
            onClick={() => setIsEnglish(!isEnglish)}
            className={`px-3 py-1 text-sm rounded-full border transition-all ${
              isScrolled
                ? "border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white"
                : "border-white/50 text-white hover:bg-white/10"
            }`}
          >
            {isEnglish ? "中文" : "EN"}
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-primary-700" : "text-white"} size={24} />
          ) : (
            <Menu className={isScrolled ? "text-primary-700" : "text-white"} size={24} />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left py-2 text-gray-700 hover:text-accent-500 transition-colors ${
                  activeSection === link.id ? "text-accent-500 font-medium" : ""
                }`}
              >
                {isEnglish ? link.labelEn : link.label}
              </button>
            ))}
            <button
              onClick={() => setIsEnglish(!isEnglish)}
              className="self-start px-3 py-1 text-sm rounded-full border border-primary-700 text-primary-700"
            >
              {isEnglish ? "中文" : "EN"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
