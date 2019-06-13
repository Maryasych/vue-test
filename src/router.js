import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/comments',
      name: 'comments',
      component: () => import('./views/Comments.vue'),
    },
    {
      path: '/comment/:id',
      name: 'comment',
      component: () => import('./views/Comment.vue'),
    },
  ],
});
