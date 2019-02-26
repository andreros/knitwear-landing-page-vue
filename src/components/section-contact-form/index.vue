<template>
	<section class="section section-contact-form">
		<form class="section-contact-form__form validate-form">
			<div class="section-contact-form__form_title">
				<h2>{{title}}</h2>
			</div>
			<div class="section-contact-form__input_wrapper section-contact-form__input_wrapper--half">
				<input ref="nameField" class="section-contact-form__input" type="text" name="name"
						:placeholder="namePlaceholder" @keyup="validateField('nameField')">
				<span class="section-contact-form__input_focus"></span>
			</div>
			<div class="section-contact-form__input_wrapper section-contact-form__input_wrapper--half">
				<input ref="emailField" class="section-contact-form__input" type="text" name="email"
						:placeholder="emailPlaceholder" @keyup="validateField('emailField')">
				<span class="section-contact-form__input_focus"></span>
			</div>
			<div class="section-contact-form__input_wrapper">
				<textarea ref="messageField" class="section-contact-form__input section-contact-form__input--textarea" name="message"
							:placeholder="messagePlaceholder" @keyup="validateField('messageField')"></textarea>
				<span class="section-contact-form__input_focus"></span>
			</div>
			<div class="section-contact-form__button_wrapper">
				<a class="button buttonLarge secondary" @click="submitForm">{{cta}}</a>
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
		cta: {
			type: String,
			default: 'Submit'
		}
	},
	data() {
		return {
			classes: {
				formFieldError: 'section-contact-form__input_wrapper--error'
			}
		}
	},
	methods: {
		validateField(field) {
			if (field === undefined) { return true; }
			let isValid = true;
			if (this.$refs[field].value.trim() === '') {
				this.$refs[field].parentElement.classList.add(this.classes.formFieldError);
				isValid = false;
			} else {
				this.$refs[field].parentElement.classList.remove(this.classes.formFieldError);
			}
			if (field === 'emailField') {
				const emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/;
				isValid = emailRegex.test(this.$refs[field].value.trim());
				if (!isValid) {
					this.$refs[field].parentElement.classList.add(this.classes.formFieldError);
				} else {
					this.$refs[field].parentElement.classList.remove(this.classes.formFieldError);
				}
			}
			return isValid;
		},
		submitForm() {
			// form validation
			const nameValid = this.validateField('nameField');
			const emailValid = this.validateField('emailField');
			const messageValid = this.validateField('messageField');
			if (nameValid && emailValid && messageValid) {
				// submit form...
			}
		}
	}
};
</script>

<style lang="scss">
@import "../../assets/_variables.scss";
@import "index.scss";
</style>
