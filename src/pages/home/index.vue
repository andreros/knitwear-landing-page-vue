<template>
	<div class="home">
		<page-header
			brand-name="Jolene Jolene"
			punchline="A New Wave of Knitwear"
		/>

        <main>
			<section-title title="One-of-a-kind yarns and accessories handcrafted with love in Seattle, Washington." />

			<section-card
				type="imageLeft"
				image="https://static1.squarespace.com/static/5425ba71e4b007ffd6b55c47/t/547ca011e4b0a1e9ef8eacd5/1417453594003/armful+of+yarn.jpg?format=2500w"
				label="Just In!"
				title="Fall/Winter Yarns"
				text="New fibers and colors to fit a moody Winter palette. Knit, crochet, and macrame with our range of earth-friendly yarns."
				cta="Shop Bundles"
			/>

			<section-card
				type="imageRight"
				image="https://static1.squarespace.com/static/5425ba71e4b007ffd6b55c47/57d03c41e6f2e1d7acf3b3c7/57d040f0bebafbba56d9f35a/1473266171979/IMG_6868.JPG?format=2500w"
				title="Knit 1, Purl 2"
				text="Dive into a new project with easy to follow patterns in a range of styles for beginning to advanced knitters."
				cta="Shop Patterns"
			/>

			<section-card
				type="imageLeft"
				image="https://static1.squarespace.com/static/5425ba71e4b007ffd6b55c47/57d03c41e6f2e1d7acf3b3c7/57d040f615d5db9669a92539/1473265916016/IMG_1824.JPG?format=2500w"
				title="Cozy Up"
				text="One-of-a-kind hats, scarves, and sweaters to keep you looking fine and feeling cozy."
				cta="Shop Accessories"
			/>

			<section-cards-row
				title="Small Business Supporting Big Ideas"
				card1image="https://static1.squarespace.com/static/5425ba71e4b007ffd6b55c47/57d03c41e6f2e1d7acf3b3c7/57d040f1bebafbba56d9f35d/1473265909906/IMG_1908.JPG?format=2500w"
				card1title="Building Community"
				card1text="What started as a one woman show has grown into a community of makers supporting women and POC-owned vendors whenever possible. Because together, we all rise."
				card2image="https://static1.squarespace.com/static/5425ba71e4b007ffd6b55c47/57d03c41e6f2e1d7acf3b3c7/57d041e6b8a79bd46188f7d0/1473266157317/IMG_7650.JPG?format=2500w"
				card2title="Sustainable Fashion"
				card2text="Quality fashions produced by hand, made to last, with eco-friendly vegetable-dyed yarns that minimize water use. Always one-of-a-kind, never mass produced."
				card3image="https://static1.squarespace.com/static/5425ba71e4b007ffd6b55c47/5438382ee4b04156f923058a/5850426ed482e9af3126f43a/1511895748624/_AAA2732.jpg?format=2500w"
				card3title="Giving Back"
				card3text="We partner with local non-profit organizations to provide free knitting classes and warm clothing to underserved communities. <a href='#'>Get in touch</a> to find out more!"
			/>

			<section-shop-cta message="Free shipping when you spend $50 or more." cta="Shop Now" />
        </main>

		<page-footer
			punchline="Wouldn't knit be terrible to miss our updates?"
		/>
	</div>
</template>

<script>
import AOS from "aos";
import PageHeader from "../../components/page-header/index.vue";
import SectionTitle from "../../components/section-title/index.vue";
import SectionCard from "../../components/section-card/index.vue";
import SectionCardsRow from "../../components/section-cards-row/index.vue";
import SectionShopCta from "../../components/section-shop-cta/index.vue";
import PageFooter from "../../components/page-footer/index.vue";

export default {
	name: "Home",
	components: {
		PageHeader,
		SectionTitle,
		SectionCard,
		SectionCardsRow,
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
