import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@/sass/overrides.sass";

Vue.use(Vuetify);

const theme = {
  primary: "#D4CCC4",
  secondary: "#005450",
  accent: "#49AB94",
  info: "#005450",
  success: "#A8C47C",
  error: "#D54859",
  warning: "#FFC776",
};

export default new Vuetify({
  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
  },
});