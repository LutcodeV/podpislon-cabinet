<script setup>
const props = defineProps({
	modelValue: {
		type: Object,
		default: () => ({
			start: null,
			end: null,
		}),
	},
})
const value = ref({
	start: props.modelValue.start || null,
	end: props.modelValue.end || null,
})
defineEmits(['update:modelValue'])
</script>

<template>
	<VCalendar
		class="datepicker"
		:popover="{
			visibility: 'focus',
		}"
		v-model.range="value"
		@update:modelValue="$emit('update:modelValue', value)"
	>
	</VCalendar>
</template>

<style lang="scss">
.vc-light.vc-attr,
.vc-light .vc-attr {
	--vc-highlight-solid-bg: var(--Basic-Branded) !important;
	--vc-highlight-outline-border: var(--Basic-Branded);
	--vc-highlight-outline-content-color: var(--Basic-Branded);
	--vc-highlight-light-bg: rgba(247, 153, 0, 0.5);
	--vc-highlight-light-content-color: #fff;
	--vc-focus-ring: rgba(247, 153, 0, 0.5);
}
</style>
