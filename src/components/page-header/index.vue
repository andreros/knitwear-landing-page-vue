<template>
	<header class="page-header">
		<div class="page-header__background"></div>
		<nav class="page-header__nav">
			<div>
				<router-link to="/" class="page-header__logo">{{brandName}}</router-link>
			</div>
			<div class="page-header__nav_links_wrapper">
				<router-link to="/about" class="page-header__nav_link">About</router-link>
				<router-link to="/contact" class="page-header__nav_link">Contact</router-link>
				<router-link to="/shop" class="page-header__nav_link button">Shop</router-link>
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
	}
};
</script>

<style lang="scss">
@import "../../assets/_variables.scss";
@import "index.scss";
</style>
