
<template>
  <SideBar :menuItems="menuItems" @setActive="setActive"></SideBar>
  <div id="wrapper">
    <header>
      <Intro ref="Home"></Intro>
    </header>
    <main>
      <OuterSection :classes="['style2', 'wrapper', 'spotlights']">
        <section aria-labelledby="professional-profile-heading">
          <InnerSection
            :image="cvImage"
            :imageAlt="'Professional keyboard workspace representing web development skills'"
            ref="personalData"
          >
            <template v-slot:title>
              <h2 id="professional-profile-heading">{{ professionalProfileTitle }}</h2>
            </template>
            <template v-slot:paragraph>
              <p>{{ professionalProfileDescription }}<br /></p>
            </template>
          </InnerSection>
        </section>
        <section aria-labelledby="tech-stack-heading">
          <InnerSection
            :image="techStack"
            :imageAlt="'Technology stack illustration showcasing modern web development tools and frameworks'"
            ref="techStack"
          >
            <template v-slot:title>
              <h2 id="tech-stack-heading">{{ techStackTitle }}</h2>
            </template>
            <template v-slot:paragraph>
              <ul>
                <li v-for="item in techStackItems" :key="item.title">
                  <strong>{{ item.title }}</strong> {{ item.description }}
                </li>
              </ul>
            </template>
          </InnerSection>
        </section>
        <section aria-labelledby="strengths-heading">
          <InnerSection
            :image="stillOne"
            :imageAlt="'Professional portrait representing personal strengths and expertise in web development'"
            ref="strengths"
          >
            <template v-slot:title>
              <h2 id="strengths-heading">My Strengths</h2>
            </template>
            <template v-slot:paragraph>
              <ul>
                <li v-for="item in personalStrengths" :key="item.name">
                  <strong>{{ item.name }}</strong> {{ item.description }}
                </li>
              </ul>
            </template>
          </InnerSection>
        </section>
      </OuterSection>
      <section aria-labelledby="contact-heading">
        <ContactForm ref="contactForm"> </ContactForm>
      </section>
    </main>
    <footer>
      <FooterComponent> </FooterComponent>
    </footer>
  </div>
</template>

