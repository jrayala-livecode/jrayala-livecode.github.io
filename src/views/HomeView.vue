
<template>
  <SideBar :menuItems="menuItems" @setActive="setActive"></SideBar>
  <div id="wrapper">
    <Intro ref="Inicio"></Intro>
    <OuterSection :classes="['style2', 'wrapper', 'spotlights']">
      <InnerSection :image="cvImage" ref="datosPersonales">
        <template v-slot:title>
          {{ professionalProfileTitle }}
        </template>
        <template v-slot:paragraph>
          {{ professionalProfileDescription }}<br>
        </template>
      </InnerSection>
      <InnerSection :image="techStack" ref="techStack">
        <template v-slot:title>
          {{ techStackTitle }}
        </template>
        <template v-slot:paragraph>
          <ul>
            <li v-for="item in techStackItems" :key="item.title">
              <b>{{ item.title }}</b> {{ item.description }}
            </li>
          </ul>
        </template>
      </InnerSection>
      <InnerSection :image="stillOne" ref="misFortalezas">
        <template v-slot:title>
          Mis fortalezas
        </template>
        <template v-slot:paragraph>
          <ul>
            <li v-for="item in personalStrengths" :key="item.name">
              <b>{{ item.name }}</b> {{ item.description }}
            </li>
          </ul>
        </template>
      </InnerSection>

    </OuterSection>
    <ContactForm ref="contactForm">

    </ContactForm>
    <FooterComponent>

    </FooterComponent>
  </div>
</template>

<script>
import Intro from '../components/Home/IntroSection.vue'
import InnerSection from '../components/UI/InnerSection.vue'
import OuterSection from '../components/UI/OuterSection.vue';
import cvImage from '@/assets/images/MeSquared.jpg';
import techStack from '@/assets/images/techStack.jpg';
import stillOne from '@/assets/images/StillOne.png';
import ContactForm from '../components/Home/ContactForm.vue';
import FooterComponent from '../components/Home/FooterComponent.vue';
import SideBar from '../components/SideBar.vue';

export default {
  components: {
    Intro,
    OuterSection,
    InnerSection,
    ContactForm,
    FooterComponent,
    SideBar
  },
  data() {
    return {
      menuItems: [
        { ref: 'Inicio', title: 'Inicio' },
        { ref: 'datosPersonales', title: 'Datos Personales' },
        { ref: 'techStack', title: 'Stack tecnológico' },
        { ref: 'misFortalezas', title: 'Mis Fortalezas' },
        { ref: 'contactForm', title: 'Contacto' }
      ],
      cvImage: cvImage,
      techStack: techStack,
      professionalProfileTitle: 'Perfil profesional',
      professionalProfileDescription: "Soy Joaquín Ayala, desarrollador web apasionado por crear un código limpio y eficiente y siempre me esfuerzo por mantenerme actualizado con las últimas tendencias en el desarrollo web.",
      techStackTitle: "Stack Tecnológico",
      techStackItems: [
        {
          title: 'PHP:',
          description: ' Conocimiento sólido de programación orientada a objetos y frameworks MVC como Laravel, CodeIgniter y Symfony<br>Testing con PHPUnit'
        },
        {
          title: 'Javascript:',
          description: ' Experiencia con Vanilla JavaScript y frameworks populares como Vue.js, React.js y Node.js con Express.js <br> Testing con Jest.js'
        },
        {
          title: "CSS/HTML5:",
          description: " Amplio conocimiento de diseño responsivo y estándares de accesibilidad web, CSS, SASS y frameworks visuales como Bootstrap"
        },
        {
          title: "REST API Development:",
          description: " Conocimientos en desarrollo y mantenimiento de API REST, testing con Postman"
        },
        {
          title: "Documentación, testing:",
          description: " Desarrollo de documentación en todas las Web-app desarrolladas, con énfasis en legibilidad y facilidad de mantemiento e integración con otros servicios"
        }
      ],
      stillOne: stillOne,
      personalStrengths: [
        {
          name: "Lenguajes de programación",
          description: "Tengo experiencia en varios lenguajes, incluyendo Python, JavaScript, y Java."
        },
        {
          name: "Desarrollo web",
          description: "Soy hábil en el desarrollo de aplicaciones web con HTML, CSS, y JavaScript. También tengo experiencia con frameworks como React y Vue."
        },
        {
          name: "Bases de datos",
          description: "He trabajado con bases de datos SQL y NoSQL, como MySQL y MongoDB, y sé cómo diseñar y consultar bases de datos eficientes."
        },
        {
          name: "Desarrollo de aplicaciones móviles",
          description: "He creado aplicaciones móviles para iOS y Android usando React Native, lo que me ha dado una comprensión completa de cómo construir y depurar aplicaciones móviles."
        },
        {
          name: "Habilidades de comunicación",
          description: "Soy capaz de comunicar ideas y problemas técnicos de manera clara y concisa tanto a equipos técnicos como no técnicos."
        }
      ]
    }
  },
  methods: {
    scrollToRef(ref) {
      this.$refs[ref].$el.scrollIntoView({ behavior: "smooth", block: "end" })
    },
    setActive(index) {
      console.log('triggered');
      this.menuItems.forEach(element => {
        element.active = false
      });

      this.menuItems[index].active = true;
    }
  },
  provide() {
    return {
      'scrollToRef': this.scrollToRef
    }
  }
}
</script>