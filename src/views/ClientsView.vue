<script setup>
import AddClientButton from '@/components/clients/AddClientButton.vue'

const form = ref({
	fio: '',
	phone: '',
})

const ITEMS = [
	{
		fio: 'Иванов Олег Иванович',
		phone: '+7 (999) 999-99-99',
	},
	{
		fio: 'Иванов Олег Иванович',
		phone: '+7 (999) 999-99-99',
	},
	{
		fio: 'Иванов Олег Иванович',
		phone: '+7 (999) 999-99-99',
	},
]
</script>

<template>
	<PageHeader title="Клиенты" class="documents-header">
		<p class="documents-header__company">ИП Пантелемеев Горгипроваркат М...</p>
		<BaseRow gap="32px" class="documents-header__row">
			<RequestDataButton class="documents-header__button" />
			<AddClientButton class="documents-header__button" />
		</BaseRow>
	</PageHeader>
	<div class="documents-filters">
		<base-input v-model="form.fio" placeholder="ФИО" />
		<base-input v-model="form.phone" placeholder="Телефон" />
	</div>
	<ClientsList class="documents-list" :items="ITEMS" />
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
