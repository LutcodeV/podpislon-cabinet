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
	color: {
		type: String,
		default: '',
	},
	weight: {
		type: String,
		default: '',
	},
	underline: {
		type: Boolean,
		default: false,
	},
	clickable: {
		type: Boolean,
		default: false,
	},
	uppercase: {
		type: Boolean,
		default: false,
	},
	isCentered: {
		type: Boolean,
		default: false,
	},
})
</script>

<template>
	<component
		:is="tag"
		:class="`text f-${variant} ${underline ? 'h-underline' : ''} ${clickable ? 'h-clickable' : ''} ${uppercase ? 'h-uppercase' : ''}`"
		:style="{ fontWeight: weight, color: color, textAlign: isCentered ? 'center' : '' }"
	>
		<slot />
	</component>
</template>

<style scoped lang="scss"></style>
