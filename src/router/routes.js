
const routes = [
  {
    path: '/pmb',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      autentikasi: true
    },
    children: [
      { path: '', component: () => import('pages/StudentRegistration') }
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
