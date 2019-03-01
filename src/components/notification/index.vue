<template>
	<div class="notification">
		{{message}}
	</div>
</template>

<script>
export default {
	name: "Notification",
	data() {
		return {
			message: "",
			classList: {
				visible: "notification--visible",
				success: "notification--success",
				alert: "notification--alert",
				error: "notification--error"
			}
		}
	},
	methods: {
		show(type, message, callback) {
			switch (type.toLowerCase().trim()) {
				case 'success':
					this.$el.classList.add(this.classList.success);
					this.$el.classList.remove(this.classList.alert);
					this.$el.classList.remove(this.classList.error);
				break;
				case 'alert':
					this.$el.classList.remove(this.classList.success);
					this.$el.classList.add(this.classList.alert);
					this.$el.classList.remove(this.classList.error);
				break;
				case 'error':
					this.$el.classList.remove(this.classList.success);
					this.$el.classList.remove(this.classList.alert);
					this.$el.classList.add(this.classList.error);
				break;
			}
			this.message = message;
			this.$el.classList.add(this.classList.visible);
			const t = setTimeout(() => {
				this.$el.classList.remove(this.classList.visible);
				if (typeof callback === "function") { callback(); }
				clearTimeout(t);
			}, 5000);
		}
	}
};
</script>

<style lang="scss">
@import "../../assets/css/_variables.scss";
@import "index.scss";
</style>
