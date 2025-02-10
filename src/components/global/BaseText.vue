<script setup>
defineProps({
	tag: {
		type: String,
		default: 'p',
	},
	variant: {
		type: String,
		default: 'main-text',
	},
	weight: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<component :is="tag" :class="`f-${variant}`" :style="{ fontWeight: weight }"><slot /></component>
</template>

<style scoped lang="scss"></style>
