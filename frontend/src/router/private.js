import administracao from './administracao/index.js';

export default [
    {
        path: '/',
        redirect: '/dashboard',
        children: [
            {
                name: 'dashboard',
                path: '/dashboard',
                component: () => import('@/views/DashboardPage.vue'),
            },
            ...administracao,
        ]
    }
]