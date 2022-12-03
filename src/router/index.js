import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Chat from '@/views/Chat.vue'

const routes = [
  { path: '/', name: 'home',component: Home },
  { path: '/chat', name: 'chat', component: Chat },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
