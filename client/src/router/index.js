import Vue from "vue";
import VueRouter from "vue-router";
import Container from "../components/Container.vue";
import QuoteDetail from "../components/QuoteDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Container
  },
  {
    path: "/about/:id",
    name: "about",
    component: QuoteDetail
  }
];

const router = new VueRouter({
  mode: "history",
  //base: process.env.BASE_URL,
  routes
});

export default router;
