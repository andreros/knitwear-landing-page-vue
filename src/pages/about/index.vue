<template>
	<div class="about">
		<page-header
			brand-name="Jolene Jolene"
			punchline="About Us"
		/>

        <main>
			<section-title title="Step Right Into Our World" />

			<section-card
				type="imageLeft"
				image="https://static1.squarespace.com/static/5425ba71e4b007ffd6b55c47/t/547ca011e4b0a1e9ef8eacd5/1417453594003/armful+of+yarn.jpg?format=2500w"
				title="Our Story"
				text="A close knit group of friends with a vision and a huge passion for everything wool brought together what had been a dream for a long time. After a hard work and a very pleasant time designing and developing the best products wool can create, here we are, up and running!"
			/>

			<section-card
				type="imageRight"
				image="https://static1.squarespace.com/static/5425ba71e4b007ffd6b55c47/57d03c41e6f2e1d7acf3b3c7/57d040f0bebafbba56d9f35a/1473266171979/IMG_6868.JPG?format=2500w"
				title="Our Mission"
				text="To make people feel as comfortable outside, in winter time, as they would be in their own homes, in front of the fireplace, or just relaxing in their favourite easy chair."
			/>

			<section-card
				type="imageLeft"
				image="https://static1.squarespace.com/static/5425ba71e4b007ffd6b55c47/57d03c41e6f2e1d7acf3b3c7/57d040f615d5db9669a92539/1473265916016/IMG_1824.JPG?format=2500w"
				title="Our Promise"
				text="We deliver new fibers and colors to fit a moody Winter palette. Knit, crochet, and macrame with our range of earth-friendly yarns."
			/>

			<section-card
				type="imageRight"
				image="https://images.pexels.com/photos/324658/pexels-photo-324658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				title="Our Vibe"
				text="We are dreamers. We are achievers. We make magic. We dream it, and then do it together every day to reinvent ourselves, pouring our souls into our products in the most creative way we can."
			/>

			<section-cards-row
				title="The Ones Who Made This Possible!"
				card1image="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				card1title="John Smith"
				card1text="Seasoned creative, John is a passionate leader with a proven track record for translating any idea into a sleek and beautiful product."
				card2image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				card2title="Jane Shaw"
				card2text="Freelance blog writer. Her work has appeared on several knitting blogs, among others. Ultimately, she plans to segue into fashion merchandising so that she can do online shop for a living."
				card3image="https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				card3title="Mark Rogers"
				card3text="Product designer with a personal touch to make every product eye-catching and easy to use. His aim is to create beautiful pieces in the most fashionable way."
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
@import "../../assets/css/_variables.scss";
@import "index.scss";
</style>
