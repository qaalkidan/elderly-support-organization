import { createRouter, createWebHistory } from 'vue-router';
import PublicLayout from '../layouts/PublicLayout.vue';
import HomeView from '../views/public/HomeView.vue';

const routes = [
  {
    path: '/',
    component: PublicLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/public/AboutView.vue')
      },
      {
        path: 'services',
        name: 'services',
        component: () => import('../views/public/ServicesView.vue')
      },
      {
        path: 'services/:id',
        name: 'service-detail',
        component: () => import('../views/public/ServiceDetailView.vue')
      },
      {
        path: 'news-events',
        name: 'news-events',
        component: () => import('../views/public/NewsEventsView.vue')
      },
      {
        path: 'news/:id',
        name: 'news-detail',
        component: () => import('../views/public/NewsDetailView.vue')
      },
      {
        path: 'gallery',
        name: 'gallery',
        component: () => import('../views/public/GalleryView.vue')
      },
      {
        path: 'get-involved/:section?',
        name: 'get-involved',
        component: () => import('../views/public/GetInvolvedView.vue')
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('../views/public/ContactView.vue')
      },
      {
        path: 'donate',
        name: 'donate',
        component: () => import('../views/public/DonateView.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
