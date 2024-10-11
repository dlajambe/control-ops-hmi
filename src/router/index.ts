import { createRouter, createWebHistory } from 'vue-router';
import ControlRoom from '@/views/ControlRoom.vue';
import Home from '@/views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/control-room',
      name: 'Control Room',
      component: ControlRoom
    }
  ]
});

export default router;
