<template>
	<footer class="page-footer">
		<div class="page-footer__links_container">
			<div class="page-footer__links">
				<p>Gallery</p>
				<router-link to="/gallery">Yarns</router-link>
				<router-link to="/gallery">Hats</router-link>
				<router-link to="/gallery">Scarves</router-link>
				<router-link to="/gallery">Stockists</router-link>
			</div>
			<div class="page-footer__links">
				<p><router-link to="/about">About Us</router-link></p>
				<router-link to="/about#story">Story</router-link>
				<router-link to="/about#mission">Mission</router-link>
				<router-link to="/about#promise">Promise</router-link>
				<router-link to="/contact">Contact</router-link>
			</div>
		</div>
		<div class="page-footer__newsletter">
			<p>{{punchline}}</p>
			<div class="page-footer__email_container">
				<form>
					<input type="email" placeholder="youremail@gmail.com">
					<a class="button">Sign&nbsp;Up</a>
				</form>
			</div>
		</div>
		<div class="page-footer__social_links">
			<a class="page-footer__icon_social">
				<i class="fab fa-instagram"></i>
			</a>
			<a class="page-footer__icon_social">
				<i class="fab fa-twitter"></i>
			</a>
			<a class="page-footer__icon_social">
				<i class="fab fa-facebook"></i>
			</a>
			<a class="page-footer__icon_social">
				<i class="fab fa-youtube"></i>
			</a>
		</div>
	</footer>
</template>

<script>
export default {
	name: "PageFooter",
	props: {
		punchline: {
			type: String,
			default: ''
		}
	}
};
</script>

<style lang="scss">
@import "../../assets/css/_variables.scss";
@import "index.scss";
</style>
