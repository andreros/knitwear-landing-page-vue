<template>
	<section class="section section-title">
		<h2>{{title}}</h2>
	</section>
</template>

<script>
export default {
	name: "SectionTitle",
	props: {
		title: {
			type: String,
			default: ''
		}
	}
};
</script>

<style lang="scss">
@import "../../assets/_variables.scss";
@import "index.scss";
</style>
