<template>
    <section id="one" :class="classes" class="wrapper">
        <slot></slot>
    </section>
</template>

<script>
export default {
    props: {
        classes: Array
    }
}
</script>