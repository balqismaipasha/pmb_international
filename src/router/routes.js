
const routes = [
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout'),
    children: [
      {
        path: 'auth/login',
        component: () => import('pages/users/LoginPage')
      },
      {
        path: 'auth/registrasi',
        component: () => import('pages/users/RegisterPage')
      },
      {
        path: 'auth/forgotpassword',
        component: () => import('pages/users/ForgotPassword')
      },
      {
        path: 'auth/passwordreset',
        component: () => import('pages/users/ResetPassword')
      },
      {
        path: 'auth/infoverification',
        component: () => import('pages/users/CheckEmailVerif')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
