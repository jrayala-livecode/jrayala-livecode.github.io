<template>
    <section>
        <a v-if="imagePath" :href="{ imageLink }" class="image">
            <img :src="require(imagePath)" alt="" data-position="center center" />
        </a>
        <div class="content">
            <div class="inner">
                <h2><slot name="title"></slot></h2>
                <p><slot name="paragraph"></slot></p>
                <ul class="actions">
                    <li v-for="link in links" :key="link.id">
                        <a :href="link.ref" class="button">{{ link.title }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name:'InnerSection',
    props: {
        imagePath: String,
        imageLink: String,
        links: Array
    }
}
</script>