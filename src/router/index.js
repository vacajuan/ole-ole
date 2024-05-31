import { createRouter, createWebHistory } from 'vue-router';

import LogIn from '../views/LogIn.vue';
import UserData from '../views/UserData.vue';
import Userpass from '../views/UserPass.vue';

// Components Data
import Checkout from '../views/Checkout.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: LogIn
  },
  {
    path: '/ole-diario-usuarios-noticias-futbol-entretenimiento',
    name: 'user-data',
    component: UserData
  },
  {
    path: '/ole-verificacion-diario-noticias-futbol-entretenimiento-socios-comunidad',
    name: 'check-phone',
    component: Checkout
  },
  {
    path: '/ole-contraseña-diario-noticias-futbol-entretenimiento-socios-comunidad',
    name: 'user-pass',
    component: Userpass
  },
  // {
  //   path: '/contacto',
  //   name: 'contacto-form',
  //   component: Contacto
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
