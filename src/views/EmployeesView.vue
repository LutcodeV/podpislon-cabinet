<script setup>
import AddEmployeesButton from '@/components/employees/AddEmployeesButton.vue'
import EmployeesList from '@/components/employees/EmployeesList.vue'

const form = ref({
	fio: '',
	status: '',
	departament: '',
})

const ITEMS = [
	{
		fio: 'Иванов Олег Иванович',
		phone: '+7 (999) 999-99-99',
		departament: 'Отдел продаж',
		status: 30,
		email: 's3vVx@example.com',
		date: '16.08.2024   19:47',
		avatar: '/assets/img/avatar.jpg',
		id: 'p[okjfew]',
	},
	{
		fio: 'Иванов Олег Иванович',
		phone: '+7 (999) 999-99-99',
		departament: 'Отдел продаж',
		status: 30,
		email: 's3vVx@example.com',
		date: '16.08.2024   19:47',
		avatar: null,
		id: 'po[jkerwgbv]',
	},
]

const LIST_STATUS = ['Все', 'Подписан', 'Просмотрен', 'Аннулирован']
const LIST_DEPARTAMENTS = ['Все', 'Подписан', 'Просмотрен', 'Аннулирован']
</script>

<template>
	<PageHeader title="Сотрудники" class="documents-header">
		<p class="documents-header__company">ИП Пантелемеев Горгипроваркат М...</p>
		<BaseRow gap="32px" class="documents-header__row">
			<AddEmployeesButton class="documents-header__button" />
		</BaseRow>
	</PageHeader>
	<div class="documents-filters">
		<base-input v-model="form.fio" placeholder="ФИО" />
		<base-select v-model="form.departament" placeholder="Отдел" :list="LIST_DEPARTAMENTS" />
		<base-select v-model="form.status" placeholder="Статус" :list="LIST_STATUS" />
	</div>
	<EmployeesList class="documents-list" :items="ITEMS" />
</template>

<style scoped lang="scss">
.documents-list {
	margin-top: 16px;
	flex: 1 1 0;
}
.documents-type {
	display: flex;
	margin-top: 16px;
	margin-left: 10px;
	gap: 24px;
	&__button {
		@extend .f-signatures;
		gap: 8px;
		display: flex;
		align-items: center;
		color: var(--Basic-Grey);
		transition: 0.3s ease;
		&--active {
			color: var(--Basic-Dark);
			text-decoration: underline;
			text-underline-position: under;
			svg {
				color: var(--Basic-Dark);
			}
		}
	}
}
.documents-filters {
	@extend .b-card;
	margin-top: 24px;
	display: flex;
	gap: 24px;
	:deep(.input) {
		max-width: 300px;
	}
}
.documents-header {
	&__company {
		@extend .f-small-main;
		margin-left: 18px;
		color: var(--Basic-Grey);
	}
	&__row {
		margin-left: auto;
	}
	&__menu {
		display: flex;
		flex-direction: column;
		gap: 7px;
		margin-left: 32px;
		span {
			width: 29px;
			height: 3px;
			border-radius: 2px;
			background: var(--Basic-Dark);
		}
	}
}
</style>
