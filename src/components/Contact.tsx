import { Mail, MapPin, Send, Github } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { SectionTitle } from "./About";

interface ContactProps {
  isEnglish: boolean;
}

export default function Contact({ isEnglish }: ContactProps) {
  const contactItems = [
    {
      icon: <Mail size={20} />,
      label: isEnglish ? "Email" : "邮箱",
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
    },
    {
      icon: <MapPin size={20} />,
      label: isEnglish ? "Location" : "位置",
      value: personalInfo.location,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          icon={<Send size={24} />}
          title={isEnglish ? "Contact Me" : "联系我"}
          subtitle
        />

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="text-center mb-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-3">
                  {isEnglish
                    ? "Let's Work Together"
                    : "期待与您交流合作"}
                </h3>
                <p className="text-white/70 max-w-lg mx-auto">
                  {isEnglish
                    ? "Feel free to reach out for research collaborations, academic discussions, or any inquiries."
                    : "如有研究合作、学术交流或任何问题，欢迎随时与我联系。"}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {contactItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/15 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-accent-500/20 flex items-center justify-center text-accent-300">
                        {item.icon}
                      </div>
                      <span className="text-white/60 text-sm">
                        {item.label}
                      </span>
                    </div>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-white font-medium hover:text-accent-300 transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-accent-500/25"
                >
                  <Mail size={18} />
                  {isEnglish ? "Send Email" : "发送邮件"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
