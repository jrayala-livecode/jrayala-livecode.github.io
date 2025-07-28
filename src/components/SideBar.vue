<template>
    <section id="sidebar">
        <div class="inner">
            <nav>
                <ul>
                    <li v-for="(item, index) in  menuItems " :key="item.title" @click="scrollToRef(item.ref, item); setActive(index);" :class="{ active: item.active }">
                        <a>{{ item.title }}</a>
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
        setActive(ref) {
            this.$emit('setActive', ref);
            console.log('Active item set to:', ref);
        }
    }

}
</script>