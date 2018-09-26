import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import colors from "vuetify/es5/util/colors";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  theme: {
    primary: colors.teal.accent3,
    secondary: colors.teal.accent1,
    accent: colors.teal.accent4,
    error: colors.red.accent2,
    warning: colors.yellow.lighten2,
    info: colors.blue.base,
    success: colors.lime.accent4
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
