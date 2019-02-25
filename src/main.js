import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import router from './router.js'

Vue.prototype.$eventBus = new Vue(); // Global Event Bus

Vue.use(VueRouter)

new Vue({
	router,
	el: '#app',
	render: h => h(App)
})
