<script setup>
defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
})

defineEmits(['update:modelValue'])
</script>

<template>
	<label class="checkbox">
		<input
			type="checkbox"
			@input="$emit('update:modelValue', $event.target.checked)"
			class="checkbox__input"
			:checked="modelValue"
			:required="$attrs.required"
		/>
		<span class="checkbox__box"></span>
	</label>
</template>

<style scoped lang="scss">
.checkbox {
	display: inline-flex;
	align-items: flex-start;
	gap: 12px;
	cursor: pointer;
	position: relative;

	&__input {
		position: absolute;
		width: 16px;
		height: 16px;
		opacity: 0;
	}

	&__box {
		border-radius: 32px;
		width: 34px;
		height: 20px;
		border: 1px solid var(--Basic-Grey);
		background: #fff;
		transition: 0.3s ease;
		position: relative;
		&::before {
			content: '';
			position: absolute;
			top: 2px;
			left: 2px;
			width: 16px;
			height: 16px;
			background: var(--Basic-Grey);
			border-radius: 50%;
			transition: 0.3s ease;
		}
		&::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.35) inset;
			z-index: 1;
			top: 0;
			left: 0;
			border-radius: 32px;
		}
	}

	&__input:checked + &__box {
		background: var(--Basic-Branded);
		&::before {
			background: var(--Basic-Background);
			left: 15px;
		}
	}
}
</style>
