export default [
    {
        name: 'Login',
        path: '/login',
        meta: { layout: 'login', title: 'Login' },
        component: () => import('@/views/administracao/autenticacao/LoginPage.vue'),
    },
    {
        name: '404',
        meta: { layout: 'login', title: 'Erro 404' },
        component: () => import('@/views/errors/ErrorPage404.vue'),
    },
    {
        name: '403',
        meta: { layout: 'login', title: 'Erro 403' },
        component: () => import('@/views/errors/ErrorPage403.vue'),
    },
    {
        name: '500',
        meta: { layout: 'login', title: 'Erro 500' },
        component: () => import('@/views/errors/ErrorPage500.vue'),
    }
]