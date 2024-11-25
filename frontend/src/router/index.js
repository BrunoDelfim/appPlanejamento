import { createRouter, createWebHistory } from 'vue-router'
import publicRoutes from './public'
import privateRoutes from './private'
import NotFound from '@/views/errors/ErrorPage404.vue'

const routes = [
  ...publicRoutes,
  ...privateRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {

  // Verifica se o usuário está autenticado
  const isAuthenticated = false; // Substitua isso pela lógica real de autenticação

  if (!isAuthenticated && to.name !== 'Login') {
    console.log('Usuário não autenticado')
    next({ name: 'Login' })
  } else {
    console.log('Usuário autenticado')
    next()
  }

  if (to.meta.title) {
    document.title = to.meta.title
  }

})

export default router