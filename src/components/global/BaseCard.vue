<script setup>
defineProps({
	type: {
		type: String,
		default: '',
	},
	isDashed: {
		type: Boolean,
		default: false,
	},
	isCentered: {
		type: Boolean,
		default: false,
	},
	tag: {},
	padding: {
		type: Object,
		default: () => ({
			top: null,
			right: null,
			bottom: null,
			left: null,
			x: null,
			y: null,
		}),
	},
})
</script>

<template>
	<component
		:is="tag || 'div'"
		:style="{
			paddingInline: padding.x,
			paddingBlock: padding.y,
			paddingTop: padding.top,
			paddingRight: padding.right,
			paddingBottom: padding.bottom,
			paddingLeft: padding.left,
		}"
		:class="`b-card ${type ? 'b-card--' + type : ''} ${isDashed ? 'b-card--dashed' : ''} ${isCentered ? 'b-card--centered' : ''}`"
	>
		<slot />
	</component>
</template>

<style scoped lang="scss"></style>
