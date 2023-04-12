import { createStore } from 'vuex'
import menu from './modules/menu/menu.js'

const store = createStore({
    modules: {
        menu: menu
    }
})

export default store;