<template>
    <GenericHeader></GenericHeader>


    <GenericWrapper>
        <GenericSection></GenericSection>
    </GenericWrapper>
    <FooterComponent></FooterComponent>
</template>

<script>
import FooterComponent from '../components/Home/FooterComponent.vue'
import GenericWrapper from '../components/Generic/GenericWrapper.vue'
import GenericHeader from '../components/Generic/GenericHeader.vue';
import GenericSection from '../components/Generic/GenericSection.vue';

export default {
    components: {
        GenericHeader, 
        GenericSection,
        GenericWrapper,
        FooterComponent,
    }
}
</script>