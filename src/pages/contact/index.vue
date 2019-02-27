<template>
	<div class="contact">
		<page-header brand-name="Jolene Jolene" punchline="Get in Touch!"/>

		<main>
			<section-contact-form
				location-title="Here's Where to Find Us!"
				address-one="<h2><i class='fas fa-map-marker-alt'></i> New York Office</h2>1350 6th Ave Floor 2,<br/>New York, NY US 10019"
				address-one-lat=40.7625654
				address-one-lon=-73.9799923
				address-two="<h2><i class='fas fa-map-marker-alt'></i> California Office</h2>1353 Redwood Way,<br/>Petaluma, CA US 94954"
				address-two-lat=38.2765072
				address-two-lon=-122.6692961
				contacts-title="Need Something? Leave Us a Message!"
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
