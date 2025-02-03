<script setup>
defineProps({
	title: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<div class="page-header">
		<p class="page-header__title">{{ title }}</p>
		<slot />
	</div>
</template>

<style scoped lang="scss">
.page-header {
	margin-top: 32px;
	display: flex;
	align-items: center;
	&__title {
		@extend .f-heading;
	}
}
</style>
