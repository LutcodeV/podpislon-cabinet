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
		<BaseText uppercase variant="heading">{{ title }}</BaseText>
		<slot />
	</div>
</template>

<style lang="scss">
* + .page-header {
	margin-top: 32px;
}
</style>

<style scoped lang="scss">
.page-header {
	display: flex;
	align-items: center;
}
</style>
