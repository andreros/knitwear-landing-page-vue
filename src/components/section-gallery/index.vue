<template>
	<section class="section section-gallery">
		<div class="section-gallery__slideshow" @click="goToNextSlide">
			<div ref="stripe" class="section-gallery__stripe">
				<div v-for="(slide, i) in slides" :key="i" ref="slide" class="section-gallery__slide">
					<img class="section-gallery__slide_image" :src="slide.image" :alt="slide.caption" />
				</div>
			</div>
			<div class="section-gallery__previous-slide" @click="goToPreviousSlide">
				<i class="fas fa-chevron-left"></i>
			</div>
			<div class="section-gallery__next-slide" @click="goToNextSlide">
				<i class="fas fa-chevron-right"></i>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "SectionGallery",
	props: {
		slides: {
			type: Array,
			default: []
		}
	},
	data() {
		return {
			classList: {
				order0: "klp-order0",
				order1: "klp-order1",
				isSlideLeft: "klp-is-slide-left",
				isSlideRight: "klp-is-slide-right",
				isAnimating: "klp-is-animating"
			}
		}
	},
	mounted() {
		this.resetPages();
		if (this.$refs.slide[0] !== undefined) { this.$refs.slide[0].classList.add(this.classList.order0) }
	},
	methods: {
		resetPages() {
			this.slides.forEach((slide, index, slides) => {
				this.$refs.slide[index].classList.remove(this.classList.order0);
				this.$refs.slide[index].classList.remove(this.classList.order1);
			});
		},
		goToPreviousSlide(e) {
			e.stopPropagation();
			if (this.$refs.stripe.classList.contains(this.classList.isAnimating)) { return; }
			// define slide indexes
			let currentSlideIndex = 0;
			let previousSlideIndex = 0;
			this.slides.forEach((slide, index, slides) => {
				if (this.$refs.slide[index].classList.contains(this.classList.order0)) {
					currentSlideIndex = index;
				}
			});
			previousSlideIndex = ((currentSlideIndex-1 < 0) ?  this.slides.length-1 : currentSlideIndex-1);
			// set orders
			this.resetPages();
			this.$refs.slide[currentSlideIndex].classList.add(this.classList.order1);
			this.$refs.slide[previousSlideIndex].classList.add(this.classList.order0);
			// set animation direction
			this.$refs.stripe.classList.remove(this.classList.isSlideLeft);
			this.$refs.stripe.classList.remove(this.classList.isSlideRight);
			this.$refs.stripe.classList.remove(this.classList.isAnimating);
			this.$refs.stripe.classList.add(this.classList.isSlideRight);
			// start animation
			this.$el.addEventListener("animationend", this.goToPreviousSlideEnd, false);
			this.$refs.stripe.classList.add(this.classList.isAnimating);
		},
		goToPreviousSlideEnd() {
			this.$el.removeEventListener("animationend", this.goToPreviousSlideEnd);
			// clean stripe states
			this.$refs.stripe.classList.remove(this.classList.isSlideLeft);
			this.$refs.stripe.classList.remove(this.classList.isSlideRight);
			this.$refs.stripe.classList.remove(this.classList.isAnimating);
		},
		goToNextSlide(e) {
			e.stopPropagation();
			if (this.$refs.stripe.classList.contains(this.classList.isAnimating)) { return; }
			// define slide indexes
			let currentSlideIndex = 0;
			let nextSlideIndex = 0;
			this.slides.forEach((slide, index, slides) => {
				if (this.$refs.slide[index].classList.contains(this.classList.order0)) {
					currentSlideIndex = index;
				}
			});
			nextSlideIndex = ((currentSlideIndex+1 >= this.slides.length) ?  0 : currentSlideIndex+1);
			// set orders
			this.resetPages();
			this.$refs.slide[currentSlideIndex].classList.add(this.classList.order0);
			this.$refs.slide[nextSlideIndex].classList.add(this.classList.order1);
			// set animation direction
			this.$refs.stripe.classList.remove(this.classList.isSlideLeft);
			this.$refs.stripe.classList.remove(this.classList.isSlideRight);
			this.$refs.stripe.classList.remove(this.classList.isAnimating);
			this.$refs.stripe.classList.add(this.classList.isSlideLeft);
			// start animation
			this.$el.addEventListener("animationend", this.goToNextSlideEnd, false);
			this.$refs.stripe.classList.add(this.classList.isAnimating);
		},
		goToNextSlideEnd() {
			this.$el.removeEventListener("animationend", this.goToNextSlideEnd);
			// set orders
			this.slides.forEach((slide, index, slides) => {
				if (this.$refs.slide[index].classList.contains(this.classList.order0)) {
					this.$refs.slide[index].classList.remove(this.classList.order0);
				}
				if (this.$refs.slide[index].classList.contains(this.classList.order1)) {
					this.$refs.slide[index].classList.remove(this.classList.order1);
					this.$refs.slide[index].classList.add(this.classList.order0);
				}
			});
			// clean stripe states
			this.$refs.stripe.classList.remove(this.classList.isSlideLeft);
			this.$refs.stripe.classList.remove(this.classList.isSlideRight);
			this.$refs.stripe.classList.remove(this.classList.isAnimating);
		}
	}
};
</script>

<style lang="scss">
@import "../../assets/css/_variables.scss";
@import "index.scss";
</style>
