<script setup>
defineProps({
	gap: {
		type: String,
		default: '24px',
	},
	align: {
		type: String,
		default: 'flex-start',
	},
	justify: {
		type: String,
		default: 'flex-start',
	},
	tag: {
		default: 'div',
	},
	wFill: {
		type: Boolean,
		default: false,
	},
	hFill: {
		type: Boolean,
		default: false,
	},
})
</script>

<template>
	<component
		:is="tag"
		class="column"
		:style="{
			gap: gap,
			alignItems: align,
			justifyContent: justify,
			width: wFill ? '100%' : null,
			height: hFill ? '100%' : null,
		}"
	>
		<slot></slot>
	</component>
</template>

<style scoped lang="scss">
.column {
	display: flex;
	flex-direction: column;
	width: 100%;
}
</style>
