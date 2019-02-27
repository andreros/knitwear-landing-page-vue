import VueRouter from 'vue-router'

// pages to be routed
import Home from "./pages/home/index.vue";
import About from "./pages/about/index.vue";
import Contact from "./pages/contact/index.vue";

const routes = [
	{ path: '/', component: Home },
	{ path: '/about', component: About },
	{ path: '/contact', component: Contact },
	{ path: '/shop', component: About },
	{ path: '*', component: Home, redirect: '/' }
];

const router = new VueRouter({
	mode: 'hash',
	base: __dirname,
	routes,
	scrollBehavior (to, from, savedPosition) {
		switch (to.hash) {
			case '#story':
				if (window.innerWidth <= 700) { return { x: 0, y: 650 } }
				return { x: 0, y: 700 }
			break;
			case '#mission':
				if (window.innerWidth <= 700) { return { x: 0, y: 1700 } }
				return { x: 0, y: 1300 }
			break;
			case '#promise':
				if (window.innerWidth <= 700) { return { x: 0, y: 2800 } }
			return { x: 0, y: 1900 }
			break;
			default:
				return { x: 0, y: 0 }
			break;
		}
	}
});

export default router;
