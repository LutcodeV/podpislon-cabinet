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
	<VDatePicker v-model.range="value" @update:modelValue="$emit('update:modelValue', value)">
		<template #default="{ inputValue, inputEvents }">
			<BaseInput
				:placeholder="$attrs.placeholder || 'Дата'"
				:value="inputValue.start && inputValue.end ? `${inputValue.start} - ${inputValue.end}` : ''"
				v-on="inputEvents.start || inputEvents.end"
			/>
		</template>
	</VDatePicker>
</template>

<style scoped lang="scss"></style>
