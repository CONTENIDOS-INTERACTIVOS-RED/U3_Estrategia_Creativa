<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Selección de canales y formatos publicitarios'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-4
        .col-lg-5
          figure
            img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in").mb-4.mt-lg-0
        .col-lg-7
          p(data-aos="fade-right") La selección de los canales y formatos publicitarios es esencial para maximizar el impacto de los mensajes, optimizar recursos y alcanzar al público objetivo de manera efectiva. Este proceso requiere conocer los canales disponibles, analizar el público objetivo y establecer criterios claros para la toma de decisiones. A continuación, se detallan las etapas y consideraciones claves:

      .bg-color-info.p-4.p-md-5.mb-4
        .row.justify-content-center
          .col-xl-8.col-lg-10
            figure
              img(src="@/assets/curso/tema2/f1.svg", data-aos="zoom-in").mb-4.mt-lg-0

      

      p(data-aos="fade-right").mb-4 Algunos ejemplos de canales digitales, son: 
      
      .bg-full-width.bg-fondo-4
        .px-4.px-md-5.pb-md-3

          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/2.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Redes sociales (Facebook, Instagram, TikTok, LinkedIn)
                  p.mb-0 Alta segmentación y posibilidad de interacción directa.
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/3.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Video online (YouTube)
                  p.mb-0 Permite crear contenido audiovisual impactante.
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/4.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Anuncios display
                  p.mb-0 Banners gráficos en páginas web y aplicaciones móviles.





      .row.align-items-start.mb-5
          .col-lg-8

            p(data-aos="fade-left").mb-4 Los criterios para seleccionar canales y formatos publicitarios, son:

            AcordionA(tipo="b")(data-aos="fade-left")
              .div(titulo="Identificar dónde se encuentra el público objetivo")
                ul.lista-ul--color
                  li.mb-2
                    i.fas.fa-check-circle
                    | #[b Análisis demográfico:] edad, género, ubicación, nivel socioeconómico.
                  li.mb-2
                    i.fas.fa-check-circle
                    | #[b Comportamiento en línea:] redes sociales que utiliza, sitios web que visita, dispositivos empleados.
                  li.mb-2
                    i.fas.fa-check-circle
                    | #[b Intereses y hábitos de consumo:] qué compra, cómo se informa.
                  li.mb-0
                    i.fas.fa-check-circle
                    | #[b Ejemplo:] jóvenes interesados en moda sostenible, pueden ser alcanzados por Instagram, TikTok y blogs especializados.

              .div(titulo="Ajuste al presupuesto y objetivos de la campaña")
                ul.lista-ul--color
                  li.mb-2
                    i.fas.fa-check-circle
                    | #[b Define el presupuesto total] y analiza el costo por contacto de cada canal.
                  li.mb-2
                    i.fas.fa-check-circle
                    | #[b Considera los objetivos específicos] de la campaña (awareness, consideración, conversión).
                  li.mb-0
                    i.fas.fa-check-circle
                    | #[b Ejemplo:] para awareness con bajo costo, las redes sociales son ideales; para conversiones inmediatas, el Search Engine Marketing (SEM), es más efectivo.

              .div(titulo="Adaptación del mensaje al canal y al formato")
                ul.lista-ul--color
                  li.mb-2
                    i.fas.fa-check-circle
                    | #[b Formato visual:] imágenes, videos, texto, infografías.
                  li.mb-2
                    i.fas.fa-check-circle
                    | #[b Duración:] el tiempo de atención del usuario varía, según el canal.
                  li.mb-2
                    i.fas.fa-check-circle
                    | #[b Lenguaje:] adapta el tono y estilo al público y medios seleccionados.
                  li.mb-0
                    i.fas.fa-check-circle
                    | #[b Ejemplo:] un video en YouTube puede ser más narrativo, mientras que en Instagram Stories, debe ser breve e impactante.

          .col-lg-4
            figure
              img(src="@/assets/curso/tema2/5.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0



      p(data-aos="fade-right").mb-4 En el entorno digital, los formatos destacados, juegan un papel clave en la conexión con las audiencias.


      .row.justify-content-center.align-items-stretch
        .col-lg-6.mb-4
          .bg-color-1.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/icon-1.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Banners
                p.mb-0 Anuncios gráficos de diversos tamaños en sitios web, y aplicaciones móviles

        .col-lg-6.mb-4
          .bg-color-1.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/icon-2.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Videos cortos
                p.mb-0 Contenido audiovisual breve, optimizado para dispositivos móviles (YouTube, TikTok).

      .row.justify-content-center.align-items-stretch
        .col-lg-6.mb-4
          .bg-color-1.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/icon-3.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Stories y Reels
                p.mb-0 Publicaciones efímeras y videos verticales, diseñados para consumo rápido y entretenido (Instagram, TikTok).
        .col-lg-6.mb-4
          .bg-color-1.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/icon-4.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Live streams
                p.mb-0 Transmisiones en vivo que permiten interacción directa en tiempo real, con la audiencia.



      p(data-aos="fade-right").mb-4 Las innovaciones en publicidad, están transformando la forma en que las marcas interactúan con su audiencia.

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema1/slider-1.png")
              .col-lg-7
                h5 Realidad Aumentada (AR)
                p Crea experiencias interactivas superponiendo elementos digitales en el mundo real.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema1/slider-2.png")
              .col-lg-7
                h5 Gamificación
                p Motiva la interacción mediante elementos de juego, generando engagement.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema1/slider-3.png")
              .col-lg-7
                h5 Personalización
                p Usa datos para crear anuncios relevantes y únicos para cada usuario, aumentando la efectividad.

      p(data-aos="fade-right").mb-4 Estas tendencias permiten a las marcas conectar, de manera más efectiva, con sus audiencias, ofreciendo experiencias únicas que destacan en un mercado saturado.

      .row.mb-5
        .col-lg-7
          .bg-color-2.p-4(data-aos="fade-left").mb-4
            h5(data-aos="fade-left").mb-4 Estrategias multicanal
            p.mb-0 Para maximizar el impacto, lo ideal es combinar varios canales. Esto permite alcanzar audiencias más amplias y diversificadas, reforzando el mensaje desde distintos ángulos. Por ejemplo, una campaña que combine televisión, redes sociales y video online puede generar awareness a gran escala, mientras interactúa con segmentos específicos.

    
          p(data-aos="fade-left").mb-4 La selección de canales y formatos publicitarios, es una decisión estratégica que depende de factores como el público objetivo, presupuesto, objetivos de la campaña y el mensaje. Comprender las características de cada canal y formato, junto con las tendencias emergentes, permite diseñar campañas efectivas, creativas y alineadas con las metas organizacionales.

        .col-lg-5
          figure
            img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")


      h2(data-aos="fade-left").mb-4 Matriz de decisión

      p(data-aos="fade-right").mb-4 Para facilitar la toma de decisiones, se puede crear una matriz que permita comparar los diferentes canales y formatos, en función de los criterios mencionados.


      .titulo-figura.mb-4
        h5 Tabla 1. 
        span Matriz de decisión
      .tabla-a.mb-5
        table
          thead
            tr
              th Criterio
              th Canal 1
              th Canal 2
              th Canal 3

          tbody
            tr
              td <strong>Público objetivo</strong>
              td Alto
              td Medio
              td Bajo
            tr
              td <strong>Presupuesto</strong>
              td Bajo
              td Medio
              td Alto
            tr
              td <strong>Objetivos</strong>
              td Awareness/Consciencia
              td Consideración
              td Conversión
            tr
              td <strong>Formato</strong>
              td Video
              td Imagen
              td Texto
            tr
              td <strong>Alcance</strong>
              td Global
              td Regional
              td Local
            tr
              td <strong>Interactividad</strong>
              td Alta
              td Media
              td Baja
            tr
              td <strong>Medición</strong>
              td Detallada
              td Moderada
              td Básica

      h2(data-aos="fade-left").mb-4 Tendencias y consideraciones adicionales

      p(data-aos="fade-right").mb-4 En el ámbito publicitario, ciertas tendencias y consideraciones son claves para maximizar el impacto de las campañas.



      .bg-full-width.bg-color-info
        .p-4.p-md-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-auto
              ImagenInfografica.color-secundario
                  template(v-slot:imagen)
                    figure
                      img(src='@/assets/curso/tema2/info1.png', alt='', style="max-width: 677px;").mx-auto

                  .bg-color-white.box-shadow.p-3(x="12%" y="20%" numero="+")
                    h5 Personalización
                    p Utiliza datos para crear mensajes personalizados y relevantes para cada usuario.

                  .bg-color-white.box-shadow.p-3(x="88%" y="20%" numero="+")
                    h5 Experiencia del usuario
                    p Los anuncios deben ser útiles y relevantes para el usuario, evitando ser intrusivos.

                  .bg-color-white.box-shadow.p-3(x="12%" y="80%" numero="+")
                    h5 Medición y optimización
                    p Utiliza herramientas de análisis, para medir el rendimiento de las campañas y realizar ajustes en tiempo real.

                  .bg-color-white.box-shadow.p-3(x="88%" y="78%" numero="+")
                    h5 Mobile-first
                    p Optimiza los anuncios para dispositivos móviles, considerando que cada vez más personas acceden a Internet, desde sus smartphones.


      .bg-full-width.bg-color-3
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/7.png', alt='')

            .col-lg-8
              h2.mb-4(data-aos="flip-up") Presentación y defensa de propuestas creativas
              p.mb-4(data-aos="fade-right") La presentación y defensa de propuestas creativas, es fundamental para asegurar una comunicación clara y efectiva en sectores como marketing, diseño y emprendimiento. Este proceso incluye estructurar la propuesta con objetivos, conceptos creativos y métricas, emplear storytelling y herramientas visuales, para captar la atención, y manejar objeciones con estrategias proactivas.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Presentación y defensa de propuestas creativas


      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/269981" target="_blank" rel="noopener noreferrer") Kotler, P., Kartajaya, H. & Setiawan, I. (2018). Marketing 4.0: transforma tu estrategia para atraer al consumidor digital. LID Editorial España. 
   
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://open.spotify.com/intl-es/album/1s7urt55NaykLbbj2C8wft" target="_blank" rel="noopener noreferrer") Robert Greene. (2022). El arte de la seducción. Guía rápida. Spotify.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Selección de canales y formatos publicitarios',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes NO es una etapa de la redacción de mensajes publicitarios?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Brief creativo',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Copywriting',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Diseño gráfico',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Distribución',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de los siguientes recursos visuales puede generar una mayor conexión emocional con el público?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fotografías',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Ilustraciones',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Videos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Todos los anteriores',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de los siguientes factores NO se debe considerar al seleccionar un canal publicitario?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Presupuesto',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Público objetivo',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Competencia',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Número de empleados de la empresa',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál de los siguientes formatos digitales es más adecuado para contar historias y generar engagement?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Banners',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Videos',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Infografías',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Todos los anteriores',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál de las siguientes habilidades NO es necesaria para una presentación exitosa?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Oratoria',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Conocimiento del tema',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Habilidades de diseño gráfico',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Habilidad para manejar las objeciones',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
