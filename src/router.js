import { createWebHistory, createRouter } from "vue-router"

const routes = [
	{
		path: '/',
		alias: '/tutorials',
		name: 'tutorials-list',
		component: () => import('./components/ListTutorial.vue')
	},
	{
		path: '/add',
		name: 'add-tutorial',
		component: () => import('./components/AddTutorial.vue')
	},
	{
		path: '/tutorials/id',
		name: 'edit-tutorial',
		component: () => import('./components/EditTutorial.vue')
	}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router