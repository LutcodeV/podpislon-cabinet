<script setup>
defineProps({
	isDraggable: {
		type: Boolean,
		default: false,
	},
	info: {
		type: Object,
		default: () => ({}),
	},
	editable: {
		type: Boolean,
		default: false,
	},
})
</script>

<template>
	<div class="attached-document" :draggable="isDraggable" @dragover.prevent>
		<div class="attached-document__drag" v-if="isDraggable">
			<span></span>
			<span></span>
			<span></span>
		</div>
		<BaseIcon class="attached-document__icon" name="icon-document"></BaseIcon>
		<p class="attached-document__title">
			{{ info.name }}
		</p>
		<button v-if="editable" class="attached-document__trash" @click.stop="$emit('delete')">
			<BaseIcon name="icon-trash"></BaseIcon>
		</button>
	</div>
</template>

<style scoped lang="scss">
.attached-document {
	@extend .b-card;
	display: flex;
	transition: 0.3s ease;
	align-items: center;
	position: relative;
	cursor: pointer;
	padding: 12px 16px 12px 16px;
	&__drag {
		border: 4px solid transparent;
		margin: 0 -4px;
		display: flex;
		flex-direction: column;
		gap: 3px;
		cursor: grab;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 4px;
		span {
			width: 3px;
			height: 3px;
			border-radius: 50%;
			background: var(--Basic-Grey);
		}
		&:active {
			cursor: grabbing;
		}
	}
	&__icon {
		min-width: 16px;
		max-width: 16px;
		width: 16px;
	}
	&__trash {
		margin-left: auto;
		min-width: 14px;
		max-width: 14px;
		width: 14px;
		color: var(--Basic-Grey);
		cursor: pointer;
		&:hover {
			color: var(--Basic-Dark);
		}
	}
	&__title {
		@extend .f-main-text;
		margin-right: auto;
		margin-left: 16px;
	}
	&:has(~ .attached-document:hover) {
		opacity: 0.5;
	}
	&:hover ~ & {
		opacity: 0.5;
	}
}
</style>
