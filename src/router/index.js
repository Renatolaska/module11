import { createRouter, createWebHashHistory } from 'vue-router'
import RandomQuotes from '../views/RandomQuotes.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactPage from '../views/ContactPage.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name: 'RandomQuotes', component: RandomQuotes },
  { path: '/about', name: 'AboutPage', component: AboutPage },
  { path: '/contact', name: 'ContactPage', component: ContactPage },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
