<template>
	<section class="section section-contact-form">
		<form class="section-contact-form__form validate-form">
			<div class="section-contact-form__form_title">
				<h2>{{title}}</h2>
			</div>
			<div class="section-contact-form__input_wrapper section-contact-form__input_wrapper--half validate-input" data-validate="Name is required">
				<input class="section-contact-form__input" type="text" name="name" :placeholder="namePlaceholder">
				<span class="section-contact-form__input_focus"></span>
			</div>
			<div
				class="section-contact-form__input_wrapper section-contact-form__input_wrapper--half validate-input"
				data-validate="Valid email is required: ex@abc.xyz">
				<input class="section-contact-form__input" type="text" name="email" :placeholder="emailPlaceholder">
				<span class="section-contact-form__input_focus"></span>
			</div>
			<div class="section-contact-form__input_wrapper validate-input" data-validate="Message is required">
				<textarea class="section-contact-form__input section-contact-form__input--textarea" name="message" :placeholder="messagePlaceholder"></textarea>
				<span class="section-contact-form__input_focus"></span>
			</div>
			<div class="section-contact-form__button_wrapper">
				<a class="button buttonLarge secondary">Submit</a>
			</div>
		</form>
	</section>
</template>

<script>
export default {
	name: "SectionContactForm",
	props: {
		title: {
			type: String,
			default: ''
		},
		namePlaceholder: {
			type: String,
			default: ''
		},
		emailPlaceholder: {
			type: String,
			default: ''
		},
		messagePlaceholder: {
			type: String,
			default: ''
		},
	}
};
</script>

<style lang="scss">
@import "../../assets/_variables.scss";
@import "index.scss";
</style>
