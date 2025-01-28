<script setup>
import DocumentSignatory from './DocumentSignatory.vue'
import HistoryLine from './HistoryLine.vue'
import OptionsList from './OptionsList.vue'
import RightSlideModal from './RightSlideModal.vue'
import RightSlideModalContainer from './RightSlideModalContainer.vue'

defineProps({
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
const isModalVisible = ref(false)
const mainModal = ref(null)
const openModal = () => {
	isModalVisible.value = true
}
const closeModal = () => {
	isModalVisible.value = false
}

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
</script>

<template>
	<div class="document">
		<button @click="openModal" class="document__title">{{ info.title }}</button>
		<div class="document-users">
			<p>
				{{
					info.users.length > 1
						? `${info.users[0].full_name} +${info.users.length - 1}`
						: info.users[0].full_name
				}}
			</p>
			<div class="document-users__list-wrapper">
				<div class="document-users__list">
					<div class="document-users-item" v-for="user in info.users">
						<BaseIcon name="profile" class="document-users-item__icon" />
						<div class="document-users-item__col">
							<p class="document-users-item__title">{{ user.full_name }}</p>
							<p class="document-users-item__phone"><span>Тел.</span> {{ user.phone || '-' }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<p class="document__date">{{ info.date }}</p>
	</div>
	<RightSlideModal :isVisible="isModalVisible" @close="closeModal" ref="mainModal">
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
		<RightSlideModalContainer class="pdf-modal">
			<iframe class="pdf-modal__iframe" src="/assets/pdf/lorem.pdf" />
		</RightSlideModalContainer>
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
		text-decoration: underline;
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
.pdf-modal {
	padding: 0;
	max-width: 621px;
	width: 100%;
	display: flex;
	flex-direction: column;
	&__iframe {
		flex: 1;
		width: 100%;
		height: 100%;
	}
}
.history-modal {
	max-width: 335px;
	width: 100%;
}
.document-users-item {
	display: flex;
	gap: 8px;
	padding: 12px;
	&__col {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	&__title {
		@extend .f-small-main;
		color: var(--Basic-Grey);
	}
	&__icon {
		color: var(--Basic-Grey) !important;
	}
	&__phone {
		@extend .f-signatures;
		color: var(--Basic-Dark);
		display: flex;
		gap: 10px;
		span {
			color: var(--Basic-Grey) !important;
		}
	}
	& + & {
		border-top: 1px solid var(--Basic-Background);
	}
}
.document-users {
	@extend .f-main-text;
	transition: 0.3s ease;
	position: relative;
	cursor: pointer;
	&__list-wrapper {
		padding-top: 16px;
		position: absolute;
		top: 100%;
		left: 0;
		padding-left: 100px;
		opacity: 0;
		z-index: 1;
		pointer-events: none;
		transition: 0.3s ease;
		transform: translateY(10px);
	}
	&__list {
		border-radius: 4px;
		min-width: 200px;
		background: #fff;
		box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
	}
	@include hover {
		color: var(--Basic-Branded);
		.document-users__list-wrapper {
			opacity: 1;
			pointer-events: all;
			transform: translateY(0);
		}
	}
}
.document {
	display: flex;
	flex-direction: column;
	gap: 12px;
	background: var(--Basic-Background);
	border-radius: 4px;
	padding: 16px;
	&__title {
		@extend .f-main-text;
		transition: 0.3s ease;
		cursor: pointer;
		text-align: left;
		@include hover {
			color: var(--Basic-Branded);
		}
	}
	&__date {
		@extend .f-signatures;
		transition: 0.3s ease;
		color: var(--Basic-Grey);
	}
	&:has(.document__title:hover) {
		.document-users,
		.document__date {
			opacity: 0.5;
		}
	}
	&:has(.document-users:hover) {
		.document__title,
		.document__date {
			opacity: 0.5;
		}
	}
}
</style>
