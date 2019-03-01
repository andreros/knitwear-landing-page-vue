<template>
	<section class="section section-card mobileCenter" :class="type">
		<div class="section-card__image" :style="getBackgroundImage"></div>
		<div class="section-card__copy" data-aos="fade-up">
			<div v-if="label != ''">
				<span class="new">{{label}}</span>
			</div>
			<h3>{{title}}</h3>
			<p>{{text}}</p>
			<a v-if="cta != ''" href="#" class="button">{{cta}}</a>
		</div>
	</section>
</template>

<script>
export default {
	name: "SectionCard",
	props: {
		type: {
			type: String,
			default: ''
		},
		image: {
			type: String,
			default: ''
		},
		label: {
			type: String,
			default: ''
		},
		title: {
			type: String,
			default: ''
		},
		text: {
			type: String,
			default: ''
		},
		cta: {
			type: String,
			default: ''
		}
	},
	computed: {
		getBackgroundImage() {
			if (this.image === '') { return; }
			return "background-image: url('" + this.image + "')";
		}
	}
};
</script>

<style lang="scss">
@import "../../assets/css/_variables.scss";
@import "index.scss";
</style>
