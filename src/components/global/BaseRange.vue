<script setup>
const props = defineProps({
	modelValue: {
		type: String,
		default: 0,
	},
	min: {
		type: Number,
		default: 0,
	},
	max: {
		type: Number,
		default: 100,
	},
	step: {
		type: Number,
		default: 1,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
})
const emit = defineEmits(['update:modelValue'])

const refRange = ref(null)

onMounted(() => {
	refRange.value.style.setProperty('--value', refRange.value.value)
	refRange.value.style.setProperty('--min', refRange.value.min == '' ? '0' : refRange.value.min)
	refRange.value.style.setProperty('--max', refRange.value.max == '' ? '100' : refRange.value.max)
})

const inputHandler = (e) => {
	e.target.style.setProperty('--value', e.target.value)
	emit('update:modelValue', `${e.target.value}`)
}

watch(
	() => props.modelValue,
	() => {
		refRange.value.style.setProperty('--value', Math.max(props.modelValue, 0))
	},
)
</script>

<template>
	<label class="range__wrapper">
		<input
			ref="refRange"
			:value="modelValue"
			:min="min"
			:max="max"
			:step="step"
			:disabled="disabled"
			type="range"
			class="range slider-progress"
			@input="inputHandler"
			@change="inputHandler"
		/>
		<div class="range__legend">
			<BaseText variant="signatures" class="range__legend-value" v-for="i in 7">
				{{ Math.floor((i - 1) * (max / 6)) }}
			</BaseText>
		</div>
	</label>
</template>

<style scoped lang="scss">
.range {
	--color: #f79900;
	&__legend {
		display: flex;
		margin-top: 6px;
		justify-content: space-between;
	}
	&__legend-value {
		color: var(--Basic-Grey);
	}
	&__wrapper {
		display: flex;
		flex-direction: column;
		gap: 13px;
	}
	& {
		height: 14px;
		-webkit-appearance: none;
	}
	&:disabled {
		--color: var(--Basic-Grey);
	}
	&.slider-progress {
		--range: calc(var(--max) - var(--min));
		--ratio: calc((var(--value) - var(--min)) / var(--range));
		--sx: calc(0.5 * 15px + var(--ratio) * (100% - 15px));
	}

	&:focus {
		outline: none;
	}

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 15px;
		height: 15px;
		border-radius: 500px;
		background: var(--color);
		border: 1px solid #ffffff;
		box-shadow: -4px 4px 9.9px rgba(0, 0, 0, 0.06);
		margin-top: calc(4px * 0.5 - max(15px * 0.5, 1px));
	}

	&::-webkit-slider-runnable-track {
		height: 4px;
		border: none;
		border-radius: 4px;
		background: #f6f6f6;
		box-shadow: none;
	}

	&:hover::-webkit-slider-runnable-track {
		background: #f6f6f6;
	}

	&:active::-webkit-slider-runnable-track {
		background: #f6f6f6;
	}

	&.slider-progress::-webkit-slider-runnable-track {
		background:
			linear-gradient(var(--color), var(--color)) 0 / var(--sx) 100% no-repeat,
			#f6f6f6;
	}

	&.slider-progress:hover::-webkit-slider-runnable-track {
		background:
			linear-gradient(var(--color), var(--color)) 0 / var(--sx) 100% no-repeat,
			#f6f6f6;
	}

	&.slider-progress:active::-webkit-slider-runnable-track {
		background:
			linear-gradient(var(--color), var(--color)) 0 / var(--sx) 100% no-repeat,
			#f6f6f6;
	}

	/*mozilla*/
	&::-moz-range-thumb {
		width: max(calc(15px - 1px - 1px), 0px);
		height: max(calc(15px - 1px - 1px), 0px);
		border-radius: 500px;
		background: var(--color);
		border: 1px solid #ffffff;
		box-shadow: -4px 4px 9.9px rgba(0, 0, 0, 0.06);
	}

	&::-moz-range-track {
		height: 4px;
		border: none;
		border-radius: 4px;
		background: #f6f6f6;
		box-shadow: none;
	}

	&:hover::-moz-range-track {
		background: #f6f6f6;
	}

	&:active::-moz-range-track {
		background: #f6f6f6;
	}

	&.slider-progress::-moz-range-track {
		background:
			linear-gradient(var(--color), var(--color)) 0 / var(--sx) 100% no-repeat,
			#f6f6f6;
	}

	&.slider-progress:hover::-moz-range-track {
		background:
			linear-gradient(var(--color), var(--color)) 0 / var(--sx) 100% no-repeat,
			#f6f6f6;
	}

	&.slider-progress:active::-moz-range-track {
		background:
			linear-gradient(var(--color), var(--color)) 0 / var(--sx) 100% no-repeat,
			#f6f6f6;
	}

	/*ms*/
	&::-ms-fill-upper {
		background: transparent;
		border-color: transparent;
	}

	&::-ms-fill-lower {
		background: transparent;
		border-color: transparent;
	}

	&::-ms-thumb {
		width: 15px;
		height: 15px;
		border-radius: 500px;
		background: var(--color);
		border: 1px solid #ffffff;
		box-shadow: -4px 4px 9.9px rgba(0, 0, 0, 0.06);
		margin-top: 0;
		box-sizing: border-box;
	}

	&::-ms-track {
		height: 4px;
		border-radius: 4px;
		background: #f6f6f6;
		border: none;
		box-shadow: none;
		box-sizing: border-box;
	}

	&:hover::-ms-track {
		background: #f6f6f6;
	}

	&:active::-ms-track {
		background: #f6f6f6;
	}

	&.slider-progress::-ms-fill-lower {
		height: 4px;
		border-radius: 4px 0 0 4px;
		margin: 0;
		background: var(--color);
		border: none;
		border-right-width: 0;
	}
}
</style>
