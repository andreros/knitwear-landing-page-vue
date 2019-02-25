<template>
	<footer class="page-footer">
		<div class="page-footer__links_container">
			<div class="page-footer__links">
				<p>Shop</p>
				<a href="#">Yarns</a>
				<a href="#">Hats</a>
				<a href="#">Scarves</a>
				<a href="#">Stockists</a>
			</div>
			<div class="page-footer__links">
				<p>About Us</p>
				<a href="#">Our Story</a>
				<a href="#">Press</a>
				<a href="#">Blog</a>
				<a href="#">Jobs</a>
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
@import "../../assets/_variables.scss";
@import "index.scss";
</style>
