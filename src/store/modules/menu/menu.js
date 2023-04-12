const menu = {
    state() {
        return {
            menuData: [
                {
                  menuItem : 'Inicio',
                  ref: 'start'
                },
                {
                  menuItem : 'Sobre mí',
                  ref: 'datosPersonales'
                },
                {
                  menuItem: 'Contacto',
                  ref: 'contactForm'
                }
            ]
        }
    },
    getters:{
        menuData(state){
            return state.menuData;
        },
    }
}

export default menu;