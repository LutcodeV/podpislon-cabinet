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
	name: {
		type: String,
		default: '',
	},
})

defineEmits(['update:modelValue'])
</script>

<template>
	<label class="radio">
		<input
			type="radio"
			@input="$emit('update:modelValue', value)"
			class="radio__input"
			name="radio"
			:checked="modelValue === value"
			:required="$attrs.required"
		/>
		<span class="radio__box"></span>
		<span class="radio__text"><slot></slot></span>
	</label>
</template>

<style scoped lang="scss">
.radio {
	display: flex;
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
		width: 16px;
		height: 16px;
		min-width: 16px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: inset 0px 0px 0px 1px var(--Basic-Grey);
		transition: 0.3s ease;
		position: relative;
		&::before {
			content: '';
			width: 11px;
			height: 11px;
			position: absolute;
			border-radius: 50%;
			opacity: 0;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%) scale(0.7);
			background: var(--Basic-Branded);
			transition:
				opacity 0.3s ease,
				transform 0.3s ease;
		}
	}

	&__input:checked + &__box::before {
		opacity: 1;
		transform: translate(-50%, -50%) scale(1);
	}
	&__input:checked + &__box {
		box-shadow: inset 0px 0px 0px 1px var(--Basic-Branded);
	}
	&__input:checked ~ &__text {
		color: var(--Basic-Dark);
	}

	&__text {
		@extend .f-signatures;
		transition: 0.3s ease;
		color: var(--Basic-Grey);
		:deep(a) {
			color: var(--Basic-Branded);
			text-decoration: underline;
		}
	}

	@include hover {
		.radio__box {
			box-shadow: inset 0px 0px 0px 1px var(--Basic-Branded);
		}
		.radio__text {
			color: var(--Basic-Dark);
		}
	}
}
</style>
