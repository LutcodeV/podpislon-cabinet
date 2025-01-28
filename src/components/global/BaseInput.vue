<script setup>
defineProps({
	modelValue: {
		type: String,
		default: '',
	},
	value: {
		type: String,
		default: '',
	},
	lockInput: {
		type: Boolean,
		default: false,
	},
})
const refLabel = ref(null)
defineOptions({
	inheritAttrs: false,
})
defineEmits(['update:modelValue', 'click'])
defineExpose({ refLabel })
</script>

<template>
	<label
		@click="$emit('click')"
		:for="$attrs.id"
		ref="refLabel"
		:class="`input ${$attrs.class || ''}`"
	>
		<input
			:value="modelValue || value"
			:id="$attrs.id"
			:type="$attrs.type || 'text'"
			:name="$attrs.name"
			:required="$attrs.required"
			:disabled="$attrs.disabled || lockInput"
			v-bind="$attrs"
			placeholder=""
			:class="`input__field ${modelValue.length > 0 || value.length > 0 ? 'input__field--filled' : ''}`"
			@input="$emit('update:modelValue', $event.target.value)"
			@change="$emit('update:modelValue', $event.target.value)"
		/>
		<slot name="postfix" />
		<p class="input__title">{{ $attrs.placeholder }}</p>
	</label>
</template>

<style scoped lang="scss">
.input {
	max-width: 100%;
	flex: 1 1 0;
	position: relative;
	height: 48px;
	min-height: 48px;
	padding: 6px 16px;
	display: flex;
	border: 1px solid var(--Basic-Grey);
	border-radius: 4px;
	&__title {
		@extend .f-main-text;
		position: absolute;
		left: 16px;
		top: 13px;
		transition: 0.3s ease;
		color: var(--Basic-Grey);
	}
	&__field {
		@extend .f-main-text;
		color: var(--Basic-Dark);
		width: 100%;
		margin-top: auto;
		height: 20px;
		&:disabled {
			pointer-events: none;
		}
	}
	&__field:is(:active, :focus, .input__field--filled) ~ .input__title {
		@extend .f-signatures;
		top: 6px;
	}
}
</style>
