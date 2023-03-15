
<template>
  <Intro></Intro>
  <OuterSection :classes="['style4', 'spotlights']">
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

export default {
  components: {
    Intro,
    OuterSection,
    InnerSection,
  },
}
</script>