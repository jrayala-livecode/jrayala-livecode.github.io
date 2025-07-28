<template>
    <section class="grid-container">
        <div class="image-container" v-if="image">
            <a :href="imageHyperLink" class="image">
                <img :src="image" :alt="imageAlt || ''" data-position="center center"/>
            </a>
        </div>
        <div class="content" :class="{ 'full-width': !image }">
            <div class="inner">
                <h2><slot name="title"></slot></h2>
                <p><slot name="paragraph"></slot></p>
                <ul class="actions" v-if="links">
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
        image: String,
        links: Array,
        imageLink: String,
        imageAlt: String
    },
    computed: {
        backgroundImage() {
            return {
                backgroundImage: "url('"+this.image+"')",
                backgroundPosition : 'center center',
            }
        },
        imageHyperLink(){
            console.log(this.imageLink)
            if(!this.imageLink){
                return '#';
            }
            return this.imageLink;
        }
    }
}
</script>

<style scoped>
    .grid-container {
        display: grid;
        grid-template-columns: 3fr 9fr;
        gap: 2rem;
        align-items: start;
        min-height: 400px;
    }

    .image-container {
        grid-column: 1;
        height: 100%;
        min-height: 300px;
    }

    .image {
        display: block;
        width: 100%;
        height: 100%;
        min-height: 300px;
        overflow: hidden;
        border-radius: 8px;
    }

    .image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 8px;
    }

    .content {
        grid-column: 2;
        display: flex;
        align-items: center;
        height: 100%;
        padding: 1rem;
    }

    .content.full-width {
        grid-column: 1 / -1;
    }

    .inner {
        width: 100%;
    }

    .inner h2 {
        margin-bottom: 1rem;
        font-size: 1.75rem;
        line-height: 1.3;
    }

    .inner p {
        margin-bottom: 1.5rem;
        line-height: 1.6;
    }

    :slotted(ul) { 
        list-style-type: none;
        padding-left: 0;
    }

    :slotted(ul > li) { 
        margin-bottom: 0.4em;
        line-height: 1.5;
    }

    .actions {
        margin-top: 1.5rem;
    }

    /* Responsive design */
    @media (max-width: 768px) {
        .grid-container {
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        .image-container {
            grid-column: 1;
            min-height: 200px;
        }

        .content {
            grid-column: 1;
            padding: 0.5rem;
        }

        .content.full-width {
            grid-column: 1;
        }
    }

    @media (max-width: 480px) {
        .grid-container {
            gap: 0.5rem;
        }

        .image-container {
            min-height: 150px;
        }

        .inner h2 {
            font-size: 1.5rem;
        }
    }
</style>