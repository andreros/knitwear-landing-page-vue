<template>
	<section class="section section-cards-row">
		<h3 class="section-cards-row__title">{{title}}</h3>
		<div class="section-cards-row__grid">
			<div class="section-cards-row__grid_item">
				<div
					class="section-cards-row__grid_item_image"
					:style="getBackgroundImage('card1image')"
					data-aos="zoom-in">
				</div>
				<h4 class="section-cards-row__grid_item_title">{{card1title}}</h4>
				<p v-html="card1text"></p>
			</div>
			<div class="section-cards-row__grid_item">
				<div
					class="section-cards-row__grid_item_image"
					:style="getBackgroundImage('card2image')"
					data-aos="zoom-in"
					data-aos-delay="150">
				</div>
				<h4 class="section-cards-row__grid_item_title">{{card2title}}</h4>
				<p v-html="card2text"></p>
			</div>
			<div class="section-cards-row__grid_item">
				<div
					class="section-cards-row__grid_item_image"
					:style="getBackgroundImage('card3image')"
					data-aos="zoom-in"
					data-aos-delay="300">
				</div>
				<h4 class="section-cards-row__grid_item_title">{{card3title}}</h4>
				<p v-html="card3text"></p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "SectionCardsRow",
	props: {
		title: {
			type: String,
			default: ""
		},
		card1image: {
			type: String,
			default: ""
		},
		card1title: {
			type: String,
			default: ""
		},
		card1text: {
			type: String,
			default: ""
		},
		card2image: {
			type: String,
			default: ""
		},
		card2title: {
			type: String,
			default: ""
		},
		card2text: {
			type: String,
			default: ""
		},
		card3image: {
			type: String,
			default: ""
		},
		card3title: {
			type: String,
			default: ""
		},
		card3text: {
			type: String,
			default: ""
		}
	},
	computed: {
		getBackgroundImage() {
			return function(card) {
				if (!card) { return; }
				return "background-image: url('" + this[card] + "')";
			};
		}
	}
};
</script>

<style lang="scss">
@import "../../assets/_variables.scss";
@import "index.scss";
</style>
