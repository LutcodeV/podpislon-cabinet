<script setup>
defineProps({
	title: {
		type: String,
		default: '',
	},
	value: {
		type: String,
		default: '',
	},
	subvalue: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<div class="value-row">
		<p class="value-row__title">{{ title }}</p>
		<hr class="value-row__line" />
		<p class="value-row__value">
			{{ value }}
			<BaseText
				tag="span"
				v-if="subvalue"
				variant="small-main"
				color="var(--Basic-Grey)"
				class="value-row__subvalue"
			>
				{{ subvalue }}
			</BaseText>
		</p>
	</div>
</template>

<style scoped lang="scss">
.value-row {
	display: flex;
	gap: 8px;
	&__title {
		@extend .f-small-main;
		color: var(--Basic-Grey);
	}
	&__line {
		flex: 1 1 0;
		border: 0;
		border-bottom: 1px dashed var(--Basic-Grey);
		margin-bottom: 4px;
	}
	&__value {
		@extend .f-medium;
		color: var(--Basic-Dark);
		position: relative;
	}
	&__subvalue {
		position: absolute;
		top: calc(100% + 4px);
		left: 0;
	}
}
</style>
