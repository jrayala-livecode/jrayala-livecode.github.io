
<template>
  <Intro></Intro>
  <OuterSection :classes="['style2','wrapper', 'spotlights']">
    <InnerSection :image="cvImage">
        <template v-slot:title>
          Perfil profesional
        </template>
        <template v-slot:paragraph>
          Soy apasionado por crear un código limpio y eficiente y siempre me esfuerzo por mantenerme actualizado con las últimas tendencias en el desarrollo web.<br>  
        </template>
    </InnerSection>
    <InnerSection :image="techStack">
        <template v-slot:title>
          Stack Tecnológico
        </template>
        <template v-slot:paragraph>
          <ul>
            <li><b>PHP:</b> Conocimiento sólido de programación orientada a objetos y frameworks MVC como Laravel, CodeIgniter y Symfony<br>Testing con PHPUnit</li>
            <li><b>Javascript:</b> Experiencia con Vanilla JavaScript y frameworks populares como Vue.js, React.js y Node.js con Express.js <br> Testing con Jest.js</li>
            <li><b>CSS/HTML5:</b> Amplio conocimiento de diseño responsivo y estándares de accesibilidad web, CSS, SASS y frameworks visuales como Bootstrap</li>
            <li><b>REST API Development:</b> Conocimientos en desarrollo y mantenimiento de API REST, testing con Postman</li>
            <li><b>Documentación:</b> Desarrollo de documentación en todas las Web-app desarrolladas, con énfasis en legibilidad y facilidad de mantemiento e integración con otros servicios</li>
          </ul>
        </template>
    </InnerSection>
    <InnerSection>
        <template v-slot:title>
          Allahu akbar!
        </template>
        <template v-slot:paragraph>
          Sos un sorete bldo
        </template>
    </InnerSection>
    <InnerSection>
        <template v-slot:title>
          Allahu akbar!
        </template>
        <template v-slot:paragraph>
          Sos un sorete bldo
        </template>
    </InnerSection>
  </OuterSection>
</template>

<script>
import Intro from '../components/Home/IntroSection.vue'
import InnerSection from '../components/UI/InnerSection.vue'
import OuterSection from '../components/UI/OuterSection.vue';
import cvImage from '@/assets/images/MeSquared.jpg';
import techStack from '@/assets/images/techStack.jpg';

export default {
  components: {
    Intro,
    OuterSection,
    InnerSection,
  },
  data(){
    return {
      cvImage: cvImage,
      techStack: techStack
    }
  }
}
</script>