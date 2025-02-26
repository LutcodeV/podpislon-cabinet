<script setup>
defineProps({
	isModalVisible: {
		type: Boolean,
		required: true,
	},
	info: {
		type: Object,
		required: true,
	},
})

const HISTORY = [
	{
		date: '12.11.2023 10:23',
		status: 12,
		user: 'Иванов Иван Иванович',
	},
	{
		date: '12.11.2023 10:23',
		status: 15,
		user: 'Ольга Ольговна Ольгова',
	},
	{
		date: '12.11.2023 10:23',
		status: 20,
		user: 'Ольга Ольговна Ольгова',
	},
	{
		date: '12.11.2023 10:23',
		status: 30,
		user: 'Ольга Ольговна Ольгова',
	},
	{
		status: 50,
	},
	{
		date: '12.11.2023 10:23',
		status: 35,
		user: 'Иванов Иван Иванович',
	},
	{
		date: '12.11.2023 10:23',
		status: 40,
		user: 'Иванов Иван Иванович',
	},
	{
		status: 51,
	},
]
const tab = ref('Подписанты')
const TABS = ['Подписанты', 'Оплаты', 'Задачи']
const SIGNATORIES = [
	{
		title: 'ООО “Водоочистные системы',
		type: 'company',
		date: '12.11.2023 10:23',
		status: 30,
	},
	{
		title: 'Александр Александрович',
		type: 'person',
		date: '12.11.2023 10:23',
		status: 15,
	},
]
defineEmits(['close'])
</script>

<template>
	<RightSlideModal :isVisible="isModalVisible" @close="$emit('close')" ref="mainModal">
		<PDFModal src="/assets/pdf/lorem.pdf" />
		<RightSlideModalContainer title="История" class="history-modal">
			<HistoryLine :data="HISTORY" />
		</RightSlideModalContainer>
	</RightSlideModal>
</template>

<style scoped lang="scss">
.info-modal-signatories {
	display: flex;
	flex-direction: column;
	gap: 12px;
	margin-top: 24px;
}
.info-modal-contract-options {
	position: absolute;
	top: 14px;
	right: 14px;
	cursor: pointer;
}
.info-modal {
	&__tabs {
		margin-top: 32px;
	}
}
.info-modal-contract {
	border-radius: 4px;
	position: relative;
	background: #fff;
	padding: 24px;
	display: flex;
	flex-direction: column;
	box-shadow: -4px 4px 9.9px 0px rgba(0, 0, 0, 0.06);
	&__date {
		@extend .f-signatures;
		color: var(--Basic-Grey);
		margin-top: 12px;
	}
	&__title {
		max-width: 282px;
		width: 100%;
		@extend .f-main-text;
		margin-top: 12px;
	}
	&__link {
		@extend .f-signatures;
		display: flex;
		gap: 8px;
		align-items: center;
		color: var(--Basic-Grey);
		@include hover {
			text-decoration: underline;
		}
	}
}
.info-modal-contract-item {
	display: flex;
	flex-direction: column;
	gap: 8px;
	margin-top: 24px;
	&__row {
		display: flex;
		align-items: center;
		padding: 8px 12px;
		border-radius: 4px;
		background: var(--Basic-Background);
		gap: 12px;
	}
	&__title {
		@extend .f-signatures;
		color: var(--Basic-Grey);
	}
	&__img {
		max-width: 22px;
		width: 100%;
		min-width: 22px;
		min-height: 22px;
		height: 22px;
		max-height: 22px;
		border-radius: 50%;
	}
	&__value {
		@extend .f-main-text;
	}
	& + & {
		margin-top: 12px;
	}
}
.history-modal {
	max-width: 335px;
	width: 100%;
}
</style>
