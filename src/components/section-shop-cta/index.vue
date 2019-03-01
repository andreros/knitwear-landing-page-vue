<template>
	<section class="section-shop-cta section">
		<h3>{{message}}</h3>
		<a class="button buttonLarge secondary">{{cta}}</a>
	</section>
</template>

<script>
export default {
	name: "SectionShopCta",
	props: {
		message: {
			type: String,
			default: ""
		},
		cta: {
			type: String,
			default: ""
		}
	}
};
</script>

<style lang="scss">
@import "../../assets/css/_variables.scss";
@import "index.scss";
</style>
