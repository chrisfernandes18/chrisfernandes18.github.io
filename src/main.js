import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'
import Photos from '@/views/Photos.vue'
import Contact from '@/views/Contact.vue'
import Blog from '@/views/Blog.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
    },
    {
      path: '/photos',
      name: 'Photos',
      component: Photos,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
    },
  ]
})

createApp(App)
.use(router)
.mount('#app')
