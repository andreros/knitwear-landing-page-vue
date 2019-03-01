<template>
	<div class="gallery">
		<page-header
			brand-name="Jolene Jolene"
			punchline="A World Of Wool, Yarns and Cozy Knitwear"
		/>

		<main>
			<section-gallery :slides="slides" />

			<section-shop-cta message="Free shipping when you spend $50 or more." cta="Shop Now"/>
		</main>

		<page-footer
			punchline="Wouldn't knit be terrible to miss our updates?"
		/>
	</div>
</template>

<script>
import AOS from "aos";
import PageHeader from "../../components/page-header/index.vue";
import SectionGallery from "../../components/section-gallery/index.vue";
import SectionShopCta from "../../components/section-shop-cta/index.vue";
import PageFooter from "../../components/page-footer/index.vue";

export default {
	name: "Gallery",
	components: {
		PageHeader,
		SectionGallery,
		SectionShopCta,
		PageFooter
	},
	data() {
		return {
			slides: [
				{ image: "src/assets/images/ankle-socks-children-socks-knitted-greeting-160438.jpeg", caption: "Caption about the slide image." },
				{ image: "src/assets/images/crocheting-yarn-diy-knitting-162499.jpeg", caption: "Caption about the slide image." },
				{ image: "src/assets/images/pexels-photo-63450.jpeg", caption: "Caption about the slide image." },
				{ image: "src/assets/images/pexels-photo-105480.jpeg", caption: "Caption about the slide image." },
				{ image: "src/assets/images/pexels-photo-110876.jpeg", caption: "Caption about the slide image." },
				{ image: "src/assets/images/pexels-photo-312591.jpeg", caption: "Caption about the slide image." },
				{ image: "src/assets/images/pexels-photo-355076.jpeg", caption: "Caption about the slide image." },
				{ image: "src/assets/images/pexels-photo-355106.jpeg", caption: "Caption about the slide image." },
				{ image: "src/assets/images/pexels-photo-735307.jpeg", caption: "Caption about the slide image." },
				{ image: "src/assets/images/pexels-photo-745761.jpeg", caption: "Caption about the slide image." },
				{ image: "src/assets/images/pexels-photo-762791.jpeg", caption: "Caption about the slide image." },
				{ image: "src/assets/images/pexels-photo-845263.jpeg", caption: "Caption about the slide image." },
				{ image: "src/assets/images/pexels-photo-1452787.jpeg", caption: "Caption about the slide image." },
				{ image: "src/assets/images/pexels-photo-1484983.jpeg", caption: "Caption about the slide image." },
				{ image: "src/assets/images/wool-knit-knitting-needles-basket-48199.jpeg", caption: "Caption about the slide image." },
				{ image: "src/assets/images/yarn-skeins-string-multicolor-1571577.jpeg", caption: "Caption about the slide image." },
				{ image: "src/assets/images/yarn-wool-cords-colorful-67613.jpeg", caption: "Caption about the slide image." }
			]
		}
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
@import "../../assets/css/_variables.scss";
@import "index.scss";
</style>
