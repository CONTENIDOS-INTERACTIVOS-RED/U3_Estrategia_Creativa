export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Implementación de estrategias creativas',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Diseño de mensajes y conceptos creativos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Selección de canales y formatos publicitarios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'SmolakLozano, E. (Coord.), García Ponce, D. & Mercado Sáez, M. T. (2022). Gestión estratégica de campañas publicitarias y de relaciones públicas en entornos online. Editorial UOC.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/225281',
    },
    {
      referencia:
        'Rodríguez Carballeira, Á. (2009). El lavado de cerebro: psicología de la persuasión coercitiva. Marcombo. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/45878',
    },
    {
      referencia:
        'García García, F. (Coord.), TurViñes, V. (Coord.) & Rodrigo Martín, L. (Coord.). (2024). Creatividad en la narrativa publicitaria: estrategia, contenidos y discursos. Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/271733',
    },
    {
      referencia:
        'Guillem Molins, M., Roig Hierro, E. & Díaz Cobos, G. (2023). Cuando el movimiento facilita el aprendizaje: relación entre actividad física y cognición según la Neurociencia. Editorial INDE.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/276524',
    },
    {
      referencia:
        'Hernández Pérez, C. & Torres Díaz, R. (2020). Las neurociencias y la educación en la formación universitaria de los profesionales: mediaciones necesarias para un desarrollo humano sostenible. Editorial Universitaria.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/127964',
    },
    {
      referencia:
        'Puente Balsells, M. L. & Viñals Carrera, F. (2019). Grafología digital, tipográfica y del diseño visual. Editorial UOC.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/117708',
    },
  ],
  glosario: [
    {
      termino: '<em>Briefing</em> creativo',
      significado:
        'Documento que detalla los objetivos, público objetivo y lineamientos de una campaña publicitaria.',
    },
    {
      termino: 'Canales publicitarios',
      significado:
        'Medios a través de los cuales se difunde un mensaje publicitario (TV, radio, redes sociales, etc.).',
    },
    {
      termino: 'Concepto creativo',
      significado: 'Idea central y original que guía una campaña publicitaria.',
    },
    {
      termino: 'Conceptualización creativa',
      significado:
        'Proceso de generar ideas innovadoras y originales para una campaña.',
    },
    {
      termino: 'Formatos publicitarios',
      significado:
        'Formas en que se presenta un mensaje publicitario (banners, videos, posts, etc.).',
    },
    {
      termino: 'Medición de resultado',
      significado:
        'Proceso de evaluar el desempeño de una campaña publicitaria.',
    },
    {
      termino: 'Presentación efectiva',
      significado: 'Exposición clara y persuasiva de una propuesta creativa.',
    },
    {
      termino: 'Presentación y defensa de propuestas creativas',
      significado:
        'Exposición de ideas y justificación de decisiones ante clientes o equipos.',
    },
    {
      termino: 'Redacción de mensajes publicitarios',
      significado: 'Creación de mensajes claros, concisos y persuasivos.',
    },
    {
      termino: 'Selección de canales y formatos publicitarios',
      significado:
        'Elección de los medios más adecuados para alcanzar al público objetivo.',
    },
    {
      termino: 'Uso de recursos visuales y auditivos',
      significado:
        'Utilización de imágenes, sonidos y otros elementos para comunicar un mensaje.',
    },
  ],
}