<script>
import Intro from '../components/Home/IntroSection.vue'
import InnerSection from '../components/UI/InnerSection.vue'
import OuterSection from '../components/UI/OuterSection.vue'
import keyboard from '@/assets/images/keyboard.jpg'
import techStack from '@/assets/images/techStack.jpg'
import stillOne from '@/assets/images/StillOne.png'
import ContactForm from '../components/Home/ContactForm.vue'
import FooterComponent from '../components/Home/FooterComponent.vue'
import SideBar from '../components/SideBar.vue'
import { onMounted } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    // SEO Meta Management
    const setMetaTags = () => {
      // Update document title
      document.title = 'Joaquín Ayala - Professional Web Developer Portfolio'

      // Set or update meta tags
      const metaTags = [
        {
          name: 'description',
          content:
            'Joaquín Ayala - Professional web developer with expertise in PHP, JavaScript, Vue.js, React.js, and modern web technologies. Passionate about creating clean, efficient code and staying updated with latest web development trends.'
        },
        {
          name: 'keywords',
          content:
            'web developer, PHP, JavaScript, Vue.js, React.js, Laravel, Node.js, full stack developer, frontend developer, backend developer, portfolio'
        },
        { name: 'author', content: 'Joaquín Ayala' },
        { property: 'og:title', content: 'Joaquín Ayala - Professional Web Developer Portfolio' },
        {
          property: 'og:description',
          content:
            'Professional web developer with expertise in PHP, JavaScript, Vue.js, React.js, and modern web technologies. Passionate about creating clean, efficient code.'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://jrayala-livecode.github.io/' },
        {
          property: 'og:image',
          content: 'https://jrayala-livecode.github.io/src/assets/images/intro.png'
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Joaquín Ayala - Professional Web Developer Portfolio' },
        {
          name: 'twitter:description',
          content:
            'Professional web developer with expertise in PHP, JavaScript, Vue.js, React.js, and modern web technologies.'
        },
        {
          name: 'twitter:image',
          content: 'https://jrayala-livecode.github.io/src/assets/images/intro.png'
        },
        { name: 'robots', content: 'index, follow' }
      ]

      metaTags.forEach((tag) => {
        let element = document.querySelector(
          `meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`
        )
        if (!element) {
          element = document.createElement('meta')
          if (tag.name) element.setAttribute('name', tag.name)
          if (tag.property) element.setAttribute('property', tag.property)
          document.head.appendChild(element)
        }
        element.setAttribute('content', tag.content)
      })

      // Set canonical link
      let canonical = document.querySelector('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
      }
      canonical.setAttribute('href', 'https://jrayala-livecode.github.io/')
    }

    onMounted(() => {
      setMetaTags()
    })

    return {}
  },
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
        { ref: 'Home', title: 'Home' },
        { ref: 'personalData', title: 'Personal Data' },
        { ref: 'techStack', title: 'Tech Stack' },
        { ref: 'strengths', title: 'My Strengths' },
        { ref: 'contactForm', title: 'Contact' }
      ],
      cvImage: keyboard,
      techStack: techStack,
      professionalProfileTitle: 'Professional Profile',
      professionalProfileDescription:
        "I'm Joaquín Ayala, a web developer passionate about creating clean and efficient code. I always strive to stay updated with the latest trends in web development.",
      techStackTitle: 'Tech Stack',
      techStackItems: [
        {
          title: 'PHP:',
          description:
            'Solid knowledge of object-oriented programming and MVC frameworks like Laravel, CodeIgniter, and Symfony. Testing with PHPUnit. Experienced in building modern solutions for internal systems using Laravel as the backend core.'
        },
        {
          title: 'JavaScript:',
          description:
            'Extensive experience with Vanilla JavaScript and modern frameworks including Vue.js (with Vue 3), React.js, and Node.js with Express.js. Testing experience with Jest.js. Focused on usability and maintainability in frontend development.'
        },
        {
          title: 'Vue Ecosystem:',
          description:
            'Experienced with Vue 3, Vuetify, and Nuxt. Built production-level apps with JWT authentication, IPFS file storage via Piñata, and full SEO fallback planning using Nuxt when required.'
        },
        {
          title: 'CSS/HTML5:',
          description:
            'Strong knowledge of responsive design, web accessibility standards, semantic HTML5, CSS3, and SASS. Comfortable using frameworks like Bootstrap and utility-first CSS libraries when needed.'
        },
        {
          title: 'REST API Development:',
          description:
            'Design and implementation of scalable REST APIs. Proficient in FastAPI and Laravel-based APIs. Experienced with API integration, JWT-based authentication, and thorough testing via Postman.'
        },
        {
          title: 'Python:',
          description:
            'Used extensively for backend APIs, OCR integration, and AI-based automation. Experience building internal systems and tools to streamline workflows and classification tasks using Python.'
        },
        {
          title: 'Electron.js:',
          description:
            'Built desktop applications with Electron.js, focusing on performance, UI consistency, and maintainability. Integrated with Microsoft ecosystem due to internal infrastructure constraints.'
        },
        {
          title: 'Database Technologies:',
          description:
            'Proficient in MySQL and MSSQL. Experienced in writing optimized queries, creating stored procedures, and applying clean coding practices for database logic. Familiar with data modeling and normalization.'
        },
        {
          title: 'Documentation & Testing:',
          description:
            'Creates well-structured, accessible documentation for all projects, tailored for future maintenance and service integration. Adaptive to any documentation tools or styles. Promotes and implements automated testing strategies.'
        },
        {
          title: 'Infrastructure & DevOps:',
          description:
            'Working with Azure DevOps Repos for code collaboration in a restricted Microsoft-only environment. Focused on building streamlined workflows despite limitations in external server usage.'
        },
        {
          title: 'AI & OCR Integration:',
          description:
            'Built applications that integrate OCR and AI models for item classification, improving speed and accuracy in internal processes. Knowledgeable in selecting appropriate models and tuning for internal automation tasks.'
        },
        {
          title: 'WebAssembly (WASM):',
          description:
            'Understanding of WebAssembly for benchmarking and performance-sensitive browser-based tasks. Exploring its application in multimedia-heavy or AI-enhanced interfaces.'
        },
        {
          title: 'Audio/Visual Applications:',
          description:
            'Interest and ongoing exploration in AI-enhanced audio/video tools. Working on personal aesthetic-focused software projects leveraging audio and visual signal processing.'
        }
      ],
      stillOne: stillOne,
      personalStrengths: [
        {
          name: 'Programming Languages',
          description:
            'I have experience in various languages, including Python, JavaScript, and Java.'
        },
        {
          name: 'Web Development',
          description:
            "I'm skilled in web application development using HTML, CSS, and JavaScript. I also have experience with frameworks like React and Vue."
        },
        {
          name: 'Databases',
          description:
            'I have worked with SQL and NoSQL databases like MySQL and MongoDB, and I know how to design and query efficient databases.'
        },
        {
          name: 'Mobile App Development',
          description:
            'I have created mobile applications for iOS and Android using React Native, which has given me a comprehensive understanding of building and debugging mobile apps.'
        },
        {
          name: 'Communication Skills',
          description:
            'I am capable of communicating ideas and technical issues clearly and concisely to both technical and non-technical teams.'
        }
      ]
    }
  },
  mounted() {
    // Add structured data for SEO
    this.addStructuredData()
  },
  beforeUnmount() {
    // Clean up structured data when component is destroyed
    this.removeStructuredData()
  },
  methods: {
    addStructuredData() {
      // Person schema
      const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Joaquín Ayala',
        jobTitle: 'Web Developer',
        description:
          'Professional web developer with expertise in PHP, JavaScript, Vue.js, React.js, and modern web technologies. Passionate about creating clean, efficient code and staying updated with latest web development trends.',
        url: 'https://jrayala-livecode.github.io/',
        sameAs: ['https://github.com/jrayala-livecode'],
        knowsAbout: [
          'PHP',
          'JavaScript',
          'Vue.js',
          'React.js',
          'Laravel',
          'Node.js',
          'HTML5',
          'CSS3',
          'REST API Development',
          'Web Development',
          'Frontend Development',
          'Backend Development'
        ],
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Web Developer',
          occupationLocation: {
            '@type': 'Country',
            name: 'Global'
          },
          skills:
            'PHP, JavaScript, Vue.js, React.js, Laravel, CodeIgniter, Symfony, Node.js, Express.js, HTML5, CSS3, SASS, Bootstrap, REST API Development, PHPUnit, Jest.js, Postman'
        }
      }

      // Website schema
      const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Joaquín Ayala Portfolio',
        url: 'https://jrayala-livecode.github.io/',
        author: {
          '@type': 'Person',
          name: 'Joaquín Ayala'
        },
        description:
          'Professional web developer portfolio showcasing skills in PHP, JavaScript, Vue.js, React.js, and modern web technologies',
        inLanguage: 'en'
      }

      // Add Person schema
      const personScript = document.createElement('script')
      personScript.type = 'application/ld+json'
      personScript.id = 'structured-data-person'
      personScript.textContent = JSON.stringify(personSchema)
      document.head.appendChild(personScript)

      // Add Website schema
      const websiteScript = document.createElement('script')
      websiteScript.type = 'application/ld+json'
      websiteScript.id = 'structured-data-website'
      websiteScript.textContent = JSON.stringify(websiteSchema)
      document.head.appendChild(websiteScript)
    },
    removeStructuredData() {
      const personScript = document.getElementById('structured-data-person')
      if (personScript) {
        document.head.removeChild(personScript)
      }

      const websiteScript = document.getElementById('structured-data-website')
      if (websiteScript) {
        document.head.removeChild(websiteScript)
      }
    },
    scrollToRef(ref) {
      this.$refs[ref].$el.scrollIntoView({ behavior: 'smooth', block: 'end' })
    },
    setActive(index) {
      console.log('Setting active item to index:', index)

      this.menuItems.forEach((element) => {
        element.active = false
      })

      this.menuItems[index].active = true
    }
  },
  provide() {
    return {
      scrollToRef: this.scrollToRef
    }
  }
}
</script>