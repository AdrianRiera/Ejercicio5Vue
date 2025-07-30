import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/ClientesView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio,
      props: { titulo: 'Lista de Clientes' },
    },
    {
      path: '/agregar-cliente',
      name: 'agregar-cliente',
      component: () => import('../views/NuevoClienteView.vue'),
      props: { titulo: 'Añadir Cliente' },
    },
  ],
})

export default router
