import React, { createContext, useContext, useState } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    "nav.github": "GitHub",
    "nav.youtube": "YouTube",

    // Hero Section
    "hero.badge": "Web Developer • 15 years old",
    "hero.title": "Building the digital future",
    "hero.description":
      "I'm a passionate web developer with 3 years of JavaScript experience. I create interactive, beautiful web experiences with smooth animations and modern design principles.",
    "hero.viewProjects": "View My Projects",
    "hero.github": "GitHub",

    // Skills Section
    "skills.title": "Skills & Expertise",
    "skills.frontend": "Frontend Development",
    "skills.frontendItems": "React,JavaScript,Tailwind CSS,HTML/CSS",
    "skills.design": "Interactive Design",
    "skills.designItems": "Animations,3D Graphics,UI/UX,Responsive Design",
    "skills.tools": "Tools & Technologies",
    "skills.toolsItems": "Git,Browser APIs,Web Extensions,Modern Web Standards",

    // Projects Section
    "projects.title": "Featured Projects",
    "projects.subtitle": "A selection of my most recent and impactful projects",
    "projects.other": "Other Projects",
    "projects.view": "View Project",
    "projects.view_short": "View",

    // Project Descriptions
    "project.customGrab.title": "Custom Grab Cursor Ext",
    "project.customGrab.desc":
      "A browser extension that provides custom cursor grabbing functionality with smooth animations and interactive feedback.",
    "project.customGrab.tags": "JavaScript,Browser Extension,UI/UX",

    "project.narcissus.title": "Narcissus Brand Web",
    "project.narcissus.desc":
      "A premium brand website showcasing modern web design with smooth animations, responsive layout, and elegant typography.",
    "project.narcissus.tags": "React,Tailwind CSS,Design",

    "project.rubiks.title": "Rubiks Cube Teaching Website",
    "project.rubiks.desc":
      "An interactive educational platform where I post tutorials teaching how to solve Rubik's cubes with step-by-step guides and visual demonstrations.",
    "project.rubiks.tags": "JavaScript,3D Graphics,Education",

    "project.wordComb.title": "Word Combinations",
    "project.wordComb.desc":
      "A utility tool for generating and exploring word combinations with an intuitive interface.",
    "project.wordComb.tags": "JavaScript,Utility",

    "project.mathTable.title": "Math Table Generator",
    "project.mathTable.desc":
      "An interactive math table generator with customizable parameters and visual representations.",
    "project.mathTable.tags": "JavaScript,Education,Math",

    // CTA Section
    "cta.title": "Let's Create Something Amazing",
    "cta.subtitle":
      "I'm always interested in hearing about new projects and opportunities",
    "cta.github": "GitHub",
    "cta.youtube": "YouTube",

    // Footer
    "footer.name": "Yossof Abdelwahed",
    "footer.links": "GitHub,YouTube",
    "footer.copyright": "© 2026 Yossof Abdelwahed. All rights reserved.",

    // Contact
    "contact.title": "Get In Touch",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.emailValue": "Yossef2989@gmail.com",
    "contact.nick": "Discord/Gaming Nick",
    "theme.toggle": "Toggle Theme",
  },
  ar: {
    // Navigation
    "nav.github": "جيتهاب",
    "nav.youtube": "يوتيوب",

    // Hero Section
    "hero.badge": "مطور ويب • 15 سنة",
    "hero.title": "بناء المستقبل الرقمي",
    "hero.description":
      "أنا مطور ويب شغوف بـ 3 سنوات من خبرة JavaScript. أنشئ تجارب ويب تفاعلية وجميلة مع رسوم متحركة سلسة ومبادئ تصميم حديثة.",
    "hero.viewProjects": "عرض مشاريعي",
    "hero.github": "جيتهاب",

    // Skills Section
    "skills.title": "المهارات والخبرة",
    "skills.frontend": "تطوير الواجهات الأمامية",
    "skills.frontendItems": "React,JavaScript,Tailwind CSS,HTML/CSS",
    "skills.design": "التصميم التفاعلي",
    "skills.designItems": "الرسوم المتحركة,الرسوميات ثلاثية الأبعاد,تصميم الواجهات,التصميم المتجاوب",
    "skills.tools": "الأدوات والتقنيات",
    "skills.toolsItems": "Git,واجهات المتصفح,امتدادات المتصفح,معايير الويب الحديثة",

    // Projects Section
    "projects.title": "المشاريع المميزة",
    "projects.subtitle": "اختيار من أحدث وأكثر مشاريعي تأثيراً",
    "projects.other": "مشاريع أخرى",
    "projects.view": "عرض المشروع",
    "projects.view_short": "عرض",

    // Project Descriptions
    "project.customGrab.title": "امتداد المؤشر المخصص",
    "project.customGrab.desc":
      "امتداد متصفح يوفر وظيفة مؤشر مخصصة مع رسوم متحركة سلسة وردود فعل تفاعلية.",
    "project.customGrab.tags": "JavaScript,امتداد متصفح,تصميم الواجهات",

    "project.narcissus.title": "موقع ماركة Narcissus",
    "project.narcissus.desc":
      "موقع ويب ممتاز يعرض تصميم ويب حديث مع رسوم متحركة سلسة وتخطيط متجاوب وطباعة أنيقة.",
    "project.narcissus.tags": "React,Tailwind CSS,تصميم",

    "project.rubiks.title": "موقع تعليم مكعب روبيك",
    "project.rubiks.desc":
      "منصة تعليمية تفاعلية أنشر فيها دروساً تعليمية حول كيفية حل مكعب روبيك مع أدلة خطوة بخطوة وعروض توضيحية بصرية.",
    "project.rubiks.tags": "JavaScript,رسوميات ثلاثية الأبعاد,تعليم",

    "project.wordComb.title": "توليفات الكلمات",
    "project.wordComb.desc":
      "أداة مساعدة لتوليد واستكشاف توليفات الكلمات مع واجهة بديهية.",
    "project.wordComb.tags": "JavaScript,أداة مساعدة",

    "project.mathTable.title": "مولد جداول الرياضيات",
    "project.mathTable.desc":
      "مولد جداول رياضيات تفاعلي مع معاملات قابلة للتخصيص وتمثيلات بصرية.",
    "project.mathTable.tags": "JavaScript,تعليم,رياضيات",

    // CTA Section
    "cta.title": "لننشئ شيئاً مذهلاً",
    "cta.subtitle":
      "أنا مهتم دائماً بسماع مشاريع وفرص جديدة",
    "cta.github": "جيتهاب",
    "cta.youtube": "يوتيوب",

    // Footer
    "footer.name": "يوسف عبدالواحد",
    "footer.links": "جيتهاب,يوتيوب",
    "footer.copyright": "© 2026 يوسف عبدالواحد. جميع الحقوق محفوظة.",

    // Contact
    "contact.title": "تواصل معي",
    "contact.phone": "رقم الهاتف",
    "contact.email": "البريد الإلكتروني",
    "contact.emailValue": "Yossef2989@gmail.com",
    "contact.nick": "اسم Discord/Gaming",
    "theme.toggle": "تبديل الموضوع",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
