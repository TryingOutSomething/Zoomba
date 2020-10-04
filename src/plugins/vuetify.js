import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const themeColours = {
  primary: '#839EAF',
  error: '#ff3333'
}

export default new Vuetify({
  theme: {
    themes: {
      light: themeColours,
      dark: themeColours
    },

    icons: {
      iconfont: 'md'
    }
  }
})
