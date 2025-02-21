<script setup>
const props = defineProps({
	info: {
		type: Object,
		required: true,
	},
	editable: {
		type: Boolean,
		default: false,
	},
})
const emit = defineEmits(['delete'])

const isEdit = ref(false)
</script>

<template>
	<BaseCard type="small" class="selected-provider">
		<div class="selected-provider__header">
			<img :src="info.logo" alt="" class="selected-provider__logo" />
			<div class="selected-provider__column">
				<BaseText weight="400">
					{{ info.name }}
				</BaseText>
			</div>
			<button class="selected-provider__button" @click="isEdit = !isEdit" v-if="editable">
				<BaseIcon size="16" name="edit" />
			</button>
			<button class="selected-provider__button" @click="$emit('delete')" v-if="editable">
				<BaseIcon size="16" name="trash" />
			</button>
		</div>
		<div
			:class="`selected-provider__edit selected-provider__edit--${isEdit ? 'active' : ''}`"
			v-if="editable"
		>
			<div class="selected-provider__edit-content">
				<slot :close="() => (isEdit = false)" name="edit"></slot>
			</div>
		</div>
	</BaseCard>
</template>

<style scoped lang="scss">
.selected-provider {
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 0 !important;
	&__logo {
		margin-right: 16px;
		width: 80px;
		height: 30px;
	}
	&__column {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 8px 0;
	}
	&__button {
		cursor: pointer;
		// margin-bottom: -12px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px 14px;
		color: var(--Basic-Grey);
		border-left: 1px solid var(--Basic-Background);
		&:not(:last-child) {
			margin-left: auto;
		}
		&:hover {
			color: var(--Basic-Dark);
		}
	}
	&__header {
		display: flex;
		align-items: center;
		padding: 0px 0px 0px 16px;
	}
	&__edit {
		padding: 0px 24px;
		display: grid;
		grid-template-rows: 0fr;
		flex-direction: column;
		border-top: 1px solid var(--Basic-Background);
		transition: 0.3s ease;
		&--active {
			padding: 24px;
			grid-template-rows: 1fr;
		}
		&-content {
			align-items: flex-start;
			display: flex;
			flex-direction: column;
			overflow: hidden;
			transition: 0.3s ease;
			height: 100%;
			gap: 12px;
			:deep(.input) {
				width: 100%;
			}
		}
	}
}
</style>
