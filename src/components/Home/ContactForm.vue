<template>
    <section id="three" class="wrapper style1 fade-up">
        <div class="inner">
            <h2>{{ contactTitle }}</h2>
            <p v-if="contactParagraph">{{ contactParagraph }}</p>
            <div class="split style1">
                <section>
                    <form method="post" action="#">
                        <div class="fields">
                            <div class="field half">
                                <label for="name">Nombre</label>
                                <input type="text" name="name" id="name">
                            </div>
                            <div class="field half">
                                <label for="email">Email</label>
                                <input type="text" name="email" id="email">
                            </div>
                            <div class="field">
                                <label for="message">Mensaje</label>
                                <textarea name="message" id="message" rows="5"></textarea>
                            </div>
                        </div>
                        <ul class="actions">
                            <li><a href="" class="button submit">Enviar</a></li>
                        </ul>
                    </form>
                </section>
                <section>
                    <ul class="contact">
                        <li>
                            <h3>Dirección</h3>
                            <span>
                                {{ direccionInfo }}<br>
                            </span>
                        </li>
                        <li>
                            <h3>Email</h3>
                            <a href="#">{{ email }}</a>
                        </li>
                        <li>
                            <h3>Teléfono</h3>
                            <span>{{ telefono }}</span>
                        </li>
                        <li>
                            <h3>Social</h3>
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
            contactTitle: 'Contáctame',
            contactParagraph: 'Si estás interesado en mis servicios, puedes contactarme a través del siguiente link.',
            direccionInfo: 'Villa Alemana, Región de Valparaíso.',
            email: 'joaquin.ayala.c@gmail.com',
            telefono: '+56964598686',
            twitter: '',
            instagram: '',
            github: '',
            linkedIn: ''
        }
    }
}
</script>