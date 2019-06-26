/*

Vue.component("blogs", require("./components/Blogs.vue").default);
Vue.component("", require("./layouts/PartialHome.vue").default);

*/
import PartialHome from './layouts/PartialHome.vue';
import Blogs from './components/Blogs.vue';

const routes = [{
    path: '/',
    component: PartialHome
}];

export default routes;
