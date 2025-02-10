<script setup>
defineProps({
	variant: {
		type: String,
		default: '',
	},
	size: {
		type: String,
		default: '',
	},
	color: {
		type: String,
		default: '',
	},
	padding: {
		type: Object,
		default: () => ({
			top: null,
			right: null,
			bottom: null,
			left: null,
			x: null,
			y: null,
		}),
	},
})
</script>

<template>
	<button
		type="button"
		:style="{
			paddingInline: padding.x,
			paddingBlock: padding.y,
			paddingTop: padding.top,
			paddingRight: padding.right,
			paddingBottom: padding.bottom,
			paddingLeft: padding.left,
		}"
		:class="`button ${variant ? 'button--' + variant : ''} ${size ? 'button--' + size : ''} ${color ? 'button--' + color : ''}`"
	>
		<slot></slot>
	</button>
</template>

<style scoped lang="scss">
.button {
	@extend .f-main-text;
	padding: 12px 24px;
	background: var(--Basic-Branded);
	transition: 0.3s ease;
	border-radius: 4px;
	color: #fff;
	&:hover {
		background: #f9ac2e;
	}
	&:active {
		background: #ea960c;
	}
	&:disabled {
		background: var(--Basic-Grey);
	}
	&--loading {
		background: #f9ac2e;
	}
	&--outlined {
		background: transparent;
		border: 1px solid var(--Basic-Branded);
		color: var(--Basic-Branded);
		&:hover {
			background: var(--Basic-Branded);
			color: #fff;
		}
	}
	&--outlined:is(&--grey) {
		border-color: var(--Basic-Grey);
		color: var(--Basic-Grey);
		&:hover {
			background: var(--Basic-Grey);
			color: #fff;
		}
	}
	&--small {
		padding: 11px 24px;
	}
}
</style>
