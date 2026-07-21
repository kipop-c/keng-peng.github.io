# 彭铿个人学术网站 - 技术架构文档

## 1. 架构设计
纯前端单页应用，无需后端服务，可直接部署到GitHub Pages。

```mermaid
flowchart TD
    "用户浏览器" --> "静态文件 CDN/GitHub Pages"
    "静态文件 CDN/GitHub Pages" --> "React单页应用"
    "React单页应用" --> "UI组件层"
    "UI组件层" --> "导航栏组件"
    "UI组件层" --> "Hero组件"
    "UI组件层" --> "关于组件"
    "UI组件层" --> "教育组件"
    "UI组件层" --> "论文组件"
    "UI组件层" --> "奖项组件"
    "UI组件层" --> "联系组件"
    "UI组件层" --> "页脚组件"
```

## 2. 技术说明
- **前端框架**：React 18 + TypeScript
- **构建工具**：Vite
- **样式方案**：Tailwind CSS 3
- **路由方案**：单页锚点滚动，无需react-router
- **状态管理**：使用React内置状态(useState)，无需复杂状态管理
- **图标库**：lucide-react
- **部署平台**：GitHub Pages

## 3. 项目结构
```
├── src/
│   ├── components/          # React组件
│   │   ├── Navbar.tsx       # 导航栏
│   │   ├── Hero.tsx         # Hero区域
│   │   ├── About.tsx        # 关于我
│   │   ├── Education.tsx    # 教育背景
│   │   ├── Publications.tsx # 研究成果
│   │   ├── Awards.tsx       # 荣誉奖项
│   │   ├── Contact.tsx      # 联系方式
│   │   └── Footer.tsx       # 页脚
│   ├── data/                # 数据文件
│   │   └── portfolioData.ts # 个人信息数据
│   ├── App.tsx              # 主应用组件
│   ├── main.tsx             # 入口文件
│   └── index.css            # 全局样式
├── public/                  # 静态资源
├── index.html               # HTML模板
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 4. 数据模型
个人数据直接硬编码在 `src/data/portfolioData.ts` 中，无需数据库：

```typescript
interface PersonalInfo {
  name: { chinese: string; english: string };
  title: string;
  institution: string;
  email: string;
  bio: string;
  researchInterests: string[];
}

interface Education {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
  type: 'journal' | 'conference' | 'preprint';
}

interface Award {
  title: string;
  organization: string;
  year: string;
}
```

## 5. 部署方案
- 使用GitHub Pages进行静态部署
- 配置vite.config.ts的base路径为仓库名
- 构建产物为dist目录，可通过gh-pages或GitHub Actions部署
