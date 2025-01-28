<script setup>
const { offsetX, offsetY } = defineProps({
	offsetX: {
		type: Number,
		default: 0,
	},
	offsetY: {
		type: Number,
		default: 6,
	},
})
const triggerRef = ref(null)
const floatingRef = ref(null)
const isShow = ref(false)
const floatingStyles = ref({
	top: '0px',
	left: '0px',
})

const handlerShow = () => {
	isShow.value = true
}

const handlerHide = () => {
	isShow.value = false
}

watchEffect(() => {
	if (isShow.value) {
		const { x, y, width, height } = triggerRef.value.getBoundingClientRect()
		floatingStyles.value = {
			top: `${y + height + offsetY}px`,
			left: `${x + offsetX}px`,
		}
	}
})
</script>

<template>
	<div
		ref="triggerRef"
		:class="`popover ${isShow ? 'popover--active' : ''}`"
		@mouseenter="handlerShow"
		@mouseleave="handlerHide"
	>
		<div class="popover__trigger">
			<span></span>
			<span></span>
			<span></span>
		</div>
		<Teleport to="body">
			<div
				ref="floatingRef"
				@mouseenter="handlerShow"
				@mouseleave="handlerHide"
				:style="floatingStyles"
				:class="`popover-container ${isShow ? 'popover-container--show' : ''}`"
			>
				<slot></slot>
			</div>
		</Teleport>
	</div>
</template>

<style scoped lang="scss">
.popover {
	cursor: pointer;
	box-sizing: border-box;
	span {
		width: 20px;
		display: block;
		height: 2px;
		background: var(--Basic-Dark);
		transition: 0.3s ease;
		border-radius: 2px;
	}
	&__trigger {
		border: 12px solid transparent;
		margin: -12px;
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
	&--active {
		span:nth-child(2) {
			width: 16px;
		}
		span:nth-child(3) {
			width: 18px;
		}
	}
}
.popover-container {
	position: fixed;
	z-index: 99999;
	display: flex;
	flex-direction: column;
	gap: 12px;
	border-radius: 4px;
	background: #fff;
	box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
	padding: 12px;
	opacity: 0;
	pointer-events: none;
	transition:
		transform 0.3s ease,
		opacity 0.3s ease;
	transform: translateY(10px);
	&--show {
		opacity: 1;
		pointer-events: all;
		transform: translateY(0);
	}
	:deep(button) {
		@extend .f-small-main;
		white-space: nowrap;
		text-align: left;
		transition: 0.3s ease;
		@include hover {
			color: var(--Basic-Branded);
			text-decoration: underline;
		}
	}
}
</style>
