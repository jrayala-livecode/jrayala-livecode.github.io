<template>
    <section id="intro" class="wrapper style1 fullscreen fade-up">
        <div class="intro-background">
        </div>
        <div class="inner">
            <h1>{{ title }}</h1>
            <p>{{ shortDescription }}</p>
            <ul class="actions">
                <li><a class="button scrolly" @click="scrollToRef(contactForm);">{{ actionText }}</a></li>
            </ul>
        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
            "title": "Joaquín Ayala, Web Developer",
            "shortDescription": "Experience in PHP, Javascript, Vue.js, Laravel, CSS/HTML5",
            "action": "",
            "actionText": "Contact Me",
            contactForm: "contactForm"
        }
    },
    emits: ['setActive'],
    inject: ['scrollToRef']
}
</script>

<style scoped>
.intro-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    opacity: 0.6;
    background-repeat: no-repeat;
    background-image: url('../../assets/images/intro.png');
    z-index: -1;
}

#intro {
    background-color: transparent;
}
</style>