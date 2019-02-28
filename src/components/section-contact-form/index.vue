<template>
	<section class="section section-contact-form">

		<div class="section-contact-form__form">
			<div class="section-contact-form__form_title">
				<h2>{{locationTitle}}</h2>
			</div>
			<div class="section-contact-form__input_wrapper  section-contact-form__input_wrapper--three-fourths">
				<iframe ref="map" class="section-contact-form__map_iframe"
					scrolling="no"
					marginheight="0"
					marginwidth="0"
					:src="getMapIframeSrc">
				</iframe>
				<br/>
				<small>
					<a ref="mapLink" :href="getMapLinkHref" target="_blank">View Larger Map</a>
				</small>
			</div>
			<div class="section-contact-form__input_wrapper section-contact-form__input_wrapper--one-fourth">
				<div class="section-contact-form__address" v-html="addressOne" @click="changeLocation('one')"></div>
				<br/><br/><br/><br/><br/><br/>
				<div class="section-contact-form__address" v-html="addressTwo" @click="changeLocation('two')"></div>
			</div>
		</div>

		<form class="section-contact-form__form">
			<div class="section-contact-form__form_title">
				<h2>{{contactsTitle}}</h2>
			</div>
			<div class="section-contact-form__input_wrapper section-contact-form__input_wrapper--half">
				<input
					ref="nameField"
					class="section-contact-form__input"
					type="text"
					name="name"
					:placeholder="namePlaceholder"
					@keyup="validateField('nameField')"
				>
				<span class="section-contact-form__input_focus"></span>
			</div>
			<div class="section-contact-form__input_wrapper section-contact-form__input_wrapper--half">
				<input
					ref="emailField"
					class="section-contact-form__input"
					type="text"
					name="email"
					:placeholder="emailPlaceholder"
					@keyup="validateField('emailField')"
				>
				<span class="section-contact-form__input_focus"></span>
			</div>
			<div class="section-contact-form__input_wrapper">
				<textarea
					ref="messageField"
					class="section-contact-form__input section-contact-form__input--textarea"
					name="message"
					:placeholder="messagePlaceholder"
					@keyup="validateField('messageField')"
				></textarea>
				<span class="section-contact-form__input_focus"></span>
			</div>
			<div class="section-contact-form__button_wrapper">
				<a class="button buttonLarge secondary" @click="submitForm">{{cta}}</a>
			</div>
		</form>
	</section>
</template>

<script>
import axios from 'axios';

export default {
	name: "SectionContactForm",
	props: {
		locationTitle: {
			type: String,
			default: ""
		},
		mapZoom: {
			type: String,
			default: "10"
		},
		addressOne: {
			type: String,
			default: ""
		},
		addressOneLat: {
			type: String,
			default: "0"
		},
		addressOneLon: {
			type: String,
			default: "0"
		},
		addressTwo: {
			type: String,
			default: ""
		},
		addressTwoLat: {
			type: String,
			default: "0"
		},
		addressTwoLon: {
			type: String,
			default: "0"
		},
		contactsTitle: {
			type: String,
			default: ""
		},
		namePlaceholder: {
			type: String,
			default: ""
		},
		emailPlaceholder: {
			type: String,
			default: ""
		},
		messagePlaceholder: {
			type: String,
			default: ""
		},
		cta: {
			type: String,
			default: "Submit"
		}
	},
	computed: {
		getMapIframeSrc() {
			return this.getMapLocation(this.addressOneLat, this.addressOneLon);
		},
		getMapLinkHref() {
			return this.getMapLink(this.addressOneLat, this.addressOneLon);
		}
	},
	data() {
		return {
			classes: {
				formFieldError: "section-contact-form__input_wrapper--error"
			}
		};
	},
	methods: {
		getMapLocation(latitude, longitude) {
			const minLat = Number.parseFloat(latitude) - 0.1;
			const maxLat = Number.parseFloat(latitude) + 0.1;
			const minLon = Number.parseFloat(longitude) - 0.25;
			const maxLon = Number.parseFloat(longitude) + 0.25;
			return "https://www.openstreetmap.org/export/embed.html?" +
					"bbox=" + minLon + "%2C" + minLat + "%2C" + maxLon + "%2C" + maxLat +
					"&layer=mapnik" +
					"&marker=" + latitude + "%2C" + longitude;
		},
		getMapLink(latitude, longitude) {
			return "https://www.openstreetmap.org/?" +
					"mlat=" + latitude + "&" +
					"mlon=" + longitude +
					"#map=" + this.mapZoom + "/" + latitude + "/" + longitude;
		},
		changeLocation(location) {
			switch (location) {
				case 'one':
					this.$refs.map.src = this.getMapLocation(this.addressOneLat, this.addressOneLon);
					this.$refs.mapLink.href = this.getMapLink(this.addressOneLat, this.addressOneLon);
				break;
				case 'two':
					this.$refs.map.src = this.getMapLocation(this.addressTwoLat, this.addressTwoLon);
					this.$refs.mapLink.href = this.getMapLink(this.addressTwoLat, this.addressTwoLon);
				break;
			}
		},
		validateField(field) {
			if (field === undefined) { return true; }
			let isValid = true;
			if (this.$refs[field].value.trim() === "") {
				this.$refs[field].parentElement.classList.add(this.classes.formFieldError);
				isValid = false;
			} else {
				this.$refs[field].parentElement.classList.remove(this.classes.formFieldError);
			}
			if (field === "emailField") {
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
		resetForm() {
			this.$refs.nameField.value = '';
			this.$refs.emailField.value = '';
			this.$refs.messageField.value = '';
			this.$refs.nameField.parentElement.classList.remove(this.classes.formFieldError);
			this.$refs.emailField.parentElement.classList.remove(this.classes.formFieldError);
			this.$refs.messageField.parentElement.classList.remove(this.classes.formFieldError);
		},
		submitForm() {
			// form validation
			const nameValid = this.validateField("nameField");
			const emailValid = this.validateField("emailField");
			const messageValid = this.validateField("messageField");
			const that = this;
			if (nameValid && emailValid && messageValid) {
				// submit form...
				axios.post('http://localhost:5000/api/v1/message', {
					name: this.$refs["nameField"].value.trim(),
					email: this.$refs["emailField"].value.trim(),
					message: this.$refs["messageField"].value.trim()
				})
				.then(function (response) {
					console.log("Response: ", response);
					that.resetForm();
				})
				.catch(function (error) {
					console.log("Error: ", error);
				});
			}
		}
	}
};
</script>

<style lang="scss">
@import "../../assets/_variables.scss";
@import "index.scss";
</style>
