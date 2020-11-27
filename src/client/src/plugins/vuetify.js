import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#7c4dff',
        secondary: '#ff6e40',
        accent: '#651fff',
        error: '#ff3d00',
        info: '#2196f3',
        success: '#4caf50',
        warning: '#ffc107',
      },
    },
  },
});
