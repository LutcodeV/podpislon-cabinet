<script setup>
import AddCompanyButton from '@/components/cabinet/AddCompanyButton.vue'
import CabinetCompaniesList from '@/components/cabinet/CabinetCompaniesList.vue'
import CabinetDocumentsList from '@/components/cabinet/CabinetDocumentsList.vue'
import DistributeBalanceButton from '@/components/cabinet/DistributeBalanceButton.vue'

const form = ref({
	created_at: {
		start: null,
		end: null,
	},
	status: '',
	company: '',
})

const LIST_STATUS = ['Все', 'Подписан', 'Просмотрен', 'Аннулирован']
const ACTIVE_TYPE = ref('list')
const DOCUMENTS = [
	{
		title: 'Договор на внедрение Битрикс24 Off Group 2024 366_24',
		users: [
			{ full_name: 'Иванов Олег', phone: '+7 (999) 999-99-99' },
			{ full_name: 'Иванов Олег', phone: '+7 (999) 999-99-99' },
		],
		date: '16.08.2024 19:47',
		status: 10,
		isMain: true,
	},
	{
		title: 'Договор на внедрение Битрикс24 Off Group 2024 366_24',
		users: [
			{ full_name: 'Иванов Олег', phone: '+7 (999) 999-99-99' },
			{ full_name: 'Иванов Олег', phone: '+7 (999) 999-99-99' },
		],
		date: '16.08.2024 19:47',
		status: 15,
	},
]
</script>

<template>
	<PageHeader title="Мои компании" class="documents-header">
		<DistributeBalanceButton class="documents-header__button" />
		<AddCompanyButton class="documents-header__button" />
	</PageHeader>
	<CabinetCompaniesList class="documents-list" :documents="DOCUMENTS" />
</template>

<style scoped lang="scss">
.documents-list {
	margin-top: 16px;
	flex: 1 1 0;
}
.documents-header {
	&__company {
		@extend .f-small-main;
		margin-left: 18px;
		color: var(--Basic-Grey);
	}
	:deep(.documents-header__button) {
		margin-left: 32px;
		&:not(:last-of-type) {
			margin-left: auto;
		}
	}
	&__menu {
		display: flex;
		margin-left: auto;
		flex-direction: column;
		gap: 7px;
		span {
			width: 29px;
			height: 3px;
			border-radius: 2px;
			background: var(--Basic-Dark);
		}
	}
}
</style>
