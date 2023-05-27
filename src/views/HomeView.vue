
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
          My Strengths
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
      "menuItems": [
        { "ref": "Home", "title": "Home" },
        { "ref": "personalData", "title": "Personal Data" },
        { "ref": "techStack", "title": "Tech Stack" },
        { "ref": "strengths", "title": "My Strengths" },
        { "ref": "contactForm", "title": "Contact" }
      ],
      "cvImage": cvImage,
      "techStack": techStack,
      "professionalProfileTitle": "Professional Profile",
      "professionalProfileDescription": "I'm Joaquín Ayala, a web developer passionate about creating clean and efficient code. I always strive to stay updated with the latest trends in web development.",
      "techStackTitle": "Tech Stack",
      "techStackItems": [
        {
          "title": "PHP:",
          "description": "Solid knowledge of object-oriented programming and MVC frameworks like Laravel, CodeIgniter, and Symfony. Testing with PHPUnit."
        },
        {
          "title": "Javascript:",
          "description": "Experience with Vanilla JavaScript and popular frameworks like Vue.js, React.js, and Node.js with Express.js. Testing with Jest.js."
        },
        {
          "title": "CSS/HTML5:",
          "description": "Extensive knowledge of responsive design and web accessibility standards, CSS, SASS, and visual frameworks like Bootstrap."
        },
        {
          "title": "REST API Development:",
          "description": "Knowledge in developing and maintaining REST APIs, testing with Postman."
        },
        {
          "title": "Documentation, testing:",
          "description": "Development of documentation for all developed web apps, with a focus on readability and ease of maintenance and integration with other services, will adapt to any documentation format and tools."
        }
      ],
      "stillOne": stillOne,
      "personalStrengths": [
        {
          "name": "Programming Languages",
          "description": "I have experience in various languages, including Python, JavaScript, and Java."
        },
        {
          "name": "Web Development",
          "description": "I'm skilled in web application development using HTML, CSS, and JavaScript. I also have experience with frameworks like React and Vue."
        },
        {
          "name": "Databases",
          "description": "I have worked with SQL and NoSQL databases like MySQL and MongoDB, and I know how to design and query efficient databases."
        },
        {
          "name": "Mobile App Development",
          "description": "I have created mobile applications for iOS and Android using React Native, which has given me a comprehensive understanding of building and debugging mobile apps."
        },
        {
          "name": "Communication Skills",
          "description": "I am capable of communicating ideas and technical issues clearly and concisely to both technical and non-technical teams."
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