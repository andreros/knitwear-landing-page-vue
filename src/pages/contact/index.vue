<template>
	<div class="contact">
		<page-header brand-name="Jolene Jolene" punchline="Get in Touch!"/>

		<main>
			<section-contact-form
				title="Need Something? Leave us a Message!"
				name-placeholder="Enter your name"
				email-placeholder="Enter your email address"
				message-placeholder="Write your message..."
			/>

			<section-shop-cta message="Free shipping when you spend $50 or more." cta="Shop Now"/>
		</main>

		<page-footer punchline="Wouldn't knit be terrible to miss shop updates?"/>
	</div>
</template>

<script>
import AOS from "aos";
import PageHeader from "../../components/page-header/index.vue";
import SectionContactForm from "../../components/section-contact-form/index.vue";
import SectionShopCta from "../../components/section-shop-cta/index.vue";
import PageFooter from "../../components/page-footer/index.vue";

export default {
	name: "Contact",
	components: {
		PageHeader,
		SectionContactForm,
		SectionShopCta,
		PageFooter
	},
	mounted() {
		//initialize AOS transitions
		AOS.init({
			duration: 1000,
			mirror: false
		});
	}
};
</script>

<style lang="scss">
@import "../../assets/_variables.scss";
@import "index.scss";
</style>
