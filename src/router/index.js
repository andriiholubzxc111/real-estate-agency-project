import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PurchaseOptions from '@/views/PurchaseOptions.vue';
import SellView from '@/views/SellView.vue';

const routes = 
[
  { path: '/', component: HomeView },
  { path: '/buy', component: PurchaseOptions },
  { path: '/sell', component: SellView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
