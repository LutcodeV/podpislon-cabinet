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
	wFill: {
		type: Boolean,
		default: false,
	},
})
</script>

<template>
	<button
		:type="$attrs.type || 'button'"
		:style="{
			paddingInline: padding.x,
			paddingBlock: padding.y,
			paddingTop: padding.top,
			paddingRight: padding.right,
			paddingBottom: padding.bottom,
			paddingLeft: padding.left,
			width: wFill ? '100%' : null,
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
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
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
	&--gray.button--outlined {
		background: transparent;
		border: 1px solid var(--Basic-Grey);
		color: var(--Basic-Grey);
		&:hover {
			background: var(--Basic-Grey);
			color: #fff;
		}
	}
	&--gradient-border {
		position: relative;
		background: transparent;
		border: none;
		color: var(--Basic-Dark);
		padding: 12px 24px;
		border-radius: 4px;
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			padding: 2px;
			border-radius: inherit;
			background: linear-gradient(90deg, #fab718, #63b22f, #984995, #1487c9);
			-webkit-mask:
				linear-gradient(#fff 0 0) content-box,
				linear-gradient(#fff 0 0);
			mask:
				linear-gradient(#fff 0 0) content-box,
				linear-gradient(#fff 0 0);
			-webkit-mask-composite: destination-out;
			mask-composite: exclude;
		}
		&:hover {
			color: var(--Basic-dark);
			background: #f5f5f5;
		}
	}
}
</style>
