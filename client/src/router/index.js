import Vue from 'vue'
import VueRouter from 'vue-router'
import CarCards from '../views/CarCards.vue'
import Details from '../views/Details.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CarCards',
    component: CarCards,
  },
  {
    path: '/details/:id',
    name: 'Details',
    props: true,
    component: Details,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
