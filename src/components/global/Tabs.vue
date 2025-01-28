<script setup>
defineProps({
	modelValue: {
		type: String,
		default: '',
	},
	tabs: {
		type: Array,
		default: () => [],
	},
})

defineEmits(['update:modelValue'])
</script>

<template>
	<div class="tabs">
		<button
			:class="`tabs__button ${modelValue === tab ? 'tabs__button--active' : ''}`"
			v-for="tab in tabs"
			@click="$emit('update:modelValue', tab)"
		>
			{{ tab }}
		</button>
	</div>
</template>

<style scoped lang="scss">
.tabs {
	display: flex;
	gap: 24px;
	&__button {
		@extend .f-medium;
		transition: 0.3s ease;
		color: var(--Basic-Grey);
		padding-bottom: 3px;
		border-bottom: 1px solid var(--Basic-Grey);
		&--active {
			color: var(--Basic-Dark);
			border-bottom-color: var(--Basic-Dark);
		}
	}
}
</style>
