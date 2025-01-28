<script setup>
const props = defineProps({
	isVisible: {
		type: Boolean,
		required: true,
	},
	level: {
		type: Number,
		default: 0,
	},
})

const emit = defineEmits(['close'])

const closeModal = () => {
	emit('close')
}

const DELAY = 0.3
</script>

<template>
	<div class="modal-overlay" v-if="isVisible" @click.self="closeModal">
		<button
			class="modal-close"
			@click="closeModal"
			:style="{ '--delay': `${Math.round($slots.default().length * DELAY)}s` }"
		>
			<BaseIcon name="close-modal" />
		</button>
		<template v-for="(child, index) in $slots.default()" :key="index">
			<component
				:is="child"
				:style="{
					'--delay': `${($slots.default().length - 1 - index) * DELAY}s`,
				}"
			/>
		</template>
	</div>
</template>

<style lang="scss" scoped>
.modal-close {
	z-index: 1;
	position: relative;
	margin-top: 24px;
	background: var(--Basic-Grey);
	border-radius: 4px 0px 0px 4px;
	padding: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	svg {
		width: 16px;
		height: 16px;
		color: var(--Basic-Background);
	}
}
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
.modal-overlay {
	--duration: 0.3s;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	z-index: 1000;
	background: rgba(0, 0, 0, 0.2);
	backdrop-filter: blur(2px);
	animation: overlay 0.3s ease;
	& > * {
		animation: slideToLeft var(--duration) ease var(--delay) both;
	}
}
@keyframes overlay {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
</style>
