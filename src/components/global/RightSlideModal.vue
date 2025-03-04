<script setup>
const props = defineProps({
	isVisible: {
		type: Boolean,
		required: true,
	},
})
const slots = defineSlots()
const emit = defineEmits(['close'])
const closed = ref(false)
const closeModal = () => {
	closed.value = true
	emit('close')
}
watch(
	() => props.isVisible,
	() => {
		if (props.isVisible) closed.value = false
	},
)

const DELAY = 0.25
const DURATION = 0.25
</script>

<template>
	<div
		:class="`modal-overlay ${props.isVisible ? 'active' : ''} ${closed ? 'closed' : ''}`"
		@click.self="closeModal"
		:style="{
			'--close-duration': `${($slots.default().length + 1) * DELAY}s`,
			'--duration': `${DURATION}s`,
		}"
	>
		<button
			class="modal-close"
			@click="closeModal"
			:style="{ '--delay': `${$slots.default().length * DELAY}s` }"
		>
			<BaseIcon name="close-modal" />
		</button>
		<template v-for="(child, index) in $slots.default()" :key="index">
			<component
				:is="child"
				:style="{
					'--delay': `${($slots.default().length - 1 - index) * DELAY}s`,
					'--back-delay': `${(index + 1) * DELAY}s`,
				}"
			/>
		</template>
	</div>
</template>
<style lang="scss" scoped>
@keyframes slideToLeft {
	from {
		transform: translateX(100%);
		opacity: 0;
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
@keyframes slideToRight {
	from {
		opacity: 1;
		transform: translateX(0);
	}
	to {
		transform: translateX(100%);
		opacity: 0;
	}
}
.modal-close {
	z-index: 1;
	position: relative;
	margin-top: 24px;
	background: var(--Basic-Grey);
	border-radius: 4px 0px 0px 4px;
	padding: 8px;
	display: flex;
	align-items: center;
	transition: 0.3s ease;
	justify-content: center;
	svg {
		width: 16px;
		height: 16px;
		color: var(--Basic-Background);
	}
	@include hover {
		background: var(--Basic-Branded);
	}
}
.modal-overlay {
	--duration: 0.3s;
	--close-duration: 0.3s;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	overflow: hidden;
	justify-content: flex-end;
	align-items: flex-start;
	z-index: 1000;
	background: rgba(0, 0, 0, 0.2);
	backdrop-filter: blur(2px);
	opacity: 0;
	pointer-events: none;
	transition: var(--duration) ease var(--close-duration);
	&.active {
		opacity: 1;
		transition: var(--duration) ease;
		pointer-events: all;
		& > * {
			animation: slideToLeft var(--duration) ease var(--delay) both;
		}
	}
	&.closed {
		& > * {
			--back-delay: 0s;
			animation: slideToRight var(--duration) ease var(--back-delay) forwards;
		}
	}
}
</style>
