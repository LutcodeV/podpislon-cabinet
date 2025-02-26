<script setup>
import EmployeeStructureCard from '@/components/employees/EmployeeStructureCard.vue'

const ITEMS = [
	{
		name: 'Название отдела может быть длиное',
		supervisor: {
			name: 'Петров Олег Иванович',
			avatar: '/assets/img/avatar.jpg',
		},
		users: [
			{
				full_name: 'Георгий Героев Отчество',
				phone: '+7 967 456 87 56',
			},
			{
				full_name: 'Георгий Героев Отчество',
				phone: '+7 967 456 87 56',
			},
			{
				full_name: 'Георгий Героев Отчество',
				phone: '+7 967 456 87 56',
			},
		],
	},
	{
		name: 'Название отдела может быть длиное',
		users: [
			{
				full_name: 'Георгий Героев Отчество',
				phone: '+7 967 456 87 56',
			},
			{
				full_name: 'Георгий Героев Отчество',
				phone: '+7 967 456 87 56',
			},
			{
				full_name: 'Георгий Героев Отчество',
				phone: '+7 967 456 87 56',
			},
		],
	},
	{
		name: 'Название отдела может быть длиное',
		supervisor: {
			name: 'Петров Олег Иванович',
			avatar: '/assets/img/avatar.jpg',
		},
		users: [
			{
				full_name: 'Георгий Героев Отчество',
				phone: '+7 967 456 87 56',
			},
			{
				full_name: 'Георгий Героев Отчество',
				phone: '+7 967 456 87 56',
			},
			{
				full_name: 'Георгий Героев Отчество',
				phone: '+7 967 456 87 56',
			},
		],
	},
]
</script>

<template>
	<PageHeader title="Структура компании" class="documents-header">
		<p class="documents-header__company">ИП Пантелемеев Горгипроваркат М...</p>
	</PageHeader>
	<BaseColumn gap="70px" wFill class="employees-structure">
		<EmployeeStructureCard :info="ITEMS[0]" />
		<BaseRow gap="24px" class="employees-structure__row">
			<EmployeeStructureCard :info="ITEMS[1]" />
			<EmployeeStructureCard :info="ITEMS[2]" />
			<EmployeeStructureCard :info="ITEMS[1]" />
			<!-- <BaseColumn gap="70px" align="center" wFill justify="center">
				<EmployeeStructureCard />
				<BaseRow gap="24px" class="employees-structure__row">
					<EmployeeStructureCard />
					<EmployeeStructureCard />
					<BaseColumn gap="70px" align="center" wFill justify="center">
						<EmployeeStructureCard />
						<BaseRow gap="24px" class="employees-structure__row">
							<EmployeeStructureCard />
							<EmployeeStructureCard />
							<EmployeeStructureCard />
						</BaseRow>
					</BaseColumn>
				</BaseRow>
			</BaseColumn>
			<BaseColumn gap="70px" align="center" wFill justify="center">
				<EmployeeStructureCard />
				<BaseRow gap="24px" class="employees-structure__row">
					<EmployeeStructureCard />
					<BaseColumn gap="70px" align="center" wFill justify="center">
						<EmployeeStructureCard />
						<BaseRow gap="24px" class="employees-structure__row">
							<EmployeeStructureCard />
							<EmployeeStructureCard />
							<EmployeeStructureCard />
						</BaseRow>
					</BaseColumn>
					<EmployeeStructureCard />
				</BaseRow>
			</BaseColumn> -->
		</BaseRow>
	</BaseColumn>
</template>

<style scoped lang="scss">
.employees-structure {
	overflow: auto;
	flex: 1 1 0;
	max-width: 100%;
	width: 100%;
	margin-top: 24px;
	& > * {
		margin: 0 auto;
	}
}
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
