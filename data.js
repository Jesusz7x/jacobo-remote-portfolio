window.PORTFOLIO = {
  profile: {
    name: "Jacobo de Jesús Castillo Pacheco",
    email: "jacobodejesuscastillopacheco@gmail.com",
    github: "https://github.com/Jesusz7x",
    availability: { en: "Available immediately", es: "Disponibilidad inmediata" },
    education: { en: "Systems Engineering student · UES", es: "Estudiante de Ingeniería de Sistemas · UES" }
  },
  projects: [
    {
      number: "01", name: "HealthOps Intelligence", visual: "H/O", tag: "PYTHON · SQLITE · OPERATIONS",
      description: { en: "A bilingual, read-only operations demo with a metrics dashboard, appointment and inventory workflows, CSV validation, and fictional data. Built as a portfolio project, not certified clinical software.", es: "Demo bilingüe de operaciones y solo lectura, con panel de indicadores, flujos de citas e inventario, validación CSV y datos ficticios. Es un proyecto demostrativo, no software clínico certificado." },
      status: { en: "PUBLIC DEMO · FICTIONAL DATA", es: "DEMO PÚBLICA · DATOS FICTICIOS" }, href: "projects/healthops-intelligence.html", repo: "https://github.com/Jesusz7x/healthops-intelligence", live: "https://healthops-intelligence-demo.onrender.com/", icon: "01"
    },
    {
      number: "02", name: "StockPilot", visual: "S/P", tag: "PYTHON · SQLITE · INVENTORY",
      description: { en: "A local-first inventory ledger for a small-business demonstration. It records products, receipts, issues, quantity balances, low-stock alerts, and CSV exports.", es: "Registro de inventario local para una demostración de pequeña empresa. Registra productos, entradas, salidas, existencias, alertas de bajo stock y exportaciones CSV." },
      status: { en: "LOCAL CLI · SOURCE AVAILABLE", es: "CLI LOCAL · CÓDIGO DISPONIBLE" }, repo: "https://github.com/Jesusz7x/stockpilot", icon: "02"
    },
    {
      number: "03", name: "Python Office Tools", visual: "P/OT", tag: "PYTHON · CSV · AUTOMATION",
      description: { en: "A collection of local-first utilities for CSV checks, safe file operations, record reconciliation, and job application tracking. Python standard library; synthetic examples.", es: "Utilidades locales para revisar CSV, operar archivos de forma segura, conciliar registros y dar seguimiento a postulaciones. Biblioteca estándar de Python y ejemplos sintéticos." },
      status: { en: "TOOLS & TESTS IN REPOSITORY", es: "HERRAMIENTAS Y PRUEBAS EN EL REPOSITORIO" }, repo: "https://github.com/Jesusz7x/python-office-tools", icon: "03"
    },
    {
      number: "04", name: "REMOTECAREER-LAB", visual: "R/L", tag: "PYTHON · SQLITE · WEB",
      description: { en: "A documented workspace of local-first software and web projects, including data-quality, automation, and testing examples. It does not claim job placements or employment outcomes.", es: "Espacio documentado de proyectos locales de software y web, con ejemplos de calidad de datos, automatización y pruebas. No afirma colocaciones ni resultados laborales." },
      status: { en: "DOCUMENTED PROJECT WORKSPACE", es: "ESPACIO DE PROYECTOS DOCUMENTADO" }, repo: "https://github.com/Jesusz7x/REMOTECAREER-LAB", icon: "04"
    },
    {
      number: "05", name: "CSV Data Cleaner", visual: "CSV", tag: "PYTHON · DATA QUALITY",
      description: { en: "A dependency-free CLI that audits CSV quality, trims whitespace, counts missing values, and removes exact duplicates while preserving the source file.", es: "CLI sin dependencias que revisa la calidad de CSV, quita espacios sobrantes, cuenta valores faltantes y elimina duplicados exactos sin alterar el original." },
      status: { en: "WORKING CLI · TESTS INCLUDED", es: "CLI FUNCIONAL · PRUEBAS INCLUIDAS" }, href: "projects/data-cleaner.html", icon: "05"
    },
    {
      number: "06", name: "More project notes", visual: "TOOLS", tag: "AUTOMATION · QA · WEB",
      description: { en: "Additional small tools and project notes: file automation, a task API, a sales dashboard, QA evidence, and a local job tracker.", es: "Más herramientas y fichas: automatización de archivos, API de tareas, panel de ventas, evidencia de QA y registro local de postulaciones." },
      status: { en: "LOCAL DEMOS · DETAILS IN NOTES", es: "DEMOS LOCALES · DETALLES EN LA FICHA" }, href: "projects/additional-work.html", icon: "06"
    }
  ],
  skills: [
    { key: "used", items: { en: ["Python", "SQLite", "HTML · CSS · JavaScript", "Git · GitHub", "CSV validation", "Responsive web projects"], es: ["Python", "SQLite", "HTML · CSS · JavaScript", "Git · GitHub", "Validación CSV", "Proyectos web adaptables"] } },
    { key: "learning", items: { en: ["SQL and data modeling", "Web interfaces", "Automation", "Linux · Debian", "AI tools and practical applications"], es: ["SQL y modelado de datos", "Interfaces web", "Automatización", "Linux · Debian", "Herramientas de IA y aplicaciones prácticas"] } },
    { key: "exploration", items: { en: ["Angular · React · Vue · Svelte", "Node.js · Java · C#/.NET · PHP", "MySQL · AWS · Azure · Google Cloud", "Docker · DevOps · software architecture"], es: ["Angular · React · Vue · Svelte", "Node.js · Java · C#/.NET · PHP", "MySQL · AWS · Azure · Google Cloud", "Docker · DevOps · arquitectura de software"] } }
  ],
  education: [
    { years: "2014 — 2022", title: { en: "Escuela Profesora Concepción Alemán Córdoba", es: "Escuela Profesora Concepción Alemán Córdoba" }, detail: { en: "School education", es: "Educación escolar" } },
    { years: "2023 — 2025", title: { en: "Instituto Nacional de Usulután", es: "Instituto Nacional de Usulután" }, detail: { en: "Technical high school diploma in Primary Health Care", es: "Bachillerato Técnico en Atención Primaria en Salud" } },
    { years: "IN PROGRESS", title: { en: "Universidad de El Salvador (UES)", es: "Universidad de El Salvador (UES)" }, detail: { en: "Systems Engineering · Current studies", es: "Ingeniería de Sistemas · Estudios en curso" } }
  ],
  interests: { en: ["Software development", "Process automation", "Information systems", "Applied AI", "Data engineering", "Web development", "Linux infrastructure and tools", "Digital solutions for health and operations"], es: ["Desarrollo de software", "Automatización de procesos", "Sistemas de información", "Inteligencia artificial aplicada", "Ingeniería de datos", "Desarrollo web", "Infraestructura y herramientas Linux", "Soluciones digitales para salud y operaciones"] }
};
