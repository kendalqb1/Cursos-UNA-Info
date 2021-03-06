export const cursos = [
  {
    codigo: "EIF200",
    nombre: "Fundamentos de Informática",
    creditos: 3,
    requisitos: [],
    nivel: 1,
    ciclo: 1,
    bachillerato: 0,
  },
  {
    codigo: "MAT030",
    nombre: "Matemática para Informática",
    creditos: 4,
    requisitos: [],
    nivel: 1,
    ciclo: 1,
    bachillerato: 0,
  },
  {
    codigo: "LIX410",
    nombre: "Inglés integrado I",
    creditos: 4,
    requisitos: [],
    nivel: 1,
    ciclo: 1,
    bachillerato: 0,
  },
  {
    codigo: "EIF201",
    nombre: "Programación I",
    creditos: 4,
    requisitos: ["EIF200", "MAT030"],
    nivel: 1,
    ciclo: 2,
    bachillerato: 0,
  },
  {
    codigo: "MAT002",
    nombre: "Cálculo I",
    creditos: 4,
    requisitos: ["MAT030"],
    nivel: 1,
    ciclo: 2,
    bachillerato: 0,
  },
  {
    codigo: "LIX411",
    nombre: "Inglés Integrado II",
    creditos: 4,
    requisitos: ["LIX410"],
    nivel: 1,
    ciclo: 2,
    bachillerato: 0,
  },
  {
    codigo: "EIF204",
    nombre: "Programación II",
    creditos: 4,
    requisitos: ["EIF201"],
    nivel: 2,
    ciclo: 1,
    bachillerato: 0,
  },
  {
    codigo: "MAT005",
    nombre: "Álgebra Lineal",
    creditos: 4,
    requisitos: ["MAT002"],
    nivel: 2,
    ciclo: 1,
    bachillerato: 0,
  },
  {
    codigo: "EIF202",
    nombre: "Soporte Técnico",
    creditos: 3,
    requisitos: ["EIF200"],
    nivel: 2,
    ciclo: 1,
    bachillerato: 0,
  },
  {
    codigo: "EIF203",
    nombre: "Estructuras Discretas para Informática",
    creditos: 3,
    requisitos: ["EIF200", "MAT030"],
    nivel: 2,
    ciclo: 1,
    bachillerato: 0,
  },
  {
    codigo: "LIX412",
    nombre: "Inglés Integrado III",
    creditos: 4,
    requisitos: ["LIX411"],
    nivel: 2,
    ciclo: 1,
    bachillerato: 0,
  },
  {
    codigo: "EIF206",
    nombre: "Programación III",
    creditos: 4,
    requisitos: ["EIF204", "MAT002"],
    nivel: 2,
    ciclo: 2,
    bachillerato: 0,
  },
  {
    codigo: "EIF207",
    nombre: "Estructuras de Datos",
    creditos: 4,
    requisitos: ["EIF203", "EIF204"],
    nivel: 2,
    ciclo: 2,
    bachillerato: 0,
  },
  {
    codigo: "EIF205",
    nombre: "Arquitectura de Computadoras",
    creditos: 3,
    requisitos: ["EIF201", "EIF202"],
    nivel: 2,
    ciclo: 2,
    bachillerato: 0,
  },
  {
    codigo: "EIF404",
    nombre: "La Organización y su Entorno",
    creditos: 3,
    requisitos: ["EIF201"],
    nivel: 2,
    ciclo: 2,
    bachillerato: 0,
  },
  {
    codigo: "MAT006",
    nombre: "Probabilidad y Estadística para Informática",
    creditos: 3,
    requisitos: ["MAT002", "EIF203"],
    nivel: 2,
    ciclo: 2,
    bachillerato: 0,
  },
  {
    codigo: "EIF209",
    nombre: "Programación IV",
    creditos: 4,
    requisitos: ["EIF206"],
    nivel: 3,
    ciclo: 1,
    bachillerato: 0,
  },
  {
    codigo: "EIF210",
    nombre: "Ingeniería de Sistemas I",
    creditos: 4,
    requisitos: ["EIF206"],
    nivel: 3,
    ciclo: 1,
    bachillerato: 0,
  },
  {
    codigo: "EIF211",
    nombre: "Diseño e Implementación de Bases de Datos",
    creditos: 4,
    requisitos: ["EIF206", "EIF207"],
    nivel: 3,
    ciclo: 1,
    bachillerato: 0,
  },
  {
    codigo: "EIF212",
    nombre: "Sistemas Operativos",
    creditos: 3,
    requisitos: ["EIF204", "EIF205"],
    nivel: 3,
    ciclo: 1,
    bachillerato: 0,
  },
  {
    codigo: "EIF208",
    nombre: "Comunicaciones y redes de Computadores",
    creditos: 3,
    requisitos: ["EIF205"],
    nivel: 3,
    ciclo: 1,
    bachillerato: 0,
  },
  {
    codigo: "EIF400",
    nombre: "Paradigmas de Programación",
    creditos: 4,
    requisitos: ["EIF206"],
    nivel: 3,
    ciclo: 2,
    bachillerato: 1,
  },
  {
    codigo: "EIF401",
    nombre: "Ingeniería de Sistemas II",
    creditos: 4,
    requisitos: ["EIF210"],
    nivel: 3,
    ciclo: 2,
    bachillerato: 1,
  },
  {
    codigo: "EIF402",
    nombre: "Administración de Bases de Datos",
    creditos: 4,
    requisitos: ["EIF212", "EIF211"],
    nivel: 3,
    ciclo: 2,
    bachillerato: 1,
  },
  {
    codigo: "EIF412",
    nombre: "Investigación de Operaciones y sus Aplicaciones",
    creditos: 3,
    requisitos: ["EIF206", "MAT005", "MAT006"],
    nivel: 3,
    ciclo: 2,
    bachillerato: 1,
  },
  {
    codigo: "EIF407",
    nombre: "Liderazgo y Organización",
    creditos: 3,
    requisitos: ["EIF404"],
    nivel: 3,
    ciclo: 2,
    bachillerato: 1,
  },
  {
    codigo: "EIF411",
    nombre: "Diseño y Programación de Plataformas Móviles",
    creditos: 4,
    requisitos: ["EIF209"],
    nivel: 4,
    ciclo: 1,
    bachillerato: 1,
  },
  {
    codigo: "EIF406",
    nombre: "Ingeniería de Sistemas III",
    creditos: 4,
    requisitos: ["EIF401"],
    nivel: 4,
    ciclo: 1,
    bachillerato: 1,
  },
  {
    codigo: "EIF413",
    nombre: "Métodos de Investigación Científica en Informática",
    creditos: 3,
    requisitos: ["MAT006"],
    nivel: 4,
    ciclo: 1,
    bachillerato: 1,
  },
  {
    codigo: "EIF408",
    nombre: "Proyectos y su Aplicación en la Organización (PPS)",
    creditos: 5,
    requisitos: ["EIF209", "EIF401", "EIF402"],
    nivel: 4,
    ciclo: 2,
    bachillerato: 1,
  },
  {
    codigo: "EIF409",
    nombre: "Aplicaciones Informáticas Globales",
    creditos: 4,
    requisitos: ["EIF209", "EIF401", "EIF402"],
    nivel: 4,
    ciclo: 2,
    bachillerato: 1,
  },
  {
    codigo: "EIF410",
    nombre: "Informática y Sociedad",
    creditos: 2,
    requisitos: ["EIF401"],
    nivel: 4,
    ciclo: 2,
    bachillerato: 1,
  },
];
