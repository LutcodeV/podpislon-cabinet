<script setup>
import CabinetDocumentDetails from './CabinetDocumentDetails.vue'

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
</script>

<template>
	<tr class="documents-item">
		<td>
			<div class="documents-item__actions">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</td>
		<td>
			<p class="documents-item__date">16.08.2024 19:47</p>
		</td>
		<td>
			<button class="documents-item__title" @click="openModal">
				Договор на внедрение Битрикс24 Off Group 2024 366_24
			</button>
		</td>
		<td>
			<BaseText>Подпислон ООО</BaseText>
		</td>
		<td>
			<p class="documents-item__status">
				<StatusTag :status="30" />
				21.01.2024 16:23
			</p>
		</td>
	</tr>
	<CabinetDocumentDetails :is-modal-visible="isModalVisible" @close="closeModal" :info="info" />
</template>

<style scoped lang="scss">
.documents-item {
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
