<script setup>
const props = defineProps({
	documents: {
		type: Array,
		required: true,
	},
	isPending: {
		type: Boolean,
		default: false,
	},
})
const KANBAN_STATUSES = {
	10: 'Черновик',
	15: 'Отправлен',
	20: 'Просмотрен',
	30: 'Подписан',
	40: 'Аннулирован',
}
</script>

<template>
	<div class="documents-list">
		<BaseTable>
			<template #head>
				<tr>
					<th></th>
					<th>Название</th>
					<th>Инн</th>
					<th>Статус</th>
					<th>Баланс док.</th>
					<th>Роль</th>
				</tr>
			</template>
			<template #body>
				<CabinetCompanyListItem v-for="document in documents" :info="document" />
			</template>
		</BaseTable>
		<BasePreloader v-if="isPending" />
		<BaseNothing v-else-if="documents.length === 0" />
	</div>
</template>

<style scoped lang="scss">
.documents-list {
	@extend .b-card;
	display: flex;
	padding: 0;
	flex-direction: column;
	align-items: flex-start;
}
</style>
