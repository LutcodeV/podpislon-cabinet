<script setup>
import BaseSwitch from '../global/BaseSwitch.vue'

defineProps({
	info: {
		type: Object,
		required: true,
	},
})

const isModalVisible = ref(false)
const openModal = () => {
	isModalVisible.value = true
}
const closeModal = () => {
	isModalVisible.value = false
}
const active = ref(true)
</script>

<template>
	<tr :class="`documents-item ${active ? 'active' : ''}`">
		<td></td>
		<td>
			<BaseText class="documents-item__text" variant="small-main">16.08.2024 19:47</BaseText>
		</td>
		<td>
			<BaseText class="documents-item__text" variant="small-main">
				Право использования программы
			</BaseText>
		</td>
		<td>
			<BaseSwitch v-model="active" />
		</td>
		<td>
			<button class="documents-item__edit">
				<BaseIcon name="edit" />
			</button>
		</td>
		<td>
			<button class="documents-item__trash">
				<BaseIcon name="icon-trash" />
			</button>
		</td>
	</tr>
</template>

<style scoped lang="scss">
.documents-item {
	&__edit,
	&__trash {
		cursor: pointer;
		transition: 0.3s ease;
		color: var(--Basic-Grey);
	}
	&__text {
		transition: 0.3s ease;
		color: var(--Basic-Grey);
	}
	&.active {
		.documents-item__text {
			color: var(--Basic-Dark);
		}
	}
	& > * {
		@extend .f-small-main;
		padding: 12px 0;
		border-top: 1px solid var(--Basic-Background);
		box-sizing: content-box;
		padding-right: 16px;
		transition: 0.3s ease;
		&:first-child {
			padding-left: 24px;
			max-width: 14px;
			width: 14px;
		}
		&:last-child {
			padding-right: 32px;
		}
	}
	&:hover > * {
		background: var(--Basic-Background);
	}
	&__actions {
		display: flex;
		flex-direction: column;
		gap: 4px;
		cursor: pointer;
		max-width: 16px;
		span {
			width: 14px;
			height: 2px;
			border-radius: 4px;
			background: var(--Basic-Grey);
		}
	}
	&__title {
		cursor: pointer;
		transition: 0.3s ease;
		@include hover {
			color: var(--Basic-Branded);
		}
	}
	&__status {
		display: flex;
		flex-direction: column;
		gap: 8px;
		align-items: flex-start;
	}
}
</style>
