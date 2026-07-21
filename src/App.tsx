import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Publications from "./components/Publications";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    document.documentElement.lang = isEnglish ? "en" : "zh-CN";
  }, [isEnglish]);

  return (
    <div className="min-h-screen">
      <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
      <main>
        <Hero isEnglish={isEnglish} />
        <About isEnglish={isEnglish} />
        <Education isEnglish={isEnglish} />
        <Publications isEnglish={isEnglish} />
        <Awards isEnglish={isEnglish} />
        <Contact isEnglish={isEnglish} />
      </main>
      <Footer isEnglish={isEnglish} />
    </div>
  );
}
