import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import BootstrapVue from "bootstrap-vue";
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);
require("./admin");

import store from "./store";

axios.defaults.headers.get["Content-Type"] = "application/json";
axios.defaults.headers.get["Cache-Control"] = "no-cache";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);

if (navigator.languages[1] == "es") {
    store.commit("updateLanguage", "es");
} else {
    store.commit("updateLanguage", "en");
}

/*
import PartialHeader from "./layouts/PartialHeader.vue";
import PartialHome from "./layouts/PartialHome.vue";
import PortfolioItem from "./components/Modals/PortfolioItem.vue";
import EvidenceCarousel from "@/components/EvidenceCarousel.vue";
*/

Vue.component("app", require("./components/App.vue").default);
Vue.component("blogs", require("./components/Blogs.vue").default);
Vue.component("blog", require("./components/Blog.vue").default);
Vue.component("partial-header", require("./layouts/PartialHeader.vue").default);
Vue.component("header-blog", require("./layouts/HeaderBlog.vue").default);
Vue.component("partial-home", require("./layouts/PartialHome.vue").default);
Vue.component("home", require("./components/Home.vue").default);
Vue.component("about", require("./components/About.vue").default);
Vue.component("portfolio", require("./components/Portfolio.vue").default);
Vue.component("contact", require("./components/Contact.vue").default);

Vue.component(
    "portfolio-item",
    require("./components/Modals/PortfolioItem.vue").default
);
Vue.component(
    "evidence-carousel",
    require("./components/EvidenceCarousel.vue").default
);

new Vue({
    el: "#app",
    store
});
