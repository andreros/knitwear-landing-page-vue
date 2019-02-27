<template>
	<header class="page-header">
		<div class="page-header__background"></div>
		<nav class="page-header__nav">
			<div>
				<router-link to="/" class="page-header__logo">{{brandName}}</router-link>
			</div>
			<a ref="menu" class="page-header__nav_menu" @click="toggleMenu">
				<i class="fas fa-bars"></i>
			</a>
			<div ref="linksContainer" class="page-header__nav_links_container">
				<div class="page-header__nav_link_wrapper" @click="toggleMenu">
					<router-link to="/" class="page-header__nav_link">Home</router-link>
				</div>
				<div class="page-header__nav_link_wrapper" @click="toggleMenu">
					<router-link to="/about" class="page-header__nav_link">About</router-link>
				</div>
				<div class="page-header__nav_link_wrapper" @click="toggleMenu">
					<router-link to="/contact" class="page-header__nav_link">Contact</router-link>
				</div>
				<div class="page-header__nav_link_wrapper" @click="toggleMenu">
					<router-link to="/shop" class="page-header__nav_link button">Shop</router-link>
				</div>
			</div>
		</nav>
		<div class="page-header__copy">
			<h1>{{punchline}}</h1>
		</div>
		<div class="page-header__image"></div>
	</header>
</template>

<script>
export default {
	name: "PageHeader",
	props: {
		brandName: {
			type: String,
			default: ''
		},
		punchline: {
			type: String,
			default: ''
		}
	},
	methods: {
		toggleMenu() {
			// make sure this only happens in mobile situations
			if (window.innerWidth > 700) { return; }
			if (!this.$refs.menu) { return; }

			if (this.$refs.menu.style.display !== 'none') {
				this.$refs.menu.style.display = 'none';
				this.$refs.linksContainer.style.display = 'flex';
			} else {
				this.$refs.menu.style.display = 'flex';
				this.$refs.linksContainer.style.display = 'none';
			}
		}
	}
};
</script>

<style lang="scss">
@import "../../assets/_variables.scss";
@import "index.scss";
</style>
