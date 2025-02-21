<script setup>
const form = ref({
	created_at: {
		start: null,
		end: null,
	},
	status: '',
	fio: '',
	phone: '',
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
	<PageHeader title="СПИСОК ДОКУМЕНТОВ" class="documents-header">
		<p class="documents-header__company">ИП Пантелемеев Горгипроваркат М...</p>
		<AddDocumentButton class="documents-header__button" />
		<button class="documents-header__menu">
			<span></span>
			<span></span>
			<span></span>
		</button>
	</PageHeader>
	<div class="documents-filters">
		<base-datepicker v-model="form.created_at" placeholder="Дата создания" />
		<base-select v-model="form.status" placeholder="Статус" :list="LIST_STATUS" />
		<base-input v-model="form.fio" placeholder="ФИО" />
		<base-input v-model="form.phone" placeholder="Телефон" />
	</div>
	<div class="documents-type">
		<button
			:class="`documents-type__button ${ACTIVE_TYPE === 'list' ? 'documents-type__button--active' : ''}`"
			@click="ACTIVE_TYPE = 'list'"
		>
			<base-icon name="list-icon" />
			Список
		</button>
		<button
			:class="`documents-type__button ${ACTIVE_TYPE === 'kanban' ? 'documents-type__button--active' : ''}`"
			@click="ACTIVE_TYPE = 'kanban'"
		>
			<base-icon name="kanban-icon" />
			Канбан
		</button>
	</div>
	<documents-kanban
		class="documents-kanban"
		v-if="ACTIVE_TYPE === 'kanban'"
		:documents="DOCUMENTS"
	/>
	<documents-list class="documents-list" v-if="ACTIVE_TYPE === 'list'" :documents="DOCUMENTS" />
</template>

<style scoped lang="scss">
.documents-kanban {
	margin-top: 16px;
	flex: 1 1 0;
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
}
.documents-header {
	&__company {
		@extend .f-small-main;
		margin-left: 18px;
		color: var(--Basic-Grey);
	}
	:deep(.documents-header__button) {
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
