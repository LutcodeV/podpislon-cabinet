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
		<RightSlideModalContainer class="info-modal">
			<div class="info-modal-contract">
				<OptionsList class="info-modal-contract-options">
					<button class="info-modal-contract-options__button">Скачать</button>
					<button class="info-modal-contract-options__button">Запросить аннулирование</button>
					<button class="info-modal-contract-options__button">Удалить</button>
				</OptionsList>
				<a class="info-modal-contract__link" href="/assets/pdf/lorem.pdf">
					<BaseIcon name="link" />
					Ссылка на документ
				</a>
				<p class="info-modal-contract__title">
					Договор на внедрение Битрикс24 Off Group 2024 366_24
				</p>
				<p class="info-modal-contract__date">21.09.2023 15:49</p>
				<div class="info-modal-contract-item">
					<p class="info-modal-contract-item__title">Добавил</p>
					<div class="info-modal-contract-item__row">
						<img
							src="/assets/img/avatar-placeholder.jpg"
							alt=""
							class="info-modal-contract-item__img"
						/>
						<p class="info-modal-contact-item__value">Александр Александрович</p>
					</div>
				</div>
				<div class="info-modal-contract-item">
					<p class="info-modal-contract-item__title">Сделка</p>
					<div class="info-modal-contract-item__row">
						<BaseIcon name="shield" class="info-modal-contract-item__icon" />
						<p class="info-modal-contact-item__value">Сделка №234</p>
					</div>
				</div>
			</div>
			<Tabs v-model="tab" :tabs="TABS" class="info-modal__tabs" />
			<div class="info-modal-signatories">
				<DocumentSignatory v-for="signatory in SIGNATORIES" :signatory="signatory" />
			</div>
		</RightSlideModalContainer>
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
