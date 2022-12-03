import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Chat from '@/views/Chat.vue'
const About = { template: '<h1>About</h1>' }

const routes = [
  { path: '/', name: 'home',component: Home },
  { path: '/chat', name: 'chat', component: Chat },
  { path: '/about', name: 'about', component: About}
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
