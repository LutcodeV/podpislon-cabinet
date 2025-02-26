<script setup>
defineProps({
	gap: {
		type: String,
		default: '24px',
	},
	justify: {
		type: String,
		default: 'flex-start',
	},
	align: {
		type: String,
		default: 'flex-start',
	},
	tag: {
		default: 'div',
	},
	wrap: {
		type: Boolean,
		default: false,
	},
	wFill: {
		type: Boolean,
		default: false,
	},
})
</script>

<template>
	<component
		:is="tag"
		class="row"
		:style="{
			gap: gap,
			justifyContent: justify,
			alignItems: align,
			width: wFill ? '100%' : null,
			flexWrap: wrap ? 'wrap' : null,
		}"
	>
		<slot></slot>
	</component>
</template>

<style scoped lang="scss">
.row {
	display: flex;
}
</style>
