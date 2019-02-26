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
	routes
});

export default router;
