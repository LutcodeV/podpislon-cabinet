<script setup>
import AddRoleButton from '@/components/employees/AddRoleButton.vue'
import EmployeesRoleList from '@/components/employees/EmployeesRoleList.vue'

const ITEMS = [
	{
		name: 'Название может быть длиное очень длиное',
		date: '16.08.2024   19:47',
		employees:
			'Олег Валериевич, Саня Документов, Марина Подпись, Олег Валериевич, Саня Документов, Марина Подпись',
	},
]
</script>

<template>
	<PageHeader title="Права Доступа" class="documents-header">
		<p class="documents-header__company">ИП Пантелемеев Горгипроваркат М...</p>
		<BaseRow gap="32px" class="documents-header__row">
			<AddRoleButton class="documents-header__button" />
		</BaseRow>
	</PageHeader>
	<EmployeesRoleList class="documents-list" :items="ITEMS" />
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
