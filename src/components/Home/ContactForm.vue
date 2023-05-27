<template>
    <section id="three" class="wrapper style1 fade-up">
        <div class="inner">
            <h2>{{ contactTitle }}</h2>
            <p v-if="contactParagraph">{{ contactParagraph }}</p>
            <div class="split style1">
                <section>
                    <form method="post" action="https://forms.un-static.com/forms/b1f884c55105f5c2f4820b90af129f3674533054">
                        <div class="fields">
                            <div class="field half">
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name">
                            </div>
                            <div class="field half">
                                <label for="email">Email</label>
                                <input type="text" name="email" id="email">
                            </div>
                            <div class="field">
                                <label for="message">Message</label>
                                <textarea name="message" id="message" rows="5"></textarea>
                            </div>
                        </div>
                        <ul class="actions">
                            <li><button type="submit" class="button submit">Send</button></li>
                        </ul>
                    </form>
                </section>
                <section>
                    <ul class="contact">
                        <li>
                            <h3>Address</h3>
                            <span>
                                {{ direccionInfo }}<br>
                            </span>
                        </li>
                        <li>
                            <h3>Email</h3>
                            <a href="#">{{ email }}</a>
                        </li>
                        <li>
                            <h3>Phone</h3>
                            <span>{{ telefono }}</span>
                        </li>
                        <li>
                            <h3>Socials</h3>
                            <ul class="icons">
                                <!-- <li><a href="{{ twitter }}" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li> -->
                                <!-- <li><a href="{{  }}" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a>
                                </li> -->
                                <li><a href="#" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
                                <!-- <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a>
                                </li> -->
                                <li><a href="" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            "contactTitle": "Contact Me",
            "contactParagraph": "If you're interested in my services, you can contact me through the following link.",
            "direccionInfo": "Villa Alemana, Valparaíso Region.",
            "email": "joaquin.ayala.c@gmail.com",
            "telefono": "+56964598686",
            "twitter": "",
            "instagram": "",
            "github": "",
            "linkedIn": ""
        }
    }
}
</script>