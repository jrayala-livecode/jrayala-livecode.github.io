<template>
    <section id="sidebar">
        <div class="inner">
            <nav>
                <ul>
                    <li v-for="(item, index) in  menuItems " :key="item.title">
                        <a @click="scrollToRef(item.ref, item); setActive(index);" :class="{ active: item.active }">{{
                            item.title
                            }}</a>
                    </li>
                    <li>
                        <router-link :to="'/experience'">
                            My Experience
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
</template>

<script>
export default {
    inject: ['scrollToRef'],
    props: ['menuItems'],
    emits: ['setActive'],
    methods: {
        setActive(index) {
            this.$emit('setActive', index);
        }
    }

}
</script>