<template>
    <div id="wrapper">

        <header id="header">
            <router-link :to="'/'" class="title">Joaquín Ayala</router-link>
            <nav>
            <ul>
                <li v-for="(route, index) in router.options.routes" :key="index" :class="{ active: location.path === route.path}">
                    <router-link :to="route.path">
                        {{ route.name }}
                    </router-link>
                </li>
            </ul>
        </nav>
	</header>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const location = useRoute();
const router = useRouter();

console.log(location.path);
console.log(router.path);

</script>