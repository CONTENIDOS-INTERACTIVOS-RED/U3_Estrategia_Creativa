<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Diseño de mensajes y conceptos creativos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p(data-aos="fade-right").mb-4 La implementación de estrategias creativas es la culminación de todo el proceso estratégico y creativo, desarrollado previamente. Se enseña como el último tema de la asignatura Estrategia Creativa, dado que permite integrar y materializar todas las fases anteriores, siguiendo un orden lógico y práctico.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white(data-aos="zoom-in")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-1.png")
            .col-lg-7.order-lg-1
              h5 Fundamentos previos
              p Requiere una base sólida con:

              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Análisis de mercado y público objetivo:] conocer a quién va dirigido el mensaje.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Definición de objetivos claros y medibles:] establecer metas precisas. 
                li.mb-0
                  i.fas.fa-check-circle
                  | #[b Alineación con la propuesta de valor:] garantizar que la estrategia refuerce la identidad de la marca.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-2.png")
            .col-lg-7.order-lg-1
              h5 Proceso creativo y #[em briefing]
              p
                | Requiere dos elementos fundamentales:
              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Proceso creativo:] genera ideas innovadoras que sustentan la estrategia.
                li.mb-0
                  i.fas.fa-check-circle
                  | #[b Briefing:] actúa como guía estratégica, asegurando que las acciones estén alineadas con los objetivos de la marca y las necesidades del cliente.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-3.png")
            .col-lg-7.order-lg-1
              h5 Ejecución del proceso
              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-check-circle
                  | Traduce las estrategias en campañas, mensajes y acciones concretas.
                li.mb-0
                  i.fas.fa-check-circle
                  | Se seleccionan los canales, formatos y tácticas adecuados, según la planificación estratégica previa.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-4.png")
            .col-lg-7.order-lg-1
              h5 Reflejo de la dinámica profesional
              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-check-circle
                  | Simula la práctica profesional mediante investigación, planificación y conceptualización, antes de implementar.
                li.mb-0
                  i.fas.fa-check-circle
                  | Enseña a los estudiantes a trabajar colaborativamente y de manera estructurada, simulando el funcionamiento de una agencia o departamento de marketing.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-5.png")
            .col-lg-7.order-lg-1
              h5 Evaluación y optimización
              p Permite probar los resultados mediante preguntas como:
              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-check-circle
                  | ¿El mensaje llegó al público objetivo?
                li.mb-2
                  i.fas.fa-check-circle
                  | ¿Fueron efectivos los canales y los formatos seleccionados?
                li.mb-0
                  i.fas.fa-check-circle
                  | Analiza el éxito y optimiza futuras campañas.


    h2(data-aos="fade-left") Conceptualización creativa

    p En la era digital, la creatividad es el motor que impulsa el éxito de las campañas publicitarias. 

    .bg-full-width.bg-color-3.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/1.png', alt='')

          .col-lg-8
            h2.mb-4(data-aos="flip-up") Conceptos creativos en publicidad: definición y aplicaciones prácticas
            p.mb-4(data-aos="fade-right") Los conceptos creativos, conectan las propuestas de valor con las emociones del público. Ejemplos: "El momento que conecta tus sentidos" para café, o "Beber bien, vivir mejor" para agua sostenible. Técnicas de #[em copywriting], garantizan mensajes claros, emocionales y persuasivos.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Conceptos creativos en publicidad: definición y aplicaciones prácticas.


    h2(data-aos="fade-left") Conocer a la audiencia: el primer paso para conectar


    .bg-full-width.bg-color-4.mb-lg-5
      .ps-4.ps-lg-5

        .row.justify-content-center.align-items-stretch

          .col-lg-6(data-aos="fade-left")
            .py-4
              p(data-aos="fade-left").mb-4 Conocer la audiencia es el primer paso para construir mensajes significativos y generar conexiones auténticas.
              
              TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                texto="Conocer a la audiencia: el primer paso para establecer una verdadera conexión"
                tiempo
                :audio="require('../../assets/curso/podcast/podcast1.mp3')"
              )

          .col-lg-6(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema1/2.svg', style="max-width:658px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0


    h2(data-aos="fade-left") AIDA: el modelo clave para estructurar mensajes

    p(data-aos="fade-left").mb-4 El modelo #[b AIDA] (Atención, Interés, Deseo, Acción), estructura los mensajes de forma que conecten con la audiencia en cada etapa.

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.align-items-start.mb-5
            .col-lg-4
              figure
                img(src="@/assets/curso/tema1/3.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
            .col-lg-8

              AcordionA(tipo="b")(data-aos="fade-left")
                .div(titulo="Atención")
                  ul.lista-ul--color
                    li.mb-2
                      i.fas.fa-check-circle
                      | #[b Titulares llamativos:] usa preguntas o cifras impactantes.
                    li.mb-2
                      i.fas.fa-check-circle
                      | #[b Visuales atractivos:] gráficos dinámicos o videos.
                    li.mb-2
                      i.fas.fa-check-circle
                      | #[b Personalización:] hablar directamente al usuario.
                    li.mb-2
                      i.fas.fa-check-circle
                      | #[b Formato creativo:] uso de infografías o interfaces interactivas.
                    li.mb-0
                      i.fas.fa-check-circle
                      | #[b Ejemplo:] "¿Sabías que puedes duplicar tus ingresos en solo 2 horas al día?" Un video ilustrando resultados transformadores.

                .div(titulo="Interés")
                  ul.lista-ul--color
                    li.mb-2
                      i.fas.fa-check-circle
                      | #[b Storytelling:] historias que conecten emocionalmente.
                    li.mb-2
                      i.fas.fa-check-circle
                      | #[b Datos y estadísticas:] afirmaciones respaldadas.
                    li.mb-2
                      i.fas.fa-check-circle
                      | #[b Contenido educativo:] tutoriales o información útil.
                    li.mb-2
                      i.fas.fa-check-circle
                      | #[b Plantear un problema:] exponer desafíos relevantes.
                    li.mb-0
                      i.fas.fa-check-circle
                      | #[b Ejemplo:] "Cuando Ana descubrió este método, logró reducir su ansiedad en solo una semana". "El 85% de nuestros clientes, reportan resultados positivos en el primer mes".

                .div(titulo="Deseo")
                  ul.lista-ul--color
                    li.mb-2
                      i.fas.fa-check-circle
                      | #[b Enfoque en beneficios:] resalta resultados positivos.
                    li.mb-2
                      i.fas.fa-check-circle
                      | #[b Prueba social:] testimonios y reseñas.
                    li.mb-2
                      i.fas.fa-check-circle
                      | #[b Garantías:] reducir el riesgo.
                    li.mb-2
                      i.fas.fa-check-circle
                      | #[b Visualización del resultado:] muestra transformaciones.
                    li.mb-0
                      i.fas.fa-check-circle
                      | #[b Ejemplo:] "Imagina trabajar menos y disfrutar más tiempo libre, con nuestra herramienta". "Prueba gratis por 30 días, sin compromisos".

                .div(titulo="Acción")
                  ul.lista-ul--color
                    li.mb-2
                      i.fas.fa-check-circle
                      | #[b Llamadas a la acción (CTAs):] frases claras y urgentes.
                    li.mb-2
                      i.fas.fa-check-circle
                      | #[b Escasez y urgencia:] ofertas limitadas.
                    li.mb-2
                      i.fas.fa-check-circle
                      | #[b Simplicidad del proceso:] pasos claros y rápidos.
                    li.mb-0
                      i.fas.fa-check-circle
                      | #[b Ejemplo:] "Descarga ahora", "Reserva tu lugar hoy". "Solo por hoy: 50% de descuento en todos nuestros productos".


        p(data-aos="fade-left").mb-4 El ejemplo práctico del modelo AIDA:

        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/icon-1.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Atención
              p.mb-0.text-center ¿Quieres ganar más sin trabajar tan duro?
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/icon-2.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Interés
              p.mb-0.text-center Descubre las estrategias que miles de emprendedores están usando.
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/icon-3.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Deseo
              p.mb-0.text-center Aprende paso a paso con nuestro curso probado por más de 10,000 personas.


          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/icon-4.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Acción
              p.mb-0.text-center Haz clic ahora y empieza gratis por 7 días.


    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/icon-5.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Este enfoque sistemático, permite estructurar mensajes persuasivos y efectivos, asegurando que cada interacción sea una oportunidad para captar, interesar y motivar a la audiencia.


    h2(data-aos="fade-left") Contenidos efectivos en el #[span marketing] digital del siglo XXI

    p(data-aos="fade-left").mb-4 La creación de mensajes creativos efectivos, requiere de un enfoque sistemático que integre la comprensión del público objetivo, la definición clara del mensaje clave, y la selección estratégica de los recursos visuales y auditivos.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white(data-aos="zoom-in")

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-1-2.png")
            .col-lg-7.order-lg-1
              h5 Comprensión del público objetivo
              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Demografía:] identificar características como edad, género, ubicación y nivel socioeconómico.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Psicografía:] determinar intereses, valores, motivaciones y estilos de vida.
                li.mb-0
                  i.fas.fa-check-circle
                  | #[b Comportamiento:] analizar hábitos de consumo, interacción con la marca y canales preferidos.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-2-2.png")
            .col-lg-7.order-lg-1
              h5 Definición del mensaje clave
              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Contenido:] identificar el beneficio principal que se desea comunicar.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Emoción deseada:] definir si se busca transmitir alegría, sorpresa, nostalgia u otra emoción.
                li.mb-0
                  i.fas.fa-check-circle
                  | #[b Diferenciación:] destacar el valor único frente a la competencia.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-3-2.png")
            .col-lg-7.order-lg-1
              h5 Selección de recursos visuales y auditivos
              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Imágenes:] fotografías reales y de alta calidad, ilustraciones creativas o iconos simples.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Videos:] animaciones para explicar conceptos, videos en vivo para generar cercanía y testimonios para reforzar credibilidad.
                li.mb-0
                  i.fas.fa-check-circle
                  | #[b Audio:] música acorde a la marca, efectos de sonido que complementen el mensaje y voces en off profesionales.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-4-2.png")
            .col-lg-7.order-lg-1
              h5 Diseño y combinación de elementos
              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Coherencia visual:] utilizar una paleta de colores y tipografía, alineada con la identidad de la marca.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Jerarquía visual:] destacar elementos claves para guiar la atención del público.
                li.mb-0
                  i.fas.fa-check-circle
                  | #[b Equilibrio:] combinar recursos visuales y auditivos, de forma armónica.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-5-2.png")
            .col-lg-7.order-lg-1
              h5 Pruebas y optimización
              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Pruebas A/B:] comparar distintas versiones del diseño, para elegir la más efectiva.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Feedback:] recibir opiniones del público, para realizar ajustes.
                li.mb-0
                  i.fas.fa-check-circle
                  | #[b Métricas:] evaluar el impacto en el engagement y la interacción del público.


                  p(data-aos="fade-left").mb-4 El modelo #[b AIDA] (Atención, Interés, Deseo, Acción), estructura los mensajes de forma que conecten con la audiencia en cada etapa.

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.align-items-start.mb-5
            .col-lg-4
              figure
                img(src="@/assets/curso/tema1/4.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
            .col-lg-8

              p(data-aos="fade-left").mb-4 Los elementos claves en el diseño de mensajes publicitarios, son:

              AcordionA(tipo="b")(data-aos="fade-left")
                .div(titulo="Titulares impactantes")
                  p.mb-0 #[em ]"¿Estás cometiendo estos errores en redes sociales?" o "¿Cómo aumentar tus ventas un 30 % en un mes?”.]

                .div(titulo="<em>Storytelling</em>")
                  p.mb-0 Historias que conectan emocionalmente, como el caso de un cliente que transformó su negocio.

                .div(titulo="Prueba social")
                  p.mb-0 "Más de 10.000 clientes satisfechos" o "Calificación de 4.9 estrellas en Google”.

                .div(titulo="Llamados a la acción")
                  p.mb-0 "Únete ahora y cambia tu futuro" o "Descarga nuestra guía gratuita”.

                .div(titulo="Uso de emociones")
                  p.mb-0 Apelar al deseo ("Imagina capturar momentos inolvidables con nuestro nuevo teléfono") o a la esperanza.


        p(data-aos="fade-left").mb-4 Los recursos visuales y auditivos en mensajes creativos, son:
        
        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/icon-1-2.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Colores
              p.mb-0.text-center Uso de verdes y azules para campañas ecológicas; rojo para transmitir energía y pasión.
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/icon-2-2.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Música
              p.mb-0.text-center Relajante para productos de bienestar o épica para lanzamientos de videojuegos.
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/icon-3.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Efectos de sonido
              p.mb-0.text-center Refuerzo de acciones en videos, como el sonido de un clic o un logro desbloqueado.


          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/icon-4-2.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Voces en #[em off]
              p.mb-0.text-center Narradores confiables que explican mensajes complejos con claridad.


    .bg-full-width.bg-color-4
      .ps-4.ps-lg-5

        .row.justify-content-center.align-items-stretch

          .col-lg-6(data-aos="fade-left")
            .py-4
              p(data-aos="fade-left").my-4 Los principios claves para mensajes efectivos, son: 
              
              ol.lista-ol--cuadro(data-aos="fade-up")
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | #[b Emociones:] conectar emocionalmente con la audiencia, para generar impacto.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | #[b Simplicidad:] transmitir mensajes claros y concisos.
                li
                  .lista-ol--cuadro__vineta
                    span 3
                  | #[b Coherencia:] garantizar que todos los elementos visuales y auditivos, estén alineados con la identidad de la marca.
                li
                  .lista-ol--cuadro__vineta
                    span 4
                  | #[b Originalidad:] innovar para diferenciarse de la competencia.
              

          .col-lg-6(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema1/5.svg', style="max-width:506px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/270603" target="_blank" rel="noopener noreferrer") GómezZorrilla, J. & Sánchez Piña, D. (2022). Guía práctica de analítica digital: ROI, KPI y Métricas. Cómo medir y optimizar tu estrategia digital para potenciar tu negocio. LID Editorial España. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://open.spotify.com/intl-es/album/2bOj3eZI4kWAvQciMoO0Zw?si=X5ir58WhSUSYADWHv-VuHg" target="_blank" rel="noopener noreferrer") David Campbell. (2022). La poderosa Psicología. Spotify.


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
