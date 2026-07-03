// Vanilla JS: RU/EN language switcher, footer year, subtle section reveal.
// No dependencies, no build step.

// ---------- i18n ----------
// Every element with data-i18n="key" gets its text from this dictionary.
// I18N-START
const I18N = {
  en: {
    "doc.title": "David Tsykunov — Junior Python / AI Automation Developer",
    "brand": "David Tsykunov",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.stack": "Tech Stack",
    "nav.contact": "Contact",
    "hero.kicker": "Hi, I'm",
    "hero.name": "David Tsykunov",
    "hero.role": "Junior Python / AI Automation Developer",
    "hero.tagBots": "Telegram Bots",
    "hero.tagApi": "API Integrations",
    "hero.tagTools": "Internal Tools",
    "hero.desc": "I build practical Python and AI automation projects: FastAPI backends, LLM/RAG assistants, Telegram bots, internal tools and business automation prototypes.",
    "hero.viewProjects": "View Projects",
    "hero.githubProfile": "GitHub Profile",
    "about.title": "About",
    "about.p1": "I'm a junior Python developer focused on AI automation. I enjoy turning repetitive business processes into working software: backend APIs, assistants built on LLMs and retrieval-augmented generation, and Telegram bots that real users interact with.",
    "about.p2": "My projects are built end to end: API design, data storage, vector search, external integrations, tests and Docker. I care about honest engineering, validating what an AI agent does before it acts, keeping decisions structured and inspectable, and writing code that is easy to read and maintain.",
    "about.p3": "I'm currently open to junior Python / AI automation roles and freelance projects.",
    "projects.title": "Featured Projects",
    "project1.desc": "FastAPI-based AI customer assistant with LLM planner, RAG/Qdrant, structured JSON decisions, conversation history, lead/ticket creation, Telegram integration, admin panel and backend validation before executing actions.",
    "project2.desc": "Real-time AI commentary prototype for CS2 using computer vision, event detection, FastAPI backend, LLM text generation and TTS.",
    "project3.desc": "Freelance Telegram Mini App and bot project for a stretching/wellness studio. Includes service information, booking flow, client profile, data collection and admin broadcasts.",
    "btn.liveDemo": "Live demo · Coming soon",
    "btn.demoVideo": "Demo video · Coming soon",
    "btn.screenshots": "Screenshots · Coming soon",
    "stack.title": "Tech Stack",
    "stack.backend": "Backend",
    "stack.ai": "AI & Computer Vision",
    "stack.bots": "Bots & Integrations",
    "stack.tools": "Tools & Frontend",
    "contact.title": "Contact",
    "contact.intro": "Open to junior Python / AI automation roles and freelance projects. The fastest way to reach me is Telegram or email.",
    "footer.name": "David Tsykunov",
    "footer.built": "Built with plain HTML, CSS and JavaScript"
  },
  ru: {
    "doc.title": "Давид Цыкунов - Junior Python / AI Automation Developer",
    "brand": "Давид Цыкунов",
    "nav.about": "Обо мне",
    "nav.projects": "Проекты",
    "nav.stack": "Стек",
    "nav.contact": "Контакты",
    "hero.kicker": "Привет, я",
    "hero.name": "Давид Цыкунов",
    "hero.role": "Junior Python / AI Automation Developer",
    "hero.tagBots": "Telegram-боты",
    "hero.tagApi": "API-интеграции",
    "hero.tagTools": "Внутренние инструменты",
    "hero.desc": "Создаю практические проекты на Python и AI automation: FastAPI backend, LLM/RAG-ассистенты, Telegram-боты, внутренние инструменты и прототипы автоматизации бизнес-процессов.",
    "hero.viewProjects": "Смотреть проекты",
    "hero.githubProfile": "Профиль на GitHub",
    "about.title": "Обо мне",
    "about.p1": "Я junior Python-разработчик, сфокусированный на AI automation. Мне нравится превращать рутинные бизнес-процессы в работающий софт: backend API, ассистенты на LLM и RAG, Telegram-боты, которыми пользуются реальные люди.",
    "about.p2": "Свои проекты я делаю от начала до конца: проектирование API, хранение данных, векторный поиск, внешние интеграции, тесты и Docker. Мне важна честная инженерия: валидация действий AI-агента до их выполнения, структурированные и проверяемые решения, читаемый и поддерживаемый код.",
    "about.p3": "Открыт к junior-позициям в Python / AI automation и freelance-проектам.",
    "projects.title": "Проекты",
    "project1.desc": "AI-ассистент для бизнеса на FastAPI с LLM planner, RAG/Qdrant, структурированными JSON-решениями, историей диалогов, созданием лидов и тикетов, Telegram-интеграцией, админ-панелью и backend-валидацией действий.",
    "project2.desc": "Прототип AI-комментатора для CS2 в реальном времени: computer vision, определение игровых событий, FastAPI backend, генерация текста через LLM и озвучка через TTS.",
    "project3.desc": "Freelance-проект Telegram Mini App и бота для студии растяжки: информация об услугах, запись, личный кабинет, сбор клиентских данных и админские рассылки.",
    "btn.liveDemo": "Live demo · Скоро",
    "btn.demoVideo": "Демо-видео · Скоро",
    "btn.screenshots": "Скриншоты · Скоро",
    "stack.title": "Стек",
    "stack.backend": "Backend",
    "stack.ai": "AI и Computer Vision",
    "stack.bots": "Боты и интеграции",
    "stack.tools": "Инструменты и фронтенд",
    "contact.title": "Контакты",
    "contact.intro": "Открыт к junior-позициям в Python / AI automation и freelance-проектам. Быстрее всего написать в Telegram или на почту.",
    "footer.name": "Давид Цыкунов",
    "footer.built": "Сделано на чистом HTML, CSS и JavaScript"
  }
};
// I18N-END

function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (Object.prototype.hasOwnProperty.call(dict, key)) {
      el.textContent = dict[key];
    }
  });

  document.documentElement.lang = lang;
  document.title = dict["doc.title"];

  document.querySelectorAll(".lang-toggle button").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
}

function detectLang() {
  let saved = null;
  try {
    saved = localStorage.getItem("lang");
  } catch (e) {
    // localStorage unavailable (e.g. blocked) - fall back to browser locale
  }
  if (saved === "en" || saved === "ru") return saved;
  const locale = (navigator.language || "").toLowerCase();
  return locale.startsWith("ru") ? "ru" : "en";
}

document.querySelectorAll(".lang-toggle button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      // ignore - switching still works for the current page view
    }
    applyLang(lang);
  });
});

applyLang(detectLang());

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Reveal sections on scroll ----------
// CSS only animates when prefers-reduced-motion is not set.
const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.1 }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("visible"));
}
