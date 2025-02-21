<script setup>
import ClientDetailItem from './ClientDetailItem.vue'

defineProps({
	info: {
		type: Object,
		required: true,
	},
})

const ACTIONS = [
	{
		label: 'Отправить документ',
		callback: () => {
			console.log(1)
		},
	},
	{
		label: 'Редактировать',
		callback: () => {
			console.log(1)
		},
	},
	{
		label: 'Удалить',
		callback: () => {
			console.log(1)
		},
	},
]

const isModalUserVisible = ref(false)

const tab = ref('Документы')
const TABS = ['Документы', 'Оплаты', 'Задачи', 'Сделки']

const DOCUMENTS_MOCK = ref([
	{
		id: '1',
		companyName: 'ООО “Водоочистные системы”',
		status: 10,
		date: '21.09.2023 15:49',
	},
	{
		id: '2',
		companyName: 'ООО “ТехноПром”',
		status: 15,
		date: '20.09.2023 14:30',
	},
	{
		id: '3',
		companyName: 'ООО “ЭкоФильтр”',
		status: 30,
		date: '19.09.2023 10:15',
	},
])
const PAYMENTS_MOCK = ref([
	{
		id: '1',
		companyName: 'ООО “Водоочистные системы”',
		status: 10,
		date: '21.09.2023 15:49',
		amount: 10000,
	},
	{
		id: '2',
		companyName: 'ООО “ТехноПром”',
		status: 15,
		date: '20.09.2023 14:30',
		amount: 10000,
	},
	{
		id: '3',
		companyName: 'ООО “ЭкоФильтр”',
		status: 30,
		date: '19.09.2023 10:15',
		amount: 10000,
	},
])
const TASTS_MOCK = ref([
	{
		id: '1',
		companyName: 'ООО “Водоочистные системы”',
		date: '21.09.2023 15:49',
	},
	{
		id: '2',
		companyName: 'ООО “ТехноПром”',
		date: '20.09.2023 14:30',
	},
	{
		id: '3',
		companyName: 'ООО “ЭкоФильтр”',
		date: '19.09.2023 10:15',
	},
])
</script>

<template>
	<tr class="bill-item" @click="isModalUserVisible = true">
		<td>
			<BaseRow gap="16px" align="center">
				<BaseTooltipActions :actions="ACTIONS" />
			</BaseRow>
		</td>
		<td>
			<BaseText>{{ info.fio }}</BaseText>
		</td>
		<td>
			<BaseText>{{ info.phone }}</BaseText>
		</td>
	</tr>

	<RightSlideModal :isVisible="isModalUserVisible" @close="isModalUserVisible = false">
		<RightSlideModalContainer class="info-modal">
			<BaseColumn gap="32px">
				<BaseCard class="info-modal__card">
					<button class="info-modal__edit"><BaseIcon name="edit" /></button>
					<BaseColumn>
						<BaseText uppercase class="info-modal__title" variant="heading">
							Кудрявцев Олег Валериевич
						</BaseText>
						<BaseColumn gap="12px">
							<BaseColumn gap="6px">
								<BaseText variant="small-main" color="var(--Basic-Grey)">Телефон</BaseText>
								<BaseText>+7 980 657 45 34</BaseText>
							</BaseColumn>
							<BaseColumn gap="6px">
								<BaseText variant="small-main" color="var(--Basic-Grey)">E-mail</BaseText>
								<BaseText>Gmaimaeil@yandex.com</BaseText>
							</BaseColumn>
							<BaseColumn gap="6px">
								<BaseText variant="small-main" color="var(--Basic-Grey)">
									Серия и номер паспорта
								</BaseText>
								<BaseText>1234 22101923</BaseText>
							</BaseColumn>
							<BaseColumn gap="6px">
								<BaseText variant="small-main" color="var(--Basic-Grey)">Дата выдачи</BaseText>
								<BaseText>19.02.2001</BaseText>
							</BaseColumn>
							<BaseColumn gap="6px">
								<BaseText variant="small-main" color="var(--Basic-Grey)">Органы выдачи</BaseText>
								<BaseText>Длиное название кто и где выдал</BaseText>
							</BaseColumn>
							<BaseColumn gap="6px">
								<BaseText variant="small-main" color="var(--Basic-Grey)">
									Адрес регистрации
								</BaseText>
								<BaseText>Г. СПБ. Ул Куйбишева 20</BaseText>
							</BaseColumn>
						</BaseColumn>
					</BaseColumn>
				</BaseCard>
				<BaseColumn>
					<Tabs v-model="tab" :tabs="TABS" class="info-modal__tabs" />
					<BaseColumn v-if="tab === 'Документы'">
						<ClientDetailItem v-for="item in DOCUMENTS_MOCK" v-bind="item" />
					</BaseColumn>
					<BaseColumn v-if="tab === 'Оплаты'">
						<ClientDetailItem v-for="item in PAYMENTS_MOCK" v-bind="item" />
					</BaseColumn>
					<BaseColumn v-if="tab === 'Задачи'">
						<ClientDetailItem v-for="item in TASTS_MOCK" v-bind="item" />
					</BaseColumn>
					<BaseColumn v-if="tab === 'Сделки'">
						<ClientDetailItem v-for="item in PAYMENTS_MOCK" v-bind="item" />
					</BaseColumn>
				</BaseColumn>
			</BaseColumn>
		</RightSlideModalContainer>
	</RightSlideModal>
</template>

<style scoped lang="scss">
.info-modal {
	max-width: 434px;
	width: 100%;
	&__card {
		position: relative;
	}
	&__edit {
		position: absolute;
		top: 14px;
		right: 14px;
		color: var(--Basic-Grey);
		width: 16px;
		height: 16px;
	}
	&__title {
		padding-right: 24px;
	}
}

.bill-item {
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
