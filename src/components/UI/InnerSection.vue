<template>
    <section>
        <a v-if="image" :href="imageHyperLink" class="image">
            <img :src="image" alt="" data-position="center center" style=""/>
        </a>
        <div class="content">
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
        imageLink: String
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
    img{
        height: 100%;
        width: 100%;
    }

    :slotted(ul) { 
        list-style-type: none;
    }

    :slotted(ul > li) { 
        margin-bottom: 0.4em;
    }
</style>