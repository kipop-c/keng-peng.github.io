export const personalInfo = {
  name: {
    chinese: "彭铿",
    english: "Keng Peng",
  },
  title: "学生 / 研究者",
  institution: "西安交通大学 (Xi'an Jiaotong University)",
  email: "pk2254415077@stu.xjtu.edu.cn",
  bio: "欢迎来到我的个人学术主页！我是西安交通大学的一名学生，致力于学术研究。我对科学探索充满热情，希望通过研究为学术领域做出贡献。这里展示了我的教育背景、研究成果和荣誉奖项。欢迎与我交流合作！",
  researchInterests: [
    "机器学习",
    "人工智能",
    "数据科学",
    "计算机视觉",
    "自然语言处理",
  ],
  location: "西安, 中国",
};

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export const education: Education[] = [
  {
    degree: "在读学位",
    institution: "西安交通大学",
    year: "2022 - 至今",
    description: "主修相关专业课程，参与科研项目",
  },
];

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
  type: "journal" | "conference" | "preprint";
}

export const publications: Publication[] = [
  {
    title: "即将添加论文成果",
    authors: "Keng Peng, et al.",
    venue: "待发表",
    year: "2025",
    type: "preprint",
  },
];

export interface Award {
  title: string;
  organization: string;
  year: string;
}

export const awards: Award[] = [
  {
    title: "学业奖学金",
    organization: "西安交通大学",
    year: "2023",
  },
  {
    title: "优秀学生",
    organization: "西安交通大学",
    year: "2023",
  },
];

export const navLinks = [
  { id: "about", label: "关于我", labelEn: "About" },
  { id: "education", label: "教育背景", labelEn: "Education" },
  { id: "publications", label: "研究成果", labelEn: "Publications" },
  { id: "awards", label: "荣誉奖项", labelEn: "Awards" },
  { id: "contact", label: "联系我", labelEn: "Contact" },
];
